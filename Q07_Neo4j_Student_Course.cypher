// Question 7 — Student-Course graph in Neo4j
// Run in Neo4j Browser.

CREATE
  (s1:Student {Student_ID: 601, Name: 'Aarav'}),
  (s2:Student {Student_ID: 602, Name: 'Diya'}),
  (s3:Student {Student_ID: 603, Name: 'Kabir'}),
  (s4:Student {Student_ID: 604, Name: 'Meera'}),
  (s5:Student {Student_ID: 605, Name: 'Ishaan'}),
  (c1:Course {Name: 'BCA'}),
  (c2:Course {Name: 'BTech'}),
  (c3:Course {Name: 'BBA'}),
  (s1)-[:ENROLLED_IN]->(c1),
  (s2)-[:ENROLLED_IN]->(c1),
  (s3)-[:ENROLLED_IN]->(c2),
  (s4)-[:ENROLLED_IN]->(c3),
  (s5)-[:ENROLLED_IN]->(c1);

// 1. Display all students
MATCH (s:Student) RETURN s;

// 2. Find students enrolled in BCA
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course {Name: 'BCA'})
RETURN s.Name, c.Name;

// 3. Display all courses taken by a particular student
MATCH (s:Student {Name: 'Aarav'})-[:ENROLLED_IN]->(c:Course)
RETURN c.Name;

// 4. Add a relationship
MATCH (s:Student {Name: 'Kabir'}), (c:Course {Name: 'BCA'})
MERGE (s)-[:ENROLLED_IN]->(c);

// 5. Remove a relationship
MATCH (s:Student {Name: 'Kabir'})-[r:ENROLLED_IN]->(c:Course {Name: 'BCA'})
DELETE r;
