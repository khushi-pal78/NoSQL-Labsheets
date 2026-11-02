// Q21. Recreate StudentDB by selecting it and inserting sample data
use StudentDB
db.createCollection("Students")
db.Students.insertMany([
  { rollNo: 201, name: "Karan", department: "Computer Science", semester: 1, cgpa: 8.4 },
  { rollNo: 202, name: "Meera", department: "Information Technology", semester: 1, cgpa: 9.0 }
])
show dbs
db.Students.find()
