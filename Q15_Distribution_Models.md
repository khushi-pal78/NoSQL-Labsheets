# Question 15 — Database distribution models

## 1. Single Server
```text
Application ---> One database server
```
- **Data distribution:** All data is stored on one server.
- **Failure handling:** If the server fails, service may be unavailable until recovery.
- **Advantage:** Simple to set up and manage.
- **Limitation:** Limited by one machine's resources and can be a single point of failure.
- **Suitable application:** Small college lab database.

## 2. Sharding
```text
                  Application
                      |
                    Router
                 /          \
             Shard A       Shard B
```
- **Data distribution:** Different data ranges/partitions are stored on different shards.
- **Failure handling:** A failed shard can affect its data unless replication/recovery is configured.
- **Advantage:** Supports horizontal growth in storage and workload.
- **Limitation:** More complex queries and administration can be required.
- **Suitable application:** Large online catalog or high-volume platform.

## 3. Primary-Secondary Replication
```text
              Application
                   |
                Primary
               /        \
         Secondary 1  Secondary 2
```
- **Data distribution:** Copies of the same data are maintained on multiple members.
- **Failure handling:** An eligible secondary may become primary if election requirements are met.
- **Advantage:** Improves availability and provides redundant copies.
- **Limitation:** Replication uses extra storage and failover can take time.
- **Suitable application:** A business application needing database availability.

## 4. Peer-to-Peer Replication
```text
             Node A <----> Node B
                ^             |
                |             v
                    Node C
```
- **Data distribution:** Nodes can coordinate as peers and data is replicated according to the database's strategy.
- **Failure handling:** Other replicas may continue serving requests, depending on replication and consistency settings.
- **Advantage:** No single fixed primary for all operations in systems such as Cassandra.
- **Limitation:** Consistency and operations require careful design.
- **Suitable application:** Distributed event or time-series data platform.

## 5. Sharding + Replication
```text
                   Application
                       |
                     Router
                  /          \
          Shard A replica set  Shard B replica set
           Primary + copies    Primary + copies
```
- **Data distribution:** Different partitions go to different shards; each shard has replicated copies.
- **Failure handling:** Replica election can protect a shard from an individual member failure; overall availability depends on cluster health.
- **Advantage:** Combines horizontal scalability with fault tolerance.
- **Limitation:** Highest setup and operational complexity among these examples.
- **Suitable application:** Large e-commerce or content platform.

## Summary table

| Model | Main purpose | Main limitation |
|---|---|---|
| Single server | Simplicity | Single point of failure / limited scale |
| Sharding | Horizontal scalability | More complex operations |
| Primary-secondary replication | Redundancy and failover | Replication overhead |
| Peer-to-peer replication | Distributed availability and throughput | Consistency/operations complexity |
| Sharding + replication | Scale plus redundancy | Highest complexity |
