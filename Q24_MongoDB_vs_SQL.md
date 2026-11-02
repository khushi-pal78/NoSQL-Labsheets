# Q24. MongoDB CRUD compared with SQL

| Operation | MongoDB (mongosh) | SQL (example) |
|---|---|---|
| Create database | `use StudentDB` (database persists after data is stored) | `CREATE DATABASE StudentDB;` |
| Create collection/table | `db.createCollection("Students")` | `CREATE TABLE Students (...);` |
| Insert | `db.Students.insertOne({rollNo:101,name:"Aman"})` | `INSERT INTO Students (rollNo,name) VALUES (101,'Aman');` |
| Read | `db.Students.find({rollNo:101})` | `SELECT * FROM Students WHERE rollNo=101;` |
| Update | `db.Students.updateOne({rollNo:101},{$set:{name:"Aman Pal"}})` | `UPDATE Students SET name='Aman Pal' WHERE rollNo=101;` |
| Delete | `db.Students.deleteOne({rollNo:101})` | `DELETE FROM Students WHERE rollNo=101;` |

## Main differences
1. MongoDB stores BSON documents in collections; relational SQL databases store rows in tables.
2. MongoDB documents can have flexible fields; SQL tables usually have a defined schema.
3. MongoDB uses operators such as `$set`, `$unset` and query documents; SQL uses statements such as UPDATE and DELETE.
4. Relational databases commonly use joins and foreign keys; MongoDB can embed related data or use references and aggregation.
5. Both support create, read, update and delete operations, but syntax and data models differ.

The SQL examples are illustrative; exact data types and table definitions depend on the SQL database.
