# Q9 — Query-by-data using Riak KV
Riak is primarily a key-value store. Some versions support secondary indexes/search; a simple educational approach is to fetch known keys and filter in application code.
```bash
curl -i -X PUT -H "Content-Type: application/json" -d '{"user_id":"U1","name":"Aarav","city":"Roorkee","age":21,"preferences":["music","coding"]}' http://127.0.0.1:8098/buckets/users/keys/U1
curl -i -X PUT -H "Content-Type: application/json" -d '{"user_id":"U2","name":"Diya","city":"Delhi","age":22,"preferences":["reading","music"]}' http://127.0.0.1:8098/buckets/users/keys/U2
```
Python (`query_users.py`):
```python
import json
import urllib.request
base = "http://127.0.0.1:8098/buckets/users/keys/"
users = []
for key in ["U1", "U2"]:
    with urllib.request.urlopen(base + key) as response:
        users.append(json.loads(response.read().decode("utf-8")))
print("Users in Roorkee:", [u for u in users if u.get("city") == "Roorkee"])
print("Users who like music:", [u for u in users if "music" in u.get("preferences", [])])
```
For large datasets, use supported indexing/search or maintain a separate index.
