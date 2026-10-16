# Question 10 — Demonstrate MongoDB sharding

## Aim
Understand how MongoDB distributes a collection across shards.

## Important
A real sharded deployment requires a sharded cluster: config servers, `mongos`, and multiple shard replica sets. A standalone MongoDB server does not demonstrate real sharding. The following is a lab outline; use a local multi-process cluster or instructor-provided cluster.

## 1. Create 20 sample records
Connect to `mongosh` through `mongos`:
```javascript
use ShardLab
for (let i = 1; i <= 20; i++) {
  db.Students.insertOne({
    Student_ID: i,
    Name: "Student" + i,
    Course: i % 2 === 0 ? "BCA" : "BTech",
    Marks: 50 + (i % 50)
  });
}
```

## 2. Select a shard key and enable sharding
Run the administrative commands in the appropriate `mongosh` session. Names of shards must match the actual shard names in your configured cluster.
```javascript
sh.status();
sh.enableSharding("ShardLab");
db = db.getSiblingDB("ShardLab");
db.Students.createIndex({ Student_ID: 1 });
sh.shardCollection("ShardLab.Students", { Student_ID: 1 });
```

## 3. Verify distribution
```javascript
sh.status();
db.Students.getShardDistribution();
```

## Benefits
- Spreads data and workload across multiple servers.
- Can increase storage capacity and throughput as the cluster grows.

## Result
The commands show the intended process. Actual distribution is confirmed only when run on a correctly configured multi-shard cluster.
