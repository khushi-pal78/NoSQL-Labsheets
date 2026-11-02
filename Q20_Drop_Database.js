// Q20. Drop StudentDB and verify removal
use StudentDB
db.dropDatabase()
show dbs
// StudentDB should no longer appear if it has no other data.
