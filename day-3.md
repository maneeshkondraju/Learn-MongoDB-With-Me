Day-3


product> db.emp.insertMany([
|   {
|     empno: 7369,
|     ename: "smith",
|     job: "clerk",
|     mgr: 7902,
|     hiredate: new Date("1980-12-17"),
|     sal: 800,
|     comm: null,
|     deptno: 20,
|   },
|   {
|     empno: 7499,
|     ename: "allen",
|     job: "salesman",
|     mgr: 7698,
|     hiredate: new Date("1981-02-20"),
|     sal: 1600,
|     comm: 300,
|     deptno: 30,
|   },
|   {
|     empno: 7521,
|     ename: "ward",
|     job: "salesman",
|     mgr: 7698,
|     hiredate: new Date("1981-02-22"),
|     sal: 1250,
|     comm: 500,
|     deptno: 30,
|   },
|   {
|     empno: 7566,
|     ename: "jones",
|     job: "manager",
|     mgr: 7839,
|     hiredate: new Date("1981-04-02"),
|     sal: 2975,
|     comm: null,
|     deptno: 20,
|   },
|   {
|     empno: 7654,
|     ename: "martin",
|     job: "salesman",
|     mgr: 7698,
|     hiredate: new Date("1981-09-28"),
|     sal: 1250,
|     comm: 1400,
|     deptno: 30,
|   },
|   {
|     empno: 7698,
|     ename: "blake",
|     job: "manager",
|     mgr: 7839,
|     hiredate: new Date("1981-05-01"),
|     sal: 2850,
|     comm: null,
|     deptno: 30,
|   },
|   {
|     empno: 7782,
|     ename: "clark",
|     job: "manager",
|     mgr: 7839,
|     hiredate: new Date("1981-06-09"),
|     sal: 2450,
|     comm: null,
|     deptno: 10,
|   },
|   {
|     empno: 7788,
|     ename: "scott",
|     job: "analyst",
|     mgr: 7566,
|     hiredate: new Date("1987-04-19"),
|     sal: 3000,
|     comm: null,
|     deptno: 20,
|   },
|   {
|     empno: 7839,
|     ename: "king",
|     job: "president",
|     mgr: null,
|     hiredate: new Date("1981-11-17"),
|     sal: 5000,
|     comm: null,
|     deptno: 10,
|   },
|   {
|     empno: 7844,
|     ename: "turner",
|     job: "salesman",
|     mgr: 7698,
|     hiredate: new Date("1981-09-08"),
|     sal: 1500,
|     comm: 0,
|     deptno: 30,
|   },
|   {
|     empno: 7876,
|     ename: "adams",
|     job: "clerk",
|     mgr: 7788,
|     hiredate: new Date("1987-05-23"),
|     sal: 1100,
|     comm: null,
|     deptno: 20,
|   },
|   {
|     empno: 7900,
|     ename: "james",
|     job: "clerk",
|     mgr: 7698,
|     hiredate: new Date("1981-12-03"),
|     sal: 950,
|     comm: null,
|     deptno: 30,
|   },
|   {
|     empno: 7902,
|     ename: "ford",
|     job: "analyst",
|     mgr: 7566,
|     hiredate: new Date("1981-12-03"),
|     sal: 3000,
|     comm: null,
|     deptno: 20,
|   },
|   {
|     empno: 7934,
|     ename: "miller",
|     job: "clerk",
|     mgr: 7782,
|     hiredate: new Date("1982-01-23"),
|     sal: 1300,
|     comm: null,
|     deptno: 10,
|   }
| ]);
|
|
| db.dept.insertMany([
|   { deptno: 10, dname: "accounting", loc: "new york" },
|   { deptno: 20, dname: "research", loc: "dallas" },
|   { deptno: 30, dname: "sales", loc: "chicago" },
|   { deptno: 40, dname: "operation", loc: "boston" },
| ]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6b03b4e35a980ee49fe24d9f'),
    '1': ObjectId('6b03b4e35a980ee49fe24da0'),
    '2': ObjectId('6b03b4e35a980ee49fe24da1'),
    '3': ObjectId('6b03b4e35a980ee49fe24da2')
  }
}
product> db.dept.
db.dept.__proto__                        db.dept.constructor                      db.dept.hasOwnProperty
db.dept.isPrototypeOf                    db.dept.propertyIsEnumerable             db.dept.toLocaleString
db.dept.toString                         db.dept.valueOf                          db.dept._aggregateAndScaleCollStats
db.dept._cachedSampleDocs                db.dept._createIndexes                   db.dept._database
db.dept._getAggregatedCollStats          db.dept._getLegacyCollStats              db.dept._getSampleDocs
db.dept._getSampleDocsForCompletion      db.dept._getShardedCollectionInfo        db.dept._getSingleStorageStatValue
db.dept._mongo                           db.dept._name                            db.dept.aggregate
db.dept.analyzeShardKey                  db.dept.bulkWrite                        db.dept.checkMetadataConsistency
db.dept.compactStructuredEncryptionData  db.dept.configureQueryAnalyzer           db.dept.convertToCapped
db.dept.count                            db.dept.countDocuments                   db.dept.createIndex
db.dept.createIndexes                    db.dept.createSearchIndex                db.dept.createSearchIndexes
db.dept.dataSize                         db.dept.deleteMany                       db.dept.deleteOne
db.dept.distinct                         db.dept.drop                             db.dept.dropIndex
db.dept.dropIndexes                      db.dept.dropSearchIndex                  db.dept.ensureIndex
db.dept.estimatedDocumentCount           db.dept.exists                           db.dept.explain
db.dept.find                             db.dept.findAndModify                    db.dept.findOne
db.dept.findOneAndDelete                 db.dept.findOneAndReplace                db.dept.findOneAndUpdate
db.dept.getDB                            db.dept.getFullName                      db.dept.getIndexes
db.dept.getIndexKeys                     db.dept.getIndexSpecs                    db.dept.getIndices
db.dept.getMongo                         db.dept.getName                          db.dept.getPlanCache
db.dept.getSearchIndexes                 db.dept.getShardDistribution             db.dept.getShardLocation
db.dept.getShardVersion                  db.dept.help                             db.dept.hideIndex
db.dept.initializeOrderedBulkOp          db.dept.initializeUnorderedBulkOp        db.dept.insert
db.dept.insertMany                       db.dept.insertOne                        db.dept.isCapped
db.dept.latencyStats                     db.dept.mapReduce                        db.dept.reIndex
db.dept.remove                           db.dept.renameCollection                 db.dept.replaceOne
db.dept.runCommand                       db.dept.stats                            db.dept.storageSize
db.dept.totalIndexSize                   db.dept.totalSize                        db.dept.unhideIndex
db.dept.update                           db.dept.updateMany                       db.dept.updateOne
db.dept.updateSearchIndex                db.dept.validate                         db.dept.watch

