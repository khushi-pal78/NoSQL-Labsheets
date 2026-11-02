-- Q13. Cassandra event logging
-- Partition by user_id and cluster events by event_time for efficient user/time queries.
USE CollegeDB;

CREATE TABLE IF NOT EXISTS UserEvents (
    user_id text,
    event_time timestamp,
    event_id uuid,
    event_type text,
    status text,
    details text,
    PRIMARY KEY ((user_id), event_time, event_id)
) WITH CLUSTERING ORDER BY (event_time DESC, event_id ASC);

INSERT INTO UserEvents (user_id, event_time, event_id, event_type, status, details)
VALUES ('U101', '2026-10-20 09:00:00+0000', uuid(), 'LOGIN', 'SUCCESS', 'Login from laptop');

INSERT INTO UserEvents (user_id, event_time, event_id, event_type, status, details)
VALUES ('U101', '2026-10-20 09:05:00+0000', uuid(), 'LOGIN', 'FAILED', 'Incorrect password');

INSERT INTO UserEvents (user_id, event_time, event_id, event_type, status, details)
VALUES ('U101', '2026-10-21 10:00:00+0000', uuid(), 'FILE_UPLOAD', 'SUCCESS', 'Uploaded assignment');

INSERT INTO UserEvents (user_id, event_time, event_id, event_type, status, details)
VALUES ('U102', '2026-10-20 11:00:00+0000', uuid(), 'LOGOUT', 'SUCCESS', 'Session ended');

-- Events for one user
SELECT * FROM UserEvents WHERE user_id = 'U101';

-- Events for one user in a time range
SELECT * FROM UserEvents
WHERE user_id = 'U101'
AND event_time >= '2026-10-20 00:00:00+0000'
AND event_time < '2026-10-22 00:00:00+0000';
