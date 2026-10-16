# Question 12 — Cassandra peer-to-peer replication

## Aim
Understand Cassandra's distributed peer-to-peer architecture.

## Setup
Install/configure multiple Cassandra nodes with compatible versions and a shared cluster name, network configuration, and seed configuration. Start all nodes and verify membership with:
```bash
nodetool status
```

## Create a keyspace
For a three-node cluster:
```sql
CREATE KEYSPACE IF NOT EXISTS CollegeDB
WITH replication = {
  'class': 'NetworkTopologyStrategy',
  'datacenter1': 3
};

USE CollegeDB;

CREATE TABLE IF NOT EXISTS Students (
  Student_ID int PRIMARY KEY,
  Name text,
  Course text,
  Marks int
);

INSERT INTO Students (Student_ID, Name, Course, Marks)
VALUES (1201, 'Aarav', 'BCA', 82);

INSERT INTO Students (Student_ID, Name, Course, Marks)
VALUES (1202, 'Diya', 'BCA', 91);

SELECT * FROM Students;
```
The datacenter name must match the actual cluster configuration. A replication factor of 3 requires enough nodes in that datacenter.

## Verify availability
- Run `nodetool status` on a node to see cluster membership and node state.
- Query the data through a Cassandra node using `cqlsh`.
- To test failure tolerance, stop one node only in a controlled lab and verify reads/writes according to consistency level and replication factor.

## Difference from master-secondary
- Cassandra uses a peer-to-peer architecture: nodes can coordinate requests and there is no fixed single primary for all writes.
- In primary-secondary replication, writes are generally directed to the primary, and secondaries replicate the changes.

## Result
Cassandra replicates partition data across nodes according to the keyspace replication strategy.
