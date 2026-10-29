# Q1 — Install Riak KV and perform basic operations
Install a Riak KV release compatible with your Linux distribution, then start it using that release's instructions. A systemd install may use `sudo systemctl start riak`. Check with `riak ping` (expected: `pong`). Assume HTTP API at `http://127.0.0.1:8098`.

**Store (PUT)**
```bash
curl -i -X PUT -H "Content-Type: application/json" -d '{"student_id":1,"name":"Aarav","course":"BCA","marks":82}' http://127.0.0.1:8098/buckets/students/keys/1
```
**Retrieve (GET)**
```bash
curl -i http://127.0.0.1:8098/buckets/students/keys/1
```
**Update (PUT same key)**
```bash
curl -i -X PUT -H "Content-Type: application/json" -d '{"student_id":1,"name":"Aarav","course":"BCA","marks":90}' http://127.0.0.1:8098/buckets/students/keys/1
```
**Delete**
```bash
curl -i -X DELETE http://127.0.0.1:8098/buckets/students/keys/1
```
Result: Student data was stored, retrieved, updated, and deleted. Exact installation commands vary by OS and Riak release.
