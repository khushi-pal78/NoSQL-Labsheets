# Q2 — User sessions in Riak KV
Store session ID, user ID, login time, and status in `user_sessions`.
```bash
curl -i -X PUT -H "Content-Type: application/json" -d '{"session_id":"S1001","user_id":"U101","login_time":"2026-10-16T09:00:00+05:30","status":"active"}' http://127.0.0.1:8098/buckets/user_sessions/keys/S1001
curl -i http://127.0.0.1:8098/buckets/user_sessions/keys/S1001
curl -i -X PUT -H "Content-Type: application/json" -d '{"session_id":"S1001","user_id":"U101","login_time":"2026-10-16T09:00:00+05:30","status":"logged_out"}' http://127.0.0.1:8098/buckets/user_sessions/keys/S1001
```
Result: Session data can be retrieved by session key.
