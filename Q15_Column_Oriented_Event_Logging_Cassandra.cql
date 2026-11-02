-- Q15. Column-oriented NoSQL application: Event Logging using Cassandra
-- This practical demonstrates create, insert, query, update and delete.
-- Cassandra is a wide-column/partitioned-row database.

CREATE KEYSPACE IF NOT EXISTS EventApplication
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE EventApplication;

CREATE TABLE IF NOT EXISTS EventsByUser (
    user_id text,
    event_date date,
    event_time timestamp,
    event_id uuid,
    event_type text,
    status text,
    description text,
    PRIMARY KEY ((user_id, event_date), event_time, event_id)
) WITH CLUSTERING ORDER BY (event_time DESC, event_id ASC);

-- Insert records
INSERT INTO EventsByUser (user_id, event_date, event_time, event_id, event_type, status, description)
VALUES ('U101', '2026-10-20', '2026-10-20 09:00:00+0000', uuid(), 'LOGIN', 'SUCCESS', 'User logged in');

INSERT INTO EventsByUser (user_id, event_date, event_time, event_id, event_type, status, description)
VALUES ('U101', '2026-10-20', '2026-10-20 09:10:00+0000', uuid(), 'PAGE_VIEW', 'SUCCESS', 'Opened dashboard');

INSERT INTO EventsByUser (user_id, event_date, event_time, event_id, event_type, status, description)
VALUES ('U102', '2026-10-20', '2026-10-20 10:00:00+0000', uuid(), 'LOGIN', 'FAILED', 'Invalid password');

-- Query: partition key must be specified
SELECT * FROM EventsByUser
WHERE user_id = 'U101' AND event_date = '2026-10-20';

-- Update a known row. Use the complete primary key values.
-- Example uses a fixed UUID so the row can be addressed predictably:
INSERT INTO EventsByUser (user_id, event_date, event_time, event_id, event_type, status, description)
VALUES ('U103', '2026-10-20', '2026-10-20 11:00:00+0000',
        11111111-1111-4111-8111-111111111111, 'LOGIN', 'FAILED', 'Initial status');

UPDATE EventsByUser SET status = 'SUCCESS'
WHERE user_id = 'U103'
AND event_date = '2026-10-20'
AND event_time = '2026-10-20 11:00:00+0000'
AND event_id = 11111111-1111-4111-8111-111111111111;

SELECT * FROM EventsByUser
WHERE user_id = 'U103' AND event_date = '2026-10-20';

-- Delete the known row using its full primary key
DELETE FROM EventsByUser
WHERE user_id = 'U103'
AND event_date = '2026-10-20'
AND event_time = '2026-10-20 11:00:00+0000'
AND event_id = 11111111-1111-4111-8111-111111111111;

-- Explanation for lab record:
-- Consistency: tunable per operation using ONE, QUORUM, ALL, etc.
-- Availability: replication and consistency level determine whether operations
-- can continue during node failures; ALL is least available.
-- Transactions: lightweight transactions (IF conditions) use Paxos; ordinary
-- multi-row operations are not general ACID transactions.
-- Query features: CQL supports queries designed around partition/clustering keys;
-- arbitrary joins and unrestricted filtering are not its normal access pattern.
-- Scaling: partition data across nodes; add nodes to expand capacity.
-- For production, choose replication factor and partition keys based on cluster size/workload.
