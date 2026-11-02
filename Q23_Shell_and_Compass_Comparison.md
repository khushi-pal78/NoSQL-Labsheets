# Q23. MongoDB Shell and MongoDB Compass

## MongoDB Shell (mongosh)
- A command-line interface for MongoDB.
- Commands are written in JavaScript-like syntax.
- Useful for scripts, repeated tasks, administration and query practice.
- Example: `db.Students.find({ department: "Computer Science" })`

## MongoDB Compass
- A graphical user interface (GUI).
- Collections, documents, filters, updates and indexes can be managed visually.
- Helpful for beginners to inspect documents and understand query results.
- Does not require typing every operation as a shell command.

## Demonstration
Connect both tools to the same MongoDB cluster. Insert one student in Shell and refresh the Compass Documents tab; the record should appear. Insert another record in Compass and run `db.Students.find()` in Shell; it should also appear.

## Observation
Both tools manage the same MongoDB data. The difference is the interface: Shell is command-based, while Compass is graphical.
