# Question 9 — Deploy MongoDB locally and perform CRUD

## Aim
Run MongoDB on a local machine and verify basic CRUD operations.

## Steps
1. Install MongoDB Community Server and MongoDB Shell (`mongosh`) for your operating system.
2. Start the MongoDB service using the method provided by the installer.
3. Open a terminal and connect:
   ```bash
   mongosh
   ```
4. Run the commands below.

## Commands
```javascript
use LocalCollegeDB

db.Students.insertMany([
  { Student_ID: 901, Name: "Aarav", Course: "BCA", Marks: 82 },
  { Student_ID: 902, Name: "Diya", Course: "BCA", Marks: 91 },
  { Student_ID: 903, Name: "Kabir", Course: "BTech", Marks: 78 }
]);

// Create/Read
db.Students.find();

// Update
db.Students.updateOne(
  { Student_ID: 903 },
  { $set: { Marks: 84 } }
);
db.Students.find({ Student_ID: 903 });

// Delete
db.Students.deleteOne({ Student_ID: 902 });
db.Students.find();
```

## Verification
- Insert: documents appear in `find()`.
- Read: `find()` returns stored documents.
- Update: Kabir's marks change from 78 to 84.
- Delete: the document with Student_ID 902 is removed.

## Result
MongoDB was used locally to create a database/collection and test CRUD operations. Add screenshots of your actual terminal output if required by your instructor.
