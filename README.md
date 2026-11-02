# MongoDB StudentDB CRUD – Lab Sheet Answers

This ZIP contains 25 separate answer files, one for each practical question.

## Files
- Q01–Q21: MongoDB Shell (`mongosh`) commands in `.js` files.
- Q22–Q24: MongoDB Compass guide, Shell/Compass comparison, and MongoDB-vs-SQL comparison in `.md` files.
- Q25: Laboratory report template in `.md` format.

## How to run
1. Connect to your MongoDB Atlas cluster or local MongoDB deployment using `mongosh`.
2. Run the commands in each `.js` file in order, one question at a time.
3. Commands beginning with `use StudentDB` are entered in mongosh.
4. Q20 intentionally drops the StudentDB database. Run Q20 only after completing earlier questions and when you are ready to delete the lab database.
5. Q21 recreates the database with fresh sample data.
6. For Q22, follow the manual MongoDB Compass steps in its Markdown file.
7. Fill Q25 with your own details, actual command outputs and screenshots.

## Important notes
- MongoDB creates a database when data is first stored in it; `use StudentDB` alone only switches the current shell context.
- If you run a file more than once, insert commands may create duplicate documents unless the collection is cleared first.
- Q12 uses an update pipeline and requires a MongoDB version that supports update pipelines (MongoDB 4.2+). If unavailable, set Email values individually with `$set`.
- Use the same MongoDB deployment in Compass and mongosh when comparing results.
