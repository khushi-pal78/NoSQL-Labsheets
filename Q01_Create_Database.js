// Q1. Create StudentDB and verify it
// MongoDB creates a database only after data is first stored in it.
use StudentDB
db.createCollection("Students")
show dbs
db.getName()
