// Q5. E-Commerce Order Management System
use NoSQL_Lab3;
db.customers.drop();
db.storeProducts.drop();
db.orders.drop();

db.customers.insertMany([
  { customerId: 1, name: "Aman", email: "aman@example.com" },
  { customerId: 2, name: "Riya", email: "riya@example.com" }
]);

db.storeProducts.insertMany([
  { productId: 101, name: "Keyboard", price: 800 },
  { productId: 102, name: "Mouse", price: 500 },
  { productId: 103, name: "Monitor", price: 9000 }
]);

db.orders.insertMany([
  {
    orderId: 501, customerId: 1, orderDate: ISODate("2026-10-20"),
    items: [
      { productId: 101, name: "Keyboard", quantity: 2, price: 800 },
      { productId: 102, name: "Mouse", quantity: 1, price: 500 }
    ],
    status: "Delivered"
  },
  {
    orderId: 502, customerId: 1, orderDate: ISODate("2026-10-25"),
    items: [{ productId: 103, name: "Monitor", quantity: 1, price: 9000 }],
    status: "Shipped"
  },
  {
    orderId: 503, customerId: 2, orderDate: ISODate("2026-10-26"),
    items: [{ productId: 102, name: "Mouse", quantity: 2, price: 500 }],
    status: "Placed"
  }
]);

// 1. Complete purchase history for customer 1
db.orders.find({ customerId: 1 }).sort({ orderDate: -1 });

// 2. Calculate total of each order using quantity * price
db.orders.aggregate([
  { $unwind: "$items" },
  { $group: {
      _id: "$orderId",
      customerId: { $first: "$customerId" },
      orderTotal: { $sum: { $multiply: ["$items.quantity", "$items.price"] } }
  } },
  { $sort: { _id: 1 } }
]);

// 3. Display customer name with their orders
db.orders.aggregate([
  { $lookup: { from: "customers", localField: "customerId", foreignField: "customerId", as: "customer" } },
  { $unwind: "$customer" },
  { $project: { _id: 0, orderId: 1, customerName: "$customer.name", orderDate: 1, status: 1, items: 1 } }
]);

// 4. Find orders that are shipped
db.orders.find({ status: "Shipped" });
