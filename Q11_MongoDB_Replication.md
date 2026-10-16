# Question 11 — Primary-Secondary replication in MongoDB

## Aim
Demonstrate replication using a MongoDB replica set.

## Setup overview
Use at least three `mongod` members for a robust replica set (for example, one primary and two secondaries). Each member needs a separate data directory and port. Configure all members with the same replica-set name, such as `rs0`, and start them with replica-set configuration. Exact service commands depend on your OS and installation.

Connect to one member using `mongosh` and initialize the set:
```javascript
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "localhost:27017" },
    { _id: 1, host: "localhost:27018" },
    { _id: 2, host: "localhost:27019" }
  ]
});
```
These ports must correspond to three running `mongod` processes configured with `replSetName: "rs0"`.

## Insert data on the primary
```javascript
rs.status();
db = db.getSiblingDB("ReplicationLab");
db.Students.insertOne({ Student_ID: 1101, Name: "Aarav", Course: "BCA" });
```

## Verify on a secondary
Connect to a secondary:
```javascript
rs.secondaryOk(); // Older shells; modern mongosh may use read preference settings.
db = db.getSiblingDB("ReplicationLab");
db.Students.find();
```
Use an appropriate secondary read preference for the installed `mongosh` version.

## If the primary becomes unavailable
If a majority of voting members is available, an eligible secondary can be elected as the new primary. Writes pause during election and resume after a new primary is elected. If a majority is unavailable, the set cannot elect a primary.

## Result
A replica set maintains copies of data on multiple members and can provide high availability when configured correctly.
