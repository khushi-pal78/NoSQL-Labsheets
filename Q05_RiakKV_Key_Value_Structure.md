# Q5 — Riak key-value structure
Riak stores values as bytes; JSON objects and arrays are common application formats. Assume HTTP API at `127.0.0.1:8098`.

**String**
```bash
curl -i -X PUT -H "Content-Type: text/plain" --data-binary 'Hello Riak' http://127.0.0.1:8098/buckets/demo_strings/keys/greeting
curl -i http://127.0.0.1:8098/buckets/demo_strings/keys/greeting
```
**JSON document**
```bash
curl -i -X PUT -H "Content-Type: application/json" -d '{"name":"Aarav","course":"BCA","marks":82}' http://127.0.0.1:8098/buckets/demo_json/keys/student1
curl -i http://127.0.0.1:8098/buckets/demo_json/keys/student1
```
**List as JSON array**
```bash
curl -i -X PUT -H "Content-Type: application/json" -d '["reading","music","coding"]' http://127.0.0.1:8098/buckets/demo_lists/keys/interests1
curl -i http://127.0.0.1:8098/buckets/demo_lists/keys/interests1
```
- **Bucket:** logical grouping of keys and values.
- **Key:** identifier used to locate a value.
- **Value:** stored content such as string, JSON object, or JSON array.
Result: Different value formats were stored and retrieved.
