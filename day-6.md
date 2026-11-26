# day-6

product> //waqtd name,sal,job,deptno of all the employee who is working as a manager in deptno 20

product> db.emp.find({job:'manager',deptno:20},{ename:1,sal:1,job:1,deptno:1,_id:0})
[ { ename: 'jones', job: 'manager', sal: 2975, deptno: 20 } ]

product> db.emp.find({$and:[{job:'manager'},{deptno:20}]},{ename:1,sal:1,job:1,deptno:1,_id:0})
[ { ename: 'jones', job: 'manager', sal: 2975, deptno: 20 } ]
product> //waqtd name and deptno of all the employee who is worknig in deptno 10 or 20

product> db.emp.find({$or:[{deptno:10},{deptno:20}]},{ename:1,deptno:1,_id:0})
[
  { ename: 'smith', deptno: 20 },
  { ename: 'jones', deptno: 20 },
  { ename: 'clark', deptno: 10 },
  { ename: 'scott', deptno: 20 },
  { ename: 'king', deptno: 10 },
  { ename: 'adams', deptno: 20 },
  { ename: 'ford', deptno: 20 },
  { ename: 'miller', deptno: 10 }
]
product> //waqtd name and job of all the emplolyee who is working as a manager or analyst

product> db.emp.find({$or:[{job:'manager'},{job:'analyst'}]},{ename:1,job:1,_id:0})
[
  { ename: 'jones', job: 'manager' },
  { ename: 'blake', job: 'manager' },
  { ename: 'clark', job: 'manager' },
  { ename: 'scott', job: 'analyst' },
  { ename: 'ford', job: 'analyst' }
]
product> //waqtd name and sal of the employee who is not earning more than 1500

product> db.emp.find({sal:{$not:{$gt:1500}}},{ename:1,sal:1,_id:0})
[
  { ename: 'smith', sal: 800 },
  { ename: 'ward', sal: 1250 },
  { ename: 'martin', sal: 1250 },
  { ename: 'turner', sal: 1500 },
  { ename: 'adams', sal: 1100 },
  { ename: 'james', sal: 950 },
  { ename: 'miller', sal: 1300 }
]
product> db.emp.find({deptno:{$in:[10,20]}},{ename:1,deptno:1,_id:0})
[
  { ename: 'smith', deptno: 20 },
  { ename: 'jones', deptno: 20 },
  { ename: 'clark', deptno: 10 },
  { ename: 'scott', deptno: 20 },
  { ename: 'king', deptno: 10 },
  { ename: 'adams', deptno: 20 },
  { ename: 'ford', deptno: 20 },
  { ename: 'miller', deptno: 10 }
]
product> db.emp.find({deptno:{$not:{$in:[10,20]}}},{ename:1,deptno:1,_id:0})
[
  { ename: 'allen', deptno: 30 },
  { ename: 'ward', deptno: 30 },
  { ename: 'martin', deptno: 30 },
  { ename: 'blake', deptno: 30 },
  { ename: 'turner', deptno: 30 },
  { ename: 'james', deptno: 30 }
]