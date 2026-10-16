// Question 3 — Orders with embedded customer and product data
use("CollegeDB");

db.Orders.insertMany([
  {
    Order_ID: 1001,
    customer: { Customer_ID: 1, Name: "Aarav" },
    products: [
      { Product_ID: "P1", Name: "Notebook", Price: 50, Quantity: 2 },
      { Product_ID: "P2", Name: "Pen", Price: 10, Quantity: 3 }
    ]
  },
  {
    Order_ID: 1002,
    customer: { Customer_ID: 2, Name: "Diya" },
    products: [{ Product_ID: "P3", Name: "Bag", Price: 700, Quantity: 1 }]
  },
  {
    Order_ID: 1003,
    customer: { Customer_ID: 3, Name: "Kabir" },
    products: [{ Product_ID: "P4", Name: "Book", Price: 120, Quantity: 2 }]
  },
  {
    Order_ID: 1004,
    customer: { Customer_ID: 1, Name: "Aarav" },
    products: [{ Product_ID: "P5", Name: "Bottle", Price: 250, Quantity: 2 }]
  },
  {
    Order_ID: 1005,
    customer: { Customer_ID: 4, Name: "Meera" },
    products: [{ Product_ID: "P6", Name: "Calculator", Price: 450, Quantity: 1 }]
  }
]);

// 1. Inserted five orders; display them
db.Orders.find();

// 2. Orders of a particular customer
db.Orders.find({ "customer.Name": "Aarav" });

// 3. Update quantity of a product in one order
db.Orders.updateOne(
  { Order_ID: 1001, "products.Product_ID": "P1" },
  { $set: { "products.$.Quantity": 4 } }
);

// 4. Calculate total order amount using aggregation
db.Orders.aggregate([
  { $unwind: "$products" },
  {
    $group: {
      _id: "$Order_ID",
      Customer: { $first: "$customer.Name" },
      TotalAmount: {
        $sum: { $multiply: ["$products.Price", "$products.Quantity"] }
      }
    }
  },
  { $sort: { _id: 1 } }
]);

// 5. Display orders whose total amount is above 500
db.Orders.aggregate([
  {
    $project: {
      Order_ID: 1,
      customer: 1,
      TotalAmount: {
        $sum: {
          $map: {
            input: "$products",
            as: "p",
            in: { $multiply: ["$$p.Price", "$$p.Quantity"] }
          }
        }
      }
    }
  },
  { $match: { TotalAmount: { $gt: 500 } } }
]);
