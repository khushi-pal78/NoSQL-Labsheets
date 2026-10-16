# Question 8 — Compare MongoDB, Cassandra, and Neo4j

## Same example dataset
Students can have properties such as `Student_ID`, `Name`, and `Course`.

### MongoDB
```javascript
db.Students.insertMany([
  { Student_ID: 701, Name: "Aarav", Course: "BCA" },
  { Student_ID: 702, Name: "Diya", Course: "BCA" },
  { Student_ID: 703, Name: "Kabir", Course: "BTech" },
  { Student_ID: 704, Name: "Meera", Course: "BBA" },
  { Student_ID: 705, Name: "Ishaan", Course: "BCA" }
]);
db.Students.find();
```

### Cassandra
```sql
CREATE KEYSPACE IF NOT EXISTS collegedb
WITH replication = {'class':'SimpleStrategy','replication_factor':1};
USE collegedb;
CREATE TABLE IF NOT EXISTS students (
  student_id int PRIMARY KEY,
  name text,
  course text
);
INSERT INTO students (student_id, name, course) VALUES (701, 'Aarav', 'BCA');
INSERT INTO students (student_id, name, course) VALUES (702, 'Diya', 'BCA');
INSERT INTO students (student_id, name, course) VALUES (703, 'Kabir', 'BTech');
INSERT INTO students (student_id, name, course) VALUES (704, 'Meera', 'BBA');
INSERT INTO students (student_id, name, course) VALUES (705, 'Ishaan', 'BCA');
SELECT * FROM students;
```

### Neo4j
```cypher
CREATE
  (:Student {student_id: 701, name: 'Aarav'})-[:ENROLLED_IN]->(:Course {name: 'BCA'}),
  (:Student {student_id: 702, name: 'Diya'})-[:ENROLLED_IN]->(:Course {name: 'BCA'}),
  (:Student {student_id: 703, name: 'Kabir'})-[:ENROLLED_IN]->(:Course {name: 'BTech'}),
  (:Student {student_id: 704, name: 'Meera'})-[:ENROLLED_IN]->(:Course {name: 'BBA'}),
  (:Student {student_id: 705, name: 'Ishaan'})-[:ENROLLED_IN]->(:Course {name: 'BCA'});
MATCH (s:Student) RETURN s;
```

## Comparison

| Basis | MongoDB | Cassandra | Neo4j |
|---|---|---|---|
| Data model | Document | Wide-column | Graph |
| Storage structure | BSON documents in collections | Rows partitioned by partition key and columns | Nodes, relationships, and properties |
| Query method | MongoDB Query API / aggregation | CQL | Cypher |
| Scalability | Horizontal scaling with sharding | Distributed horizontal scaling | Graph database scaling options depend on edition and architecture |
| Suitable applications | Content, catalogs, flexible records | High-volume distributed writes and time-series/event workloads | Social networks, recommendations, connected data |

## Result
The student dataset can be represented in three NoSQL models, each suited to different access patterns.
