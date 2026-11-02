// Q14. Real-Time Order Tracking System
use NoSQL_Lab3;
db.trackedOrders.drop();

db.trackedOrders.insertOne({
  orderId: 7001,
  customerId: 101,
  currentStatus: "Placed",
  statusHistory: [
    { status: "Placed", date: ISODate("2026-10-20T09:00:00Z"), note: "Order received" }
  ]
});

// 1. Move order to Confirmed
db.trackedOrders.updateOne(
  { orderId: 7001 },
  {
    $set: { currentStatus: "Confirmed" },
    $push: { statusHistory: { status: "Confirmed", date: new Date(), note: "Payment confirmed" } }
  }
);

// 2. Move order to Shipped
db.trackedOrders.updateOne(
  { orderId: 7001 },
  {
    $set: { currentStatus: "Shipped" },
    $push: { statusHistory: { status: "Shipped", date: new Date(), note: "Order dispatched" } }
  }
);

// 3. Move order to Delivered
db.trackedOrders.updateOne(
  { orderId: 7001 },
  {
    $set: { currentStatus: "Delivered" },
    $push: { statusHistory: { status: "Delivered", date: new Date(), note: "Order delivered" } }
  }
);

// 4. Retrieve current status
db.trackedOrders.find(
  { orderId: 7001 },
  { _id: 0, orderId: 1, currentStatus: 1 }
);

// 5. Retrieve complete status history
db.trackedOrders.find(
  { orderId: 7001 },
  { _id: 0, orderId: 1, statusHistory: 1 }
);
