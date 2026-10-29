// Q13 — E-commerce graph
CREATE
  (cu1:Customer {customer_id:1,name:'Aarav'}),
  (cu2:Customer {customer_id:2,name:'Diya'}),
  (p1:Product {product_id:'P01',name:'Notebook',price:50}),
  (p2:Product {product_id:'P02',name:'Pen',price:10}),
  (p3:Product {product_id:'P03',name:'Bag',price:700}),
  (cat1:Category {name:'Stationery'}),
  (cat2:Category {name:'Bags'}),
  (o1:Order {order_id:1001,date:'2026-10-16'}),
  (o2:Order {order_id:1002,date:'2026-10-15'}),
  (cu1)-[:PLACED]->(o1),
  (cu2)-[:PLACED]->(o2),
  (o1)-[:CONTAINS {quantity:2}]->(p1),
  (o1)-[:CONTAINS {quantity:3}]->(p2),
  (o2)-[:CONTAINS {quantity:1}]->(p3),
  (p1)-[:IN_CATEGORY]->(cat1),
  (p2)-[:IN_CATEGORY]->(cat1),
  (p3)-[:IN_CATEGORY]->(cat2);
MATCH (:Customer {name:'Aarav'})-[:PLACED]->(:Order)-[line:CONTAINS]->(p:Product)
RETURN p.name,p.price,line.quantity;
MATCH (p:Product)-[:IN_CATEGORY]->(:Category {name:'Stationery'}) RETURN p.name;
MATCH (c:Customer)-[r]->(target) RETURN c,r,target;
