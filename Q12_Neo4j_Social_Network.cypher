// Q12 — Social network; FRIENDS_WITH is directed in this example
CREATE
  (p1:Person {name:'Aarav'}),
  (p2:Person {name:'Diya'}),
  (p3:Person {name:'Kabir'}),
  (p4:Person {name:'Meera'}),
  (co:Company {name:'TechWorks'}),
  (p1)-[:FRIENDS_WITH]->(p2),
  (p3)-[:FRIENDS_WITH]->(p1),
  (p2)-[:FOLLOWS]->(p1),
  (p4)-[:FOLLOWS]->(p1),
  (p1)-[:WORKS_AT]->(co),
  (p2)-[:WORKS_AT]->(co);
MATCH (:Person {name:'Aarav'})-[:FRIENDS_WITH]->(friend:Person) RETURN friend.name;
MATCH (follower:Person)-[:FOLLOWS]->(:Person {name:'Aarav'}) RETURN follower.name;
MATCH (:Person {name:'Aarav'})-[:FOLLOWS]->(person:Person) RETURN person.name;
MATCH (p:Person)-[r]->(target) RETURN p,r,target;
