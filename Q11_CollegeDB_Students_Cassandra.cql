-- Q11. Cassandra keyspace CollegeDB and Students table
-- Run in cqlsh. For a single-node lab cluster, replication_factor=1.
-- For a multi-node cluster, use an RF appropriate to the number of nodes (often 3).
CREATE KEYSPACE IF NOT EXISTS CollegeDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE CollegeDB;

CREATE TABLE IF NOT EXISTS Students (
    student_id int PRIMARY KEY,
    name text,
    course text,
    semester int,
    city text,
    marks int
);

INSERT INTO Students (student_id, name, course, semester, city, marks)
VALUES (101, 'Aman', 'BCA', 2, 'Roorkee', 88);

INSERT INTO Students (student_id, name, course, semester, city, marks)
VALUES (102, 'Riya', 'BCA', 2, 'Dehradun', 91);

INSERT INTO Students (student_id, name, course, semester, city, marks)
VALUES (103, 'Neha', 'BCA', 2, 'Haridwar', 85);

INSERT INTO Students (student_id, name, course, semester, city, marks)
VALUES (104, 'Rahul', 'BCA', 2, 'Delhi', 79);

INSERT INTO Students (student_id, name, course, semester, city, marks)
VALUES (105, 'Priya', 'BCA', 2, 'Meerut', 94);

SELECT * FROM Students;
SELECT * FROM Students WHERE student_id = 103;
