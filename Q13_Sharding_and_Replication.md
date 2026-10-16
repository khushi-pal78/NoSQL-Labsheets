# Question 13 — Sharding + replication architecture

## Aim
Combine data distribution (sharding) with replica copies for availability.

## Architecture
```text
                    Application
                         |
                       mongos
                         |
             +-----------+-----------+
             |                       |
          Shard 1                  Shard 2
        (replica set)             (replica set)
        Primary + copies          Primary + copies
```

## Conceptual setup
1. Configure a MongoDB sharded cluster with config servers, `mongos`, and at least two shard replica sets.
2. Each shard replica set should have a primary and secondary members.
3. Connect through `mongos`.
4. Enable sharding and shard a collection using a suitable key.
5. Insert sample documents.
6. Verify both distribution and replica status.

Example commands once the cluster is configured:
```javascript
sh.status();
sh.enableSharding("CombinedLab");
db = db.getSiblingDB("CombinedLab");
db.Students.createIndex({ Student_ID: 1 });
sh.shardCollection("CombinedLab.Students", { Student_ID: 1 });

for (let i = 1; i <= 20; i++) {
  db.Students.insertOne({
    Student_ID: i,
    Name: "Student" + i,
    Course: i % 2 ? "BCA" : "BTech"
  });
}

sh.status();
db.Students.getShardDistribution();
```

## Advantages
- Sharding distributes storage and workload for horizontal scalability.
- Replication provides copies that can help maintain availability if a member fails.

## Limitation
The cluster is more complex to configure, monitor, and maintain. Real verification requires an actual multi-shard deployment with replica sets.

## Result
Sharding and replication address different needs: scale and fault tolerance.
