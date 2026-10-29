# Q4 — Shopping cart using Riak KV
Store the complete cart JSON under each user's key. Product-level edits are performed in application logic.

**Add products**
```bash
curl -i -X PUT -H "Content-Type: application/json" -d '{"user_id":"U101","items":[{"product_id":"P01","name":"Notebook","quantity":2,"price":50},{"product_id":"P02","name":"Pen","quantity":3,"price":10}]}' http://127.0.0.1:8098/buckets/shopping_carts/keys/U101
```
**Retrieve**
```bash
curl -i http://127.0.0.1:8098/buckets/shopping_carts/keys/U101
```
**Update P01 quantity to 4**
```bash
curl -i -X PUT -H "Content-Type: application/json" -d '{"user_id":"U101","items":[{"product_id":"P01","name":"Notebook","quantity":4,"price":50},{"product_id":"P02","name":"Pen","quantity":3,"price":10}]}' http://127.0.0.1:8098/buckets/shopping_carts/keys/U101
```
**Remove P02** (application removes it from the array and writes the updated cart)
```bash
curl -i -X PUT -H "Content-Type: application/json" -d '{"user_id":"U101","items":[{"product_id":"P01","name":"Notebook","quantity":4,"price":50}]}' http://127.0.0.1:8098/buckets/shopping_carts/keys/U101
```
Result: Cart operations update one JSON value per user.
