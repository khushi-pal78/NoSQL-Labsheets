# Q3 — User profiles and preferences
**PUT profile**
```bash
curl -i -X PUT -H "Content-Type: application/json" -d '{"name":"Diya Sharma","email":"diya@example.com","city":"Roorkee","preferences":{"language":"English","theme":"light","notifications":true}}' http://127.0.0.1:8098/buckets/user_profiles/keys/U101
```
**GET profile**
```bash
curl -i http://127.0.0.1:8098/buckets/user_profiles/keys/U101
```
Result: The JSON profile is stored and retrieved using key `U101`.
