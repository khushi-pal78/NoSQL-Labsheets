// Q11 — Student, Course, Department graph; run in Neo4j Browser
CREATE
  (d1:Department {name:'Computer Science'}),
  (d2:Department {name:'Management'}),
  (c1:Course {name:'BCA'}),
  (c2:Course {name:'BTech CSE'}),
  (c3:Course {name:'BBA'}),
  (s1:Student {student_id:1,name:'Aarav'}),
  (s2:Student {student_id:2,name:'Diya'}),
  (s3:Student {student_id:3,name:'Kabir'}),
  (s1)-[:ENROLLED_IN]->(c1),
  (s2)-[:ENROLLED_IN]->(c2),
  (s3)-[:ENROLLED_IN]->(c3),
  (c1)-[:OFFERED_BY]->(d1),
  (c2)-[:OFFERED_BY]->(d1),
  (c3)-[:OFFERED_BY]->(d2);
MATCH (s:Student)-[r]->(target) RETURN s,r,target;
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course) RETURN s.name,c.name;
MATCH (c:Course)-[:OFFERED_BY]->(d:Department) RETURN c.name,d.name;
