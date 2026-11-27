__day-7__

test> use product
switched to db product
product> **db.emp.find({$and:[{job:'clerk'},{sal:{$lt:1500}}]},{ename:1,empno:1,deptno:1,_id:0})**
[
  { empno: 7369, ename: 'smith', deptno: 20 },
  { empno: 7876, ename: 'adams', deptno: 20 },
  { empno: 7900, ename: 'james', deptno: 30 },
  { empno: 7934, ename: 'miller', deptno: 10 }
]
product> **db.emp.find({$and:[{job:'clerk'},{sal:{$lt:1500}}]},{ename:1,empno:1,deptno:1,_id:0,sal:1})**
[
  { empno: 7369, ename: 'smith', sal: 800, deptno: 20 },
  { empno: 7876, ename: 'adams', sal: 1100, deptno: 20 },
  { empno: 7900, ename: 'james', sal: 950, deptno: 30 },
  { empno: 7934, ename: 'miller', sal: 1300, deptno: 10 }
]
product> **db.emp.find({$and:[{job:'manager'},{deptno:30}]},{ename:1,hiredate:1,_id:0})**
[ { ename: 'blake', hiredate: ISODate('1981-05-01T00:00:00.000Z') } 
]
product> **db.emp.find({$and:[{job:'salesman'},{comm:{$lt:1000}},{deptno:30}]},{ename:1,empno:1,deptno:1,_id:0,sal:1})**
[
  { empno: 7499, ename: 'allen', sal: 1600, deptno: 30 },
  { empno: 7521, ename: 'ward', sal: 1250, deptno: 30 },
  { empno: 7844, ename: 'turner', sal: 1500, deptno: 30 }
]
product> **db.emp.find({$and:[{job:'salesman'},{comm:{$lt:1000}},{deptno:30}]},{ename:1,empno:1,deptno:1,_id:0,sal:1,comm:1})**
[
  { empno: 7499, ename: 'allen', sal: 1600, comm: 300, deptno: 30 },
  { empno: 7521, ename: 'ward', sal: 1250, comm: 500, deptno: 30 },
  { empno: 7844, ename: 'turner', sal: 1500, comm: 0, deptno: 30 }
]
product> **db.emp.find({$or:[{job:'analyst'},{deptno:30}]},{ename:1,empno:1,deptno:1,_id:0,sal:1,comm:1})**
[
  { empno: 7499, ename: 'allen', sal: 1600, comm: 300, deptno: 30 },
  { empno: 7521, ename: 'ward', sal: 1250, comm: 500, deptno: 30 },
  { empno: 7654, ename: 'martin', sal: 1250, comm: 1400, deptno: 30 },
  { empno: 7698, ename: 'blake', sal: 2850, comm: null, deptno: 30 },
]
product> **db.emp.find({$or:[{job:'analyst'},{deptno:30}]},{ename:1,empno:1,deptno:1,_id:0,sal:1,comm:1,job:1})**
[
  {
    empno: 7499,
    ename: 'allen',
    job: 'salesman',
    sal: 1600,
    comm: 300,
    deptno: 30
  }
]
product> **db.emp.find({$and:[{job:'clerk'},{sal:{$lt:1100}}]},{ename:1,_id:0})**
[ { ename: 'smith' }, { ename: 'james' } 
]
product> **db.emp.find({$or:[{deptno:20},{deptno:30}]},{ename:1,empno:1,deptno:1,_id:0,sal:1,comm:1,job:1})**
[
  {
    empno: 7369,
    ename: 'smith',
    job: 'clerk',
    sal: 800,
    comm: null,
    deptno: 20
  },
  {
    empno: 7499,
    ename: 'allen',
    job: 'salesman',
    sal: 1600,
    comm: 300,
    deptno: 30
  }
]
product> **db.emp.find({$and:[{job:'analyst'},{deptno:20}]},{ename:1,sal:1,job:1,deptno:1,_id:0})**
[
  { ename: 'scott', job: 'analyst', sal: 3000, deptno: 20 },
  { ename: 'ford', job: 'analyst', sal: 3000, deptno: 20 }
]
product> **db.emp.find({$and:[{sal:{$gt:1100}},{deptno:20}],},{ename:1,deptno:1,_id:0,sal:1,annual_sal:{$multiply:["$sal",12]}})**
[
  { ename: 'jones', sal: 2975, deptno: 20, annual_sal: 35700 },
  { ename: 'scott', sal: 3000, deptno: 20, annual_sal: 36000 },
  { ename: 'ford', sal: 3000, deptno: 20, annual_sal: 36000 }
]
product> **db.emp.find({$or:[{deptno:20},{deptno:30},{job:'clerk'}]},{ename:1,deptno:1,_id:0,job:1})**
[
  { ename: 'smith', job: 'clerk', deptno: 20 },
  { ename: 'allen', job: 'salesman', deptno: 30 },
  { ename: 'ward', job: 'salesman', deptno: 30 }
]
product> **db.emp.find({$and:[{deptno:{$ne:10}},{job:'clerk'}]},{ename:1,deptno:1,_id:0,job:1})**
[
  { ename: 'smith', job: 'clerk', deptno: 20 },
  { ename: 'adams', job: 'clerk', deptno: 20 },
  { ename: 'james', job: 'clerk', deptno: 30 }
]
product> **db.emp.find({$or:[{deptno:{$ne:[20,30]}},{job:'manager'},{job:'clerk'}]},{ename:1,deptno:1,_id:0,job:1})**
[
  { ename: 'smith', job: 'clerk', deptno: 20 },
  { ename: 'allen', job: 'salesman', deptno: 30 },
  { ename: 'ward', job: 'salesman', deptno: 30 },
  { ename: 'jones', job: 'manager', deptno: 20 }
]
product> **db.emp.find({deptno:{$eq:10}},{ename:1,deptno:1,_id:0})**
[
  { ename: 'clark', deptno: 10 },
  { ename: 'king', deptno: 10 },
  { ename: 'miller', deptno: 10 }
]
product> **db.emp.find({deptno:10,job:{$in:['clerk','manager']}},{ename:1,deptno:1,job:1,_id:0})**
[
  { ename: 'clark', job: 'manager', deptno: 10 },
  { ename: 'miller', job: 'clerk', deptno: 10 }
]
product> **db.emp.find({deptno:{$in:[10,20,30,40]}},{ename:1,deptno:1,_id:0})**
[
  { ename: 'smith', deptno: 20 },
  { ename: 'allen', deptno: 30 },
  { ename: 'ward', deptno: 30 }
]
product> **db.emp.find({empno:{$in:[7902,7839]}},{ename:1,deptno:1,empno:1,_id:0})**
[
  { empno: 7839, ename: 'king', deptno: 10 },
  { empno: 7902, ename: 'ford', deptno: 20 }
]
product> **db.emp.find({job:{$in:['manager','clerk','salesman']}},{ename:1,deptno:1,empno:1,job:1,_id:0})**
[
  { empno: 7369, ename: 'smith', job: 'clerk', deptno: 20 },
  { empno: 7499, ename: 'allen', job: 'salesman', deptno: 30 },
  { empno: 7521, ename: 'ward', job: 'salesman', deptno: 30 }
]
product> **db.emp.find({hiredate:{$gt:new Date('31-12,1981'),$lt:new Date('01-01-1987')}},{ename:1,hiredate:1,_id:0})**
[
  { ename: 'smith', hiredate: ISODate('1980-12-17T00:00:00.000Z') },
  { ename: 'allen', hiredate: ISODate('1981-02-20T00:00:00.000Z') },
  { ename: 'ward', hiredate: ISODate('1981-02-22T00:00:00.000Z') }
]
product> **db.emp.find({sal:{$gt:1250,$lt:3000}},{ename:1,sal:1,_id:0})**
[
  { ename: 'allen', sal: 1600 },
  { ename: 'jones', sal: 2975 },
  { ename: 'blake', sal: 2850 }
]
product> **db.emp.find({hiredate:{$gt:new Date('31-12,1981')},deptno:{$in:[10,30]}},{ename:1,hiredate:1,_id:0,deptno:1})**
[
  {
    ename: 'allen',
    hiredate: ISODate('1981-02-20T00:00:00.000Z'),
    deptno: 30
  },
  {
    ename: 'blake',
    hiredate: ISODate('1981-05-01T00:00:00.000Z'),
    deptno: 30
  },
  {
    ename: 'clark',
    hiredate: ISODate('1981-06-09T00:00:00.000Z'),
    deptno: 10
  }
]




