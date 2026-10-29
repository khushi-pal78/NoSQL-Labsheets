# Q15 — Neo4j graph application using Python

Requirements: running Neo4j, Python 3, `pip install neo4j`. Set `NEO4J_URI`, `NEO4J_USERNAME`, and `NEO4J_PASSWORD` environment variables. Do not commit credentials to GitHub.

Save as `student_graph.py`:
```python
import os
from neo4j import GraphDatabase

URI = os.getenv("NEO4J_URI", "neo4j://localhost:7687")
USERNAME = os.getenv("NEO4J_USERNAME", "neo4j")
PASSWORD = os.getenv("NEO4J_PASSWORD")
if not PASSWORD:
    raise RuntimeError("Set NEO4J_PASSWORD first.")

driver = GraphDatabase.driver(URI, auth=(USERNAME, PASSWORD))

def create_student(tx, student_id, name, course):
    tx.run("""
        MERGE (s:Student {student_id:$student_id})
        SET s.name=$name
        MERGE (c:Course {name:$course})
        MERGE (s)-[:ENROLLED_IN]->(c)
    """, student_id=student_id, name=name, course=course)

def read_students(tx):
    result = tx.run("""
        MATCH (s:Student)-[:ENROLLED_IN]->(c:Course)
        RETURN s.student_id AS id, s.name AS name, c.name AS course
        ORDER BY id
    """)
    return [record.data() for record in result]

def update_student(tx, student_id, new_name):
    tx.run("MATCH (s:Student {student_id:$student_id}) SET s.name=$new_name",
           student_id=student_id, new_name=new_name)

def delete_student(tx, student_id):
    tx.run("MATCH (s:Student {student_id:$student_id}) DETACH DELETE s",
           student_id=student_id)

def find_course_students(tx, course):
    result = tx.run("""
        MATCH (s:Student)-[:ENROLLED_IN]->(:Course {name:$course})
        RETURN s.name AS name ORDER BY name
    """, course=course)
    return [record["name"] for record in result]

with driver.session() as session:
    session.execute_write(create_student, 1501, "Aarav", "BCA")
    session.execute_write(create_student, 1502, "Diya", "BCA")
    print("All students:", session.execute_read(read_students))
    session.execute_write(update_student, 1501, "Aarav Sharma")
    print("Students in BCA:", session.execute_read(find_course_students, "BCA"))
    # Test deletion by uncommenting:
    # session.execute_write(delete_student, 1502)
driver.close()
```

`MERGE` creates missing nodes, `MATCH` reads patterns, `SET` updates properties, and `DETACH DELETE` removes a student and relationships. Neo4j scaling and high availability depend on edition/deployment. Use cases include social networks, recommendations, fraud detection, and knowledge graphs.
