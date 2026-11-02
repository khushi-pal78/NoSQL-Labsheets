// Q11. Bank Wallet Transfer using MongoDB transactions
// IMPORTANT: Multi-document transactions require a replica set or sharded cluster.
// MongoDB Atlas clusters support transactions. Connect mongosh to Atlas before running.
use NoSQL_Lab3;
db.wallets.deleteMany({});

db.wallets.insertMany([
  { userId: 1, name: "Aman", balance: 5000 },
  { userId: 2, name: "Riya", balance: 3000 }
]);

// Transfer 1000 from Aman (userId 1) to Riya (userId 2), atomically.
const session = db.getMongo().startSession();
const sessionDb = session.getDatabase("NoSQL_Lab3");

try {
  session.startTransaction();

  const debit = sessionDb.wallets.updateOne(
    { userId: 1, balance: { $gte: 1000 } },
    { $inc: { balance: -1000 } }
  );

  if (debit.modifiedCount !== 1) {
    throw new Error("Sender not found or insufficient balance");
  }

  const credit = sessionDb.wallets.updateOne(
    { userId: 2 },
    { $inc: { balance: 1000 } }
  );

  if (credit.modifiedCount !== 1) {
    throw new Error("Receiver not found");
  }

  session.commitTransaction();
  print("Transfer successful");
} catch (error) {
  session.abortTransaction();
  print("Transfer failed; changes rolled back: " + error.message);
} finally {
  session.endSession();
}

// Verify balances
db.wallets.find({}, { _id: 0, userId: 1, name: 1, balance: 1 });
