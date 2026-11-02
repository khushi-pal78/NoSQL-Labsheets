-- Q14. Availability and consistency using ONE, QUORUM and ALL
-- Meaningful comparison requires a multi-node cluster and replication_factor >= 3.
-- On a one-node cluster, RF=1 and ONE/QUORUM/ALL do not demonstrate node-failure trade-offs.
CREATE KEYSPACE IF NOT EXISTS ConsistencyLab
WITH replication = {'class': 'NetworkTopologyStrategy', 'datacenter1': 3};

USE ConsistencyLab;

CREATE TABLE IF NOT EXISTS ConsistencyDemo (
    item_id int PRIMARY KEY,
    item_name text,
    quantity int
);

-- Write with ONE: waits for one replica acknowledgement
CONSISTENCY ONE;
INSERT INTO ConsistencyDemo (item_id, item_name, quantity)
VALUES (1, 'Notebook', 50);

-- Read with ONE
CONSISTENCY ONE;
SELECT * FROM ConsistencyDemo WHERE item_id = 1;

-- Write with QUORUM: waits for a majority of replicas
CONSISTENCY QUORUM;
UPDATE ConsistencyDemo SET quantity = 45 WHERE item_id = 1;

-- Read with QUORUM
CONSISTENCY QUORUM;
SELECT * FROM ConsistencyDemo WHERE item_id = 1;

-- Write/read with ALL: all replicas must respond
CONSISTENCY ALL;
UPDATE ConsistencyDemo SET quantity = 40 WHERE item_id = 1;
SELECT * FROM ConsistencyDemo WHERE item_id = 1;

-- Observation:
-- ONE: higher availability/low latency, but a read may see stale data.
-- QUORUM: majority acknowledgements; R + W > RF helps provide strong consistency
-- for a key when using appropriate replication and normal conditions.
-- ALL: strongest acknowledgement requirement, but unavailable if any required
-- replica is down. Actual outcomes depend on topology, replication and failures.
