// Q9. Product Review and Rating System
use NoSQL_Lab3;
db.productReviews.drop();

db.productReviews.insertMany([
  { productId: 101, productName: "Keyboard", customer: "Aman", rating: 5, review: "Excellent", date: ISODate("2026-10-20") },
  { productId: 101, productName: "Keyboard", customer: "Riya", rating: 4, review: "Good", date: ISODate("2026-10-21") },
  { productId: 102, productName: "Mouse", customer: "Neha", rating: 3, review: "Average", date: ISODate("2026-10-22") },
  { productId: 102, productName: "Mouse", customer: "Aman", rating: 4, review: "Useful", date: ISODate("2026-10-23") },
  { productId: 103, productName: "Monitor", customer: "Riya", rating: 5, review: "Very good", date: ISODate("2026-10-24") }
]);

// 1. Display all reviews
db.productReviews.find();

// 2. Average rating and number of reviews for each product
db.productReviews.aggregate([
  { $group: {
      _id: "$productId",
      productName: { $first: "$productName" },
      averageRating: { $avg: "$rating" },
      numberOfReviews: { $sum: 1 }
  } },
  { $sort: { _id: 1 } }
]);

// 3. Find all reviews with rating 5
db.productReviews.find({ rating: 5 });

// 4. Find reviews for Keyboard
db.productReviews.find({ productName: "Keyboard" });
