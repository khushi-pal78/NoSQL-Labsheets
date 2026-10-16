# Question 1 — Student data in MySQL and MongoDB

## Aim
Create the same student dataset in an RDBMS (MySQL) and a NoSQL document database (MongoDB), then compare them.

## A. MySQL
```sql
CREATE DATABASE CollegeDB;
USE CollegeDB;

CREATE TABLE Student (
    Student_ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Course VARCHAR(30),
    Semester INT,
    Marks INT
);

INSERT INTO Student VALUES
(101, 'Aarav', 'BCA', 2, 82),
(102, 'Diya', 'BCA', 2, 91),
(103, 'Kabir', 'BTech', 1, 78),
(104, 'Meera', 'BBA', 3, 86),
(105, 'Ishaan', 'BCA', 4, 88);

SELECT * FROM Student;
```

## B. MongoDB (`mongosh`)
```javascript
use CollegeDB

db.Students.insertMany([
  { Student_ID: 101, Name: "Aarav", Course: "BCA", Semester: 2, Marks: 82 },
  { Student_ID: 102, Name: "Diya", Course: "BCA", Semester: 2, Marks: 91 },
  { Student_ID: 103, Name: "Kabir", Course: "BTech", Semester: 1, Marks: 78 },
  { Student_ID: 104, Name: "Meera", Course: "BBA", Semester: 3, Marks: 86 },
  { Student_ID: 105, Name: "Ishaan", Course: "BCA", Semester: 4, Marks: 88 }
]);

db.Students.find();
```

## Comparison

| Basis | MySQL (RDBMS) | MongoDB (NoSQL document database) |
|---|---|---|
| Schema | Table structure and defined columns | Documents can have flexible fields |
| Data storage | Rows in tables | BSON documents in collections |
| Flexibility | Structure changes usually need schema changes | Fields can vary between documents |
| Scalability | Commonly scaled vertically; horizontal options exist | Designed to support horizontal scaling with sharding |
| Relationships | Foreign keys and joins are common | Embedding/references are commonly used |

## Result
The same five student records were represented in a relational table and a MongoDB collection.
