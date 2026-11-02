// Q3. Mini Blogging Platform
use NoSQL_Lab3;
db.blogs.drop();

db.blogs.insertMany([
  {
    title: "Learning MongoDB", author: { name: "Aman", email: "aman@example.com" },
    category: "Technology", tags: ["MongoDB", "Database", "NoSQL"],
    comments: [
      { user: "Riya", text: "Very useful article", date: ISODate("2026-10-20") },
      { user: "Neha", text: "Thanks for sharing", date: ISODate("2026-10-21") }
    ],
    publication: { status: "published", date: ISODate("2026-10-19"), views: 120 }
  },
  {
    title: "Healthy Study Habits", author: { name: "Riya", email: "riya@example.com" },
    category: "Education", tags: ["Study", "Students", "Tips"],
    comments: [{ user: "Aman", text: "Good tips", date: ISODate("2026-10-22") }],
    publication: { status: "published", date: ISODate("2026-10-21"), views: 85 }
  },
  {
    title: "Introduction to NoSQL", author: { name: "Neha", email: "neha@example.com" },
    category: "Technology", tags: ["NoSQL", "Database"],
    comments: [],
    publication: { status: "draft", date: null, views: 0 }
  }
]);

// 1. Show all blogs
db.blogs.find();

// 2. Blogs in Technology category
db.blogs.find({ category: "Technology" });

// 3. Blogs containing the MongoDB tag
db.blogs.find({ tags: "MongoDB" });

// 4. Blogs containing both NoSQL and Database tags
db.blogs.find({ tags: { $all: ["NoSQL", "Database"] } });

// 5. Published Technology blogs
db.blogs.find({ category: "Technology", "publication.status": "published" });

// 6. Blogs having at least one comment
db.blogs.find({ "comments.0": { $exists: true } });
