-- Question 5 — Cassandra Students table
CREATE KEYSPACE IF NOT EXISTS CollegeDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE CollegeDB;

CREATE TABLE IF NOT EXISTS Students (
    Student_ID int PRIMARY KEY,
    Name text,
    Course text,
    Semester int,
    Marks int
);

INSERT INTO Students (Student_ID, Name, Course, Semester, Marks)
VALUES (401, 'Aarav', 'BCA', 2, 82);
INSERT INTO Students (Student_ID, Name, Course, Semester, Marks)
VALUES (402, 'Diya', 'BCA', 2, 91);
INSERT INTO Students (Student_ID, Name, Course, Semester, Marks)
VALUES (403, 'Kabir', 'BTech', 1, 78);
INSERT INTO Students (Student_ID, Name, Course, Semester, Marks)
VALUES (404, 'Meera', 'BBA', 3, 86);
INSERT INTO Students (Student_ID, Name, Course, Semester, Marks)
VALUES (405, 'Ishaan', 'BCA', 4, 88);

-- 1. Display all records
SELECT * FROM Students;

-- 2. Query by course: create an index for this simple lab example
CREATE INDEX IF NOT EXISTS students_course_idx ON Students (Course);
SELECT * FROM Students WHERE Course = 'BCA';

-- 3. Update marks
UPDATE Students SET Marks = 84 WHERE Student_ID = 403;

-- 4. Delete one record
DELETE FROM Students WHERE Student_ID = 405;

-- Note: In production Cassandra schemas are normally designed around query patterns;
-- a table keyed by Course (with a clustering key) is often better than relying on a secondary index.
