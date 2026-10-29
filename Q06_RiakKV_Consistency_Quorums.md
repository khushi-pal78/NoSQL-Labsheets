# Q6 — Riak consistency and read/write quorum
- **N:** number of replicas intended for an object.
- **R:** number of replicas that must respond to a read.
- **W:** number of replicas that must acknowledge a write.

For a bucket configured for 3 replicas, `W=2` requests two write acknowledgements and `R=2` requests two read responses. Supported parameters depend on Riak release/configuration.
```bash
curl -i -X PUT -H "Content-Type: application/json" -d '{"student_id":1,"name":"Aarav","marks":82}' 'http://127.0.0.1:8098/buckets/students/keys/1?w=2'
curl -i 'http://127.0.0.1:8098/buckets/students/keys/1?r=2'
```
Higher quorum values require more replicas to participate and may reduce availability when nodes are down; lower values may permit fewer responses and can expose older data. A multi-node cluster is required to demonstrate distributed quorum behavior.
