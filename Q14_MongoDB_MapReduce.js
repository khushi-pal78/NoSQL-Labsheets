// Question 14 — MapReduce-style calculation on student data
// Note: MongoDB's legacy db.collection.mapReduce() is deprecated/removed in newer versions.
// This JavaScript demonstrates the map and reduce logic independently, then uses aggregation
// as the recommended MongoDB-native approach.

use("MapReduceLab");

db.Students.insertMany([
  { Student_ID: 1401, Name: "Aarav", Course: "BCA", Marks: 82 },
  { Student_ID: 1402, Name: "Diya", Course: "BCA", Marks: 91 },
  { Student_ID: 1403, Name: "Kabir", Course: "BTech", Marks: 78 },
  { Student_ID: 1404, Name: "Meera", Course: "BBA", Marks: 86 },
  { Student_ID: 1405, Name: "Ishaan", Course: "BCA", Marks: 88 }
]);

// Map step: emit each course with count=1 and its marks.
const mapped = db.Students.find({}, { Course: 1, Marks: 1, _id: 0 }).toArray()
  .map(student => ({
    course: student.Course,
    count: 1,
    totalMarks: student.Marks
  }));

print("MAP OUTPUT:");
printjson(mapped);

// Reduce step: group mapped records by course.
const reduced = {};
for (const item of mapped) {
  if (!reduced[item.course]) {
    reduced[item.course] = { count: 0, totalMarks: 0 };
  }
  reduced[item.course].count += item.count;
  reduced[item.course].totalMarks += item.totalMarks;
}

for (const course of Object.keys(reduced)) {
  reduced[course].averageMarks = reduced[course].totalMarks / reduced[course].count;
}

print("REDUCE OUTPUT (course count and average marks):");
printjson(reduced);

// Recommended MongoDB aggregation alternative:
db.Students.aggregate([
  {
    $group: {
      _id: "$Course",
      studentCount: { $sum: 1 },
      averageMarks: { $avg: "$Marks" }
    }
  },
  { $sort: { _id: 1 } }
]);
