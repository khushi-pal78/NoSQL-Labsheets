# BCA305P — Lab Sheet 2: NoSQL Database Design

This repository contains beginner-friendly practical solutions for the 15 questions in the lab sheet.

## Contents
- `Q01_MySQL_and_MongoDB_Comparison.md`
- `Q02_MongoDB_CollegeDB_Students.js`
- `Q03_MongoDB_Orders.js`
- `Q04_Redis_Student_Information.txt`
- `Q05_Cassandra_Students.cql`
- `Q06_HBase_Students.txt`
- `Q07_Neo4j_Student_Course.cypher`
- `Q08_Compare_MongoDB_Cassandra_Neo4j.md`
- `Q09_MongoDB_Local_CRUD.md`
- `Q10_MongoDB_Sharding.md`
- `Q11_MongoDB_Replication.md`
- `Q12_Cassandra_Peer_to_Peer_Replication.md`
- `Q13_Sharding_and_Replication.md`
- `Q14_MongoDB_MapReduce.js`
- `Q15_Distribution_Models.md`

## How to use
1. Open the file for the practical you need.
2. Run commands in the appropriate database shell or tool.
3. Replace sample names/IDs if your teacher requires your own data.
4. Add screenshots of your actual output before submitting, if required.

## Important notes
- MongoDB shell examples use `mongosh`.
- Cassandra examples use `cqlsh`.
- Redis examples use `redis-cli`.
- HBase examples use the HBase shell.
- Neo4j examples use Cypher in Neo4j Browser.
- Some advanced practicals (sharding, replication, and peer-to-peer clusters) require multiple database processes or machines. The files explain the setup conceptually; a single standalone database will not demonstrate a real distributed cluster.
- MongoDB's legacy `mapReduce` command is deprecated/removed in recent versions. Question 14 includes an educational Map/Reduce-style JavaScript example and a modern aggregation alternative.
- Always use the commands compatible with the database version installed in your lab.
