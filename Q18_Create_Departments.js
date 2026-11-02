// Q18. Create Departments collection and insert sample data
use StudentDB
db.createCollection("Departments")
db.Departments.insertMany([
  { departmentId: "D01", departmentName: "Computer Science", hod: "Dr Mehta" },
  { departmentId: "D02", departmentName: "Information Technology", hod: "Dr Sharma" },
  { departmentId: "D03", departmentName: "Electronics", hod: "Dr Verma" }
])
db.Departments.find()
