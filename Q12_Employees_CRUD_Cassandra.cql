-- Q12. Employees CRUD operations using CQL
USE CollegeDB;

CREATE TABLE IF NOT EXISTS Employees (
    employee_id int PRIMARY KEY,
    name text,
    department text,
    city text,
    salary decimal
);

-- CREATE / INSERT
INSERT INTO Employees (employee_id, name, department, city, salary)
VALUES (1, 'Aman', 'IT', 'Roorkee', 30000);

INSERT INTO Employees (employee_id, name, department, city, salary)
VALUES (2, 'Riya', 'HR', 'Dehradun', 35000);

INSERT INTO Employees (employee_id, name, department, city, salary)
VALUES (3, 'Neha', 'Sales', 'Haridwar', 32000);

-- READ
SELECT * FROM Employees;
SELECT * FROM Employees WHERE employee_id = 1;

-- UPDATE
UPDATE Employees SET salary = 33000, city = 'Delhi' WHERE employee_id = 1;
SELECT * FROM Employees WHERE employee_id = 1;

-- DELETE
DELETE FROM Employees WHERE employee_id = 2;
SELECT * FROM Employees;
