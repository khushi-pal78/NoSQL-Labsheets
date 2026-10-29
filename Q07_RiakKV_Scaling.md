# Q7 — Scaling with Riak KV
Insert 1,000 student records and 100 event records (run after the HTTP API is reachable):
```bash
for i in $(seq 1 1000); do
  curl -s -X PUT -H "Content-Type: application/json" -d "{\"student_id\":$i,\"name\":\"Student$i\",\"course\":\"BCA\"}" "http://127.0.0.1:8098/buckets/students/keys/$i" >/dev/null
done
for i in $(seq 1 100); do
  curl -s -X PUT -H "Content-Type: application/json" -d "{\"event_id\":$i,\"type\":\"login\"}" "http://127.0.0.1:8098/buckets/events/keys/$i" >/dev/null
done
echo "Sample records submitted."
```
Riak distributes replicas across nodes using distributed ring/partition placement. Adding nodes can increase capacity; actual distribution and rebalancing require a multi-node cluster. A single-node install does not demonstrate horizontal scaling.
