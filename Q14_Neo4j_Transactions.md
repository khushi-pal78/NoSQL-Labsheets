# Q14 — Transactions, consistency, and availability in Neo4j
Run in Neo4j Browser:
```cypher
CREATE (:Student {student_id:1401,name:'Aarav',marks:82});
MATCH (s:Student {student_id:1401}) SET s.marks=90 RETURN s;
MATCH (s:Student {student_id:1401}) SET s.course='BCA' RETURN s;
MATCH (s:Student {student_id:1401}) DETACH DELETE s;
```
Neo4j Browser generally executes each submitted query as its own transaction. Use an explicit driver transaction for multiple statements that must commit/roll back together.
- **Atomicity:** changes commit together or roll back.
- **Consistency:** constraints/database rules are enforced on commit.
- **Availability:** depends on deployment/connectivity; ACID transactions alone do not guarantee high availability.
- `CREATE` adds nodes/relationships; `MATCH` finds patterns; `SET` changes properties; `DETACH DELETE` removes a node and its relationships.
