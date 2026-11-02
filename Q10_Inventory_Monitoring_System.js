// Q10. Inventory Monitoring System
use NoSQL_Lab3;
db.inventory.drop();

db.inventory.insertMany([
  { productId: 1, name: "Keyboard", stock: 5, minimumStock: 10, supplier: "ABC Traders", restockDate: ISODate("2026-11-05") },
  { productId: 2, name: "Mouse", stock: 25, minimumStock: 10, supplier: "XYZ Supplies", restockDate: ISODate("2026-11-10") },
  { productId: 3, name: "Monitor", stock: 2, minimumStock: 5, supplier: "Tech Distributors", restockDate: ISODate("2026-11-03") },
  { productId: 4, name: "USB Drive", stock: 8, minimumStock: 8, supplier: "ABC Traders", restockDate: ISODate("2026-11-06") }
]);

// 1. Display all inventory
db.inventory.find();

// 2. Products needing restocking (stock below minimum stock)
db.inventory.find({ $expr: { $lt: ["$stock", "$minimumStock"] } });

// 3. Products at or below minimum stock
db.inventory.find({ $expr: { $lte: ["$stock", "$minimumStock"] } });

// 4. Sort products needing restocking by lowest stock first
db.inventory.aggregate([
  { $match: { $expr: { $lt: ["$stock", "$minimumStock"] } } },
  { $sort: { stock: 1 } }
]);

// 5. Find products supplied by ABC Traders
db.inventory.find({ supplier: "ABC Traders" });
