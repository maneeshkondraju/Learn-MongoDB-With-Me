# Day-5

product> **db.emp.find({sal:{$gt:2000}},{hiredate:1,ename:1,_id:0,sal:1,comm:1,job:1,empno:1,deptno:1})**
[
  {
    empno: 7566,
    ename: 'jones',
    job: 'manager',
    hiredate: ISODate('1981-04-02T00:00:00.000Z'),
    sal: 2975,
    comm: null,
    deptno: 20}
    ]-----------------------------------------------------------------------------------------------------------
product> **db.emp.find({job:{$eq:"analyst"}},{hiredate:1,ename:1,_id:0,sal:1,comm:1,job:1,empno:1,deptno:1})**
[
  {
    empno: 7788,
    ename: 'scott',
    job: 'analyst',
    hiredate: ISODate('1987-04-19T00:00:00.000Z'),
    sal: 3000,
    comm: null,
    deptno: 20
  }]-----------------------------------------------------------------------------------------------------------
product> **db.emp.find({hiredate:{$lt:new Date('1987-01-01')}},{empno:1,_id:0})**
[
  { empno: 7369 },
  { empno: 7499 },
  { empno: 7521 },
  { empno: 7566 },
  { empno: 7654 }
  ]-----------------------------------------------------------------------------------------------------------
product> **db.emp.find({job:{$eq:"manager"}},{hiredate:1,ename:1,_id:0,sal:1,comm:1,job:1,empno:1,deptno:1})**
[
  {
    empno: 7566,
    ename: 'jones',
    job: 'manager',
    hiredate: ISODate('1981-04-02T00:00:00.000Z'),
    sal: 2975,
    comm: null,
    deptno: 20
  }]----------------------------------------------------------------------------------------------------------
product> **db.emp.find({deptno:{$eq:30}},{empno:1,_id:0})**
[
  { empno: 7499 },
  { empno: 7521 },
  { empno: 7654 }
  ]-----------------------------------------------------------------------------------------------------------
product> **db.emp.find({comm:{$eq:1400}},{ename:1,sal:1,_id:0})**
[ { ename: 'martin', sal: 1250 } 
]----------------------------------------------------------------------------------------------------------------
product> **db.emp.find({hiredate:{$gt:new Date('1981-01-01')}},{hiredate:1,ename:1,_id:0,sal:1,comm:1,job:1,empno:1,deptno:1})**
[
  {
    empno: 7499,
    ename: 'allen',
    job: 'salesman',
    hiredate: ISODate('1981-02-20T00:00:00.000Z'),
    sal: 1600,
    comm: 300,
    deptno: 30
  },
  {
    empno: 7521,
    ename: 'ward',
    job: 'salesman',
    hiredate: ISODate('1981-02-22T00:00:00.000Z'),
    sal: 1250,
    comm: 500,
    deptno: 30
  }]-----------------------------------------------------------------------------------------------------------
product> **db.emp.find({hiredate:{$gt:new Date('1981-01-01')}},{ename:1,_id:0,sal:1,comm:1,job:1,empno:1,deptno:1})**
[
  {
    empno: 7499,
    ename: 'allen',
    job: 'salesman',
    sal: 1600,
    comm: 300,
    deptno: 30
  },
  {
    empno: 7521,
    ename: 'ward',
    job: 'salesman',
    sal: 1250,
    comm: 500,
    deptno: 30
  }]-------------------------------------------------------------------------------------------------------
product> **db.emp.find({ename:{$eq:'jones'}},{ename:1,_id:0,sal:1,comm:1,job:1,empno:1,deptno:1})**
[
  {
    empno: 7566,
    ename: 'jones',
    job: 'manager',
    sal: 2975,
    comm: null,
    deptno: 20
  }
]----------------------------------------------------------------------------------------------------------
product> **db.emp.find({sal:{$gt:2000}},{ename:1,_id:0,sal:1,comm:1,job:1,empno:1,deptno:1})**
[
  {
    empno: 7566,
    ename: 'jones',
    job: 'manager',
    sal: 2975,
    comm: null,
    deptno: 20
  },
  {
    empno: 7698,
    ename: 'blake',
    job: 'manager',
    sal: 2850,
    comm: null,
    deptno: 30
  }]----------------------------------------------------------------------------------------------
product> **db.emp.find({job:{$eq:'salesman'}},{ename:1,_id:0,sal:1})**
[
  { ename: 'allen', sal: 1600 },
  { ename: 'ward', sal: 1250 },
  { ename: 'martin', sal: 1250 }
  ]----------------------------------------------------------------------------------------------------------------
product> **db.emp.find({job:{$eq:'clerk'}},{ename:1,_id:0})**
[
  { ename: 'smith' },
  { ename: 'adams' },
  { ename: 'james' }]-------------------------------------------------------------------------------------------------------------
product> **db.emp.find({ename:{$eq:'smith'}},{ename:1,annual_sal:{$multiply:["$sal",12]}})**
[
  {
    _id: ObjectId('6b03b4e35a980ee49fe24d91'),
    ename: 'smith',
    annual_sal: 9600
  }
]
