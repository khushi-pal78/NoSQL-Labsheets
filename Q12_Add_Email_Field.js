// Q12. Add an Email field to every student document
use StudentDB
db.Students.updateMany(
  {},
  [
    { $set: { email: { $concat: [ { $toLower: "$name" }, "@example.com" ] } } }
  ]
)
db.Students.find({}, { name: 1, email: 1, _id: 0 })
