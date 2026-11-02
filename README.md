# BCA305P – NoSQL Database Design – Lab Sheet 4

This archive contains one separate answer file for each of the 15 practical questions in the uploaded Lab Sheet 4.

## Contents
- Q01–Q10: Apache HBase Shell practicals (`.hbase`) and setup/explanation notes (`.md`).
- Q11–Q15: Apache Cassandra CQL practicals (`.cql`).

## Running HBase files
1. Run HBase in a supported Linux environment (for example Ubuntu/WSL2 or a Linux VM).
2. Start HBase, then open `hbase shell`.
3. Copy and run the commands from the required `.hbase` file in the HBase shell.
4. For Q1, see the installation and configuration guide in `Q01_Student_Table_HBase.md`.
5. Q10's region distribution requires a distributed HBase cluster with multiple RegionServers to demonstrate actual server-level distribution.

## Running Cassandra files
1. Start a Cassandra cluster and open `cqlsh`.
2. Run the required `.cql` file in `cqlsh` (you can copy/paste its commands).
3. Q11 uses a single-node-friendly replication factor of 1. For multi-node production/lab clusters, adjust replication factor.
4. Q14's ONE/QUORUM/ALL comparison is meaningful only on a multi-node cluster with replication factor 3 in the configured datacenter. A single-node cluster cannot demonstrate replica failure trade-offs.

## Important
- The examples use sample names, dates and values. You may modify them for your practical record.
- HBase and Cassandra commands are not SQL and must be run in their respective shells.
- Run each question separately. Some scripts create tables and will fail if a table with the same name already exists; drop/cleanup only when safe.
- The setup commands and version compatibility depend on the Java, HBase and Cassandra versions installed. Follow the official documentation for the exact release you use.
