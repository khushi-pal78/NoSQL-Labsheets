# Laboratory Report: MongoDB Database and CRUD Operations

**Subject:** NoSQL Database  
**Experiment:** StudentDB database and CRUD operations  
**Name:** ____________________  
**Roll Number:** ____________________  
**Class/Semester:** ____________________  
**Date:** ____________________

## 1. Objective
To create and manage a MongoDB database named StudentDB, create collections, insert and retrieve student documents, perform update and delete operations, use MongoDB Compass, and compare MongoDB CRUD operations with SQL.

## 2. Software Requirements
- MongoDB Server or MongoDB Atlas
- MongoDB Shell (`mongosh`)
- MongoDB Compass
- Windows computer and internet connection (if using Atlas)

## 3. Procedure and Commands
Perform Questions 1–24 using the separate files in this folder. Execute each command in `mongosh`, except the Compass activities, which are performed in MongoDB Compass. Record the exact commands and actual output from your own system.

## 4. Output / Screenshots
Paste your own screenshots below. Suggested screenshots:
1. `show dbs` and `db.getName()` after creating StudentDB.
2. `show collections` showing Students, Faculty and Courses.
3. `insertOne()` and `insertMany()` results.
4. `find()` showing all student records.
5. Filter and projection query results.
6. `updateOne()`, `updateMany()` and `replaceOne()` results.
7. `$set` / `$unset` field update results.
8. `deleteOne()`, `deleteMany()` and `countDocuments()` results.
9. Collection rename and drop verification.
10. Database drop and recreation.
11. MongoDB Compass documents and CRUD screens.

## 5. Observations
- MongoDB stores records as BSON documents inside collections.
- `insertOne()` inserts one document; `insertMany()` inserts multiple documents.
- `find()` retrieves documents; filters select matching documents and projection selects fields.
- `updateOne()` changes the first matching document; `updateMany()` changes all matching documents.
- `replaceOne()` replaces the complete matching document (apart from MongoDB's immutable `_id` behavior).
- `deleteOne()` removes one matching document; `deleteMany()` removes all matching documents.
- `countDocuments()` returns the number of matching documents.
- MongoDB Compass and mongosh show the same data when connected to the same deployment.

## 6. Result
The StudentDB database and its collections were created and the required CRUD and collection/database management operations were practiced. MongoDB Shell and MongoDB Compass were used to manage and verify the data.

## 7. Conclusion
This experiment provided practical knowledge of MongoDB database and collection creation, document insertion, retrieval, updating, deletion, projection, counting, renaming and dropping. It also demonstrated the difference between command-line and graphical database management tools.

**Important:** Do not claim screenshots or outputs you did not personally capture. Paste actual output from your own execution in this report.