product> db.dept.count()
DeprecationWarning: Collection.count() is deprecated. Use countDocuments or estimatedDocumentCount.
4
product> db.dept.countDocuments()
4
product> db.dept.estimatedDocumentCount()
4
product> show tables
dept
emp
product> db.emp.estimatedDocumentCount()
14
product> db.emp.find({},{ename:true,sal:1,_id:0})
[
  { ename: 'smith', sal: 800 },
  { ename: 'ford', sal: 3000 },
  { ename: 'miller', sal: 1300 }
]
product> db.emp.find()
[
  {
    _id: ObjectId('6b03b4e35a980ee49fe24d91'),
    empno: 7369,
    ename: 'smith',
    job: 'clerk',
    mgr: 7902,
    hiredate: ISODate('1980-12-17T00:00:00.000Z'),
    sal: 800,
    comm: null,
    deptno: 20
  }
]
product> db.emp.find({},{ename:1,comm:1,_id:0})
[
  { ename: 'smith', comm: null },
  { ename: 'allen', comm: 300 },
  { ename: 'ward', comm: 500 },
  { ename: 'jones', comm: null }
]
product> db.emp.find({},{ename:1,comm:1,sal:1,_id:0})
[
  { ename: 'smith', sal: 800, comm: null },
  { ename: 'allen', sal: 1600, comm: 300 },
  { ename: 'ward', sal: 1250, comm: 500 }
]
product> db.emp.find({},{ename:1,sal:1,_id:0})
[
  { ename: 'smith', sal: 800 },
  { ename: 'allen', sal: 1600 },
  { ename: 'ward', sal: 1250 },
  { ename: 'jones', sal: 2975 }
]
product> db.emp.find({},{_id:1,deptno:1})
[
  { _id: ObjectId('6b03b4e35a980ee49fe24d91'), deptno: 20 },
  { _id: ObjectId('6b03b4e35a980ee49fe24d92'), deptno: 30 },
  { _id: ObjectId('6b03b4e35a980ee49fe24d93'), deptno: 30 }
]
product> db.emp.find({},{ename:1,hiredate:1,_id:0})
[
  { ename: 'smith', hiredate: ISODate('1980-12-17T00:00:00.000Z') },
  { ename: 'allen', hiredate: ISODate('1981-02-20T00:00:00.000Z') },
  { ename: 'ward', hiredate: ISODate('1981-02-22T00:00:00.000Z') },
  { ename: 'jones', hiredate: ISODate('1981-04-02T00:00:00.000Z') }
]
product> db.emp.find({},{ename:1,job:1,_id:0})
[
  { ename: 'smith', job: 'clerk' },
  { ename: 'allen', job: 'salesman' },
  { ename: 'ward', job: 'salesman' },
  { ename: 'jones', job: 'manager' }
]
product> db.emp.find({},{ename:1,job:1,sal:1,_id:0})
[
  { ename: 'smith', job: 'clerk', sal: 800 },
  { ename: 'allen', job: 'salesman', sal: 1600 },
  { ename: 'ward', job: 'salesman', sal: 1250 },
  { ename: 'jones', job: 'manager', sal: 2975 }
]
product> db.dept.find({},{dname:1})
[
  { _id: ObjectId('6b03b4e35a980ee49fe24d9f'), dname: 'accounting' },
  { _id: ObjectId('6b03b4e35a980ee49fe24da0'), dname: 'research' },
  { _id: ObjectId('6b03b4e35a980ee49fe24da1'), dname: 'sales' },
  { _id: ObjectId('6b03b4e35a980ee49fe24da2'), dname: 'operation' }
]
product> db.dept.find({},{dname:1,_id:0})
[
  { dname: 'accounting' },
  { dname: 'research' },
  { dname: 'sales' }
]
product> db.dept.find({},{dname:1,loc:1,_id:0})
[
  { dname: 'accounting', loc: 'new york' },
  { dname: 'research', loc: 'dallas' },
  { dname: 'sales', loc: 'chicago' }
]
