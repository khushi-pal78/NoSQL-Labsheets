// Q7. Content Management System
use NoSQL_Lab3;
db.articles.drop();

db.articles.insertMany([
  {
    title: "MongoDB Basics", author: "Aman", category: "Technology",
    tags: ["MongoDB", "Database"], status: "published",
    publishedAt: ISODate("2026-10-20"), views: 100
  },
  {
    title: "Study Skills", author: "Riya", category: "Education",
    tags: ["Study", "Tips"], status: "draft",
    publishedAt: null, views: 0
  },
  {
    title: "NoSQL Aggregation", author: "Neha", category: "Technology",
    tags: ["NoSQL", "MongoDB"], status: "published",
    publishedAt: ISODate("2026-10-24"), views: 75
  }
]);

// 1. Display all articles
db.articles.find();

// 2. Published articles
db.articles.find({ status: "published" });

// 3. Unpublished/draft articles
db.articles.find({ status: "draft" });

// 4. Published Technology articles
db.articles.find({ status: "published", category: "Technology" });

// 5. Articles written by Aman
db.articles.find({ author: "Aman" });

// 6. Published articles with more than 80 views
db.articles.find({ status: "published", views: { $gt: 80 } });

// 7. Update a draft to published
db.articles.updateOne(
  { title: "Study Skills" },
  { $set: { status: "published", publishedAt: new Date() } }
);
