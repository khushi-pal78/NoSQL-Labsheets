// Q15. Flexible News Database
// Documents can have different optional fields; MongoDB supports this flexible structure.
use NoSQL_Lab3;
db.newsArticles.drop();

db.newsArticles.insertMany([
  {
    title: "Technology Conference Announced",
    author: "Aman", location: "Delhi", category: "Technology",
    tags: ["AI", "Technology"],
    images: ["conference1.jpg"],
    sources: ["Tech News"],
    publishedAt: ISODate("2026-10-20")
  },
  {
    title: "Heavy Rain in Uttarakhand",
    location: "Dehradun", category: "Weather",
    tags: ["Rain", "Uttarakhand"],
    sources: ["Local News", "Weather Department"],
    publishedAt: ISODate("2026-10-21")
  },
  {
    title: "Local Sports Team Wins",
    author: "Riya", category: "Sports",
    tags: ["Cricket", "Local"],
    images: ["team.jpg"],
    publishedAt: ISODate("2026-10-22")
  }
]);

// 1. Display all news articles
db.newsArticles.find();

// 2. Search by category
db.newsArticles.find({ category: "Technology" });

// 3. Search by location, even when other fields differ
db.newsArticles.find({ location: "Dehradun" });

// 4. Search articles containing a particular tag
db.newsArticles.find({ tags: "Uttarakhand" });

// 5. Search articles by author where author field exists
db.newsArticles.find({ author: "Aman" });

// 6. Find articles that contain an images field
db.newsArticles.find({ images: { $exists: true } });

// 7. Find articles published from 21 October 2026 onwards
db.newsArticles.find({ publishedAt: { $gte: ISODate("2026-10-21") } });

// 8. Search using OR across fields
db.newsArticles.find({
  $or: [{ category: "Weather" }, { tags: "Cricket" }]
});
