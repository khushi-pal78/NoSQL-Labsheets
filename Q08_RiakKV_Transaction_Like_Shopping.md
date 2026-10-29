# Q8 — Transaction-like shopping operations
Workflow: GET a cart, add a product in application logic, recalculate total (`quantity * price` for each item), PUT the full updated cart, then GET it to verify.
```json
{"user_id":"U101","items":[{"product_id":"P01","quantity":2,"price":50},{"product_id":"P02","quantity":3,"price":10},{"product_id":"P03","quantity":1,"price":200}],"total":330}
```
Store:
```bash
curl -i -X PUT -H "Content-Type: application/json" -d '{"user_id":"U101","items":[{"product_id":"P01","quantity":2,"price":50},{"product_id":"P02","quantity":3,"price":10},{"product_id":"P03","quantity":1,"price":200}],"total":330}' http://127.0.0.1:8098/buckets/shopping_carts/keys/U101
```
Limitations: concurrent read-modify-write requests can overwrite each other's changes; one PUT is not a general multi-key ACID transaction; updating a cart and separate order record is not automatically atomic.
