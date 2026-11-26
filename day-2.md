Day-2
C:\Users\manis>mongosh
Current Mongosh Log ID: 6affc0ea739ace04a4377bb0
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.14.2
Using MongoDB:          9.0.8
Using Mongosh:          2.14.2

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2026-11-18T09:40:51.314+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> use student
switched to db student
student> db.createCollection("studentdata");
{ ok: 1 }
student> show tables
studentdata
student> db.studentdata.insertOne({
|     username:"manu",
|     age:20,
|     address:{
|         dno:"22/5",
|         city:"marathahalli",
|         state:"karnataka"
|     },
|     skills:{
|         frontend:("html","css"),
|         backend:("node.js","nextjs"),
|         database:("mongodb")
|     }
| })
{
  acknowledged: true,
  insertedId: ObjectId('6affc6c8739ace04a4377bb1')
}
student> db.studentdata.findOne()
{
  _id: ObjectId('6affc6c8739ace04a4377bb1'),
  username: 'manu',
  age: 20,
  address: { dno: '22/5', city: 'marathahalli', state: 'karnataka' },
  skills: { frontend: 'css', backend: 'nextjs', database: 'mongodb' }
}
student> db.studentdata.insertOne({
|     username:"ram",
|     age:22,
|     address:{
|         dno:"22/5",
|         city:"nellore",
|         state:"andhra pradesh"
|     },
|     skills:{
|         frontend:("html","css"),
|         backend:("node.js","nextjs"),
|         database:("mongodb")
|     }
| })
{
  acknowledged: true,
  insertedId: ObjectId('6affc71a739ace04a4377bb2')
}
student> show tables
studentdata
student> db.studentdata.find()
[
  {
    _id: ObjectId('6affc6c8739ace04a4377bb1'),
    username: 'manu',
    age: 20,
    address: { dno: '22/5', city: 'marathahalli', state: 'karnataka' },
    skills: { frontend: 'css', backend: 'nextjs', database: 'mongodb' }
  },
  {
    _id: ObjectId('6affc71a739ace04a4377bb2'),
    username: 'ram',
    age: 22,
    address: { dno: '22/5', city: 'nellore', state: 'andhra pradesh' },
    skills: { frontend: 'css', backend: 'nextjs', database: 'mongodb' }
  }
]
student> db.studentdata.insertOne({
|     username:"ram",
|     age:22,
|     address:{
|         dno:"22/5",
|         city:"kvl",
|         state:"andhra pradesh"
|     },
|     skills:{
|         frontend:("html","css"),
|         backend:("node.js","nextjs"),
|         database:("mongodb")
|     }
| })
{
  acknowledged: true,
  insertedId: ObjectId('6affc85c739ace04a4377bb3')
}
student> db.studentdata.find({username:"ram"});
[
  {
    _id: ObjectId('6affc71a739ace04a4377bb2'),
    username: 'ram',
    age: 22,
    address: { dno: '22/5', city: 'nellore', state: 'andhra pradesh' },
    skills: { frontend: 'css', backend: 'nextjs', database: 'mongodb' }
  },
  {
    _id: ObjectId('6affc85c739ace04a4377bb3'),
    username: 'ram',
    age: 22,
    address: { dno: '22/5', city: 'kvl', state: 'andhra pradesh' },
    skills: { frontend: 'css', backend: 'nextjs', database: 'mongodb' }
  }
]
student> db.studentdata.findOne({username:"ram"});
{
  _id: ObjectId('6affc71a739ace04a4377bb2'),
  username: 'ram',
  age: 22,
  address: { dno: '22/5', city: 'nellore', state: 'andhra pradesh' },
  skills: { frontend: 'css', backend: 'nextjs', database: 'mongodb' }
}
