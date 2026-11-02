# Q22. Perform CRUD operations using MongoDB Compass

1. Open MongoDB Compass and connect to your Atlas cluster or local MongoDB connection.
2. Select `StudentDB`. If it does not exist, click **Create Database**, enter `StudentDB` and `Students`, then create it.
3. Open `Students` and click **Add Data → Insert Document**. Add a document such as:
   ```json
   {
     "rollNo": 301,
     "name": "Aman",
     "department": "Computer Science",
     "semester": 2,
     "cgpa": 8.7
   }
   ```
4. **Read:** open the Documents tab. To filter, enter `{ "rollNo": 301 }` in the Filter box and click Find.
5. **Update:** use the document's edit/pencil control, or use the update interface with filter `{ "rollNo": 301 }` and update `{ "$set": { "department": "IT" } }`.
6. **Delete:** select the matching document and click the delete/trash control; confirm the action.
7. Compare with Shell:
   - Insert: `db.Students.insertOne({...})`
   - Read: `db.Students.find({rollNo: 301})`
   - Update: `db.Students.updateOne({rollNo: 301}, {$set: {department: "IT"}})`
   - Delete: `db.Students.deleteOne({rollNo: 301})`

Compass provides a graphical interface; MongoDB Shell uses commands. Both work on the same database when connected to the same MongoDB deployment.
