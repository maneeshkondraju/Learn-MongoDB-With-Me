# Day-4
product> **db.emp.find({},{ename:1,salary:"$sal",_id:0})**
[
  { ename: 'smith', salary: 800 },
  { ename: 'allen', salary: 1600 },
  { ename: 'ward', salary: 1250 },
  { ename: 'jones', salary: 2975 }
]--------------------------------------------------------------------------------------------
product> **db.emp.find({},{employee_name:"$ename",join_date:"$hiredate",_id:0})**
[
  {
    employee_name: 'smith',
    join_date: ISODate('1980-12-17T00:00:00.000Z')
  }]-------------------------------------------------------------------------------------------------
product> **db.emp.find({},{emp_id:"$empno",ename:1,designation:"$job",_id:0})**
[
  { ename: 'smith', emp_id: 7369, designation: 'clerk' },
  { ename: 'allen', emp_id: 7499, designation: 'salesman' },
  { ename: 'ward', emp_id: 7521, designation: 'salesman' }
  ]-------------------------------------------------------------------------------------------------
product> **db.emp.find({},{ename:1,salary:{$add:[100,"$sal"]},_id:0})**
[
  { ename: 'smith', salary: 900 },
  { ename: 'allen', salary: 1700 },
  { ename: 'ward', salary: 1350 }
  ]-------------------------------------------------------------------------------------------------
product> **db.emp.find({},{ename:1,bonus_sal:{$add:[100,"$sal"]},_id:0,sal:1})**
[
  { ename: 'smith', sal: 800, bonus_sal: 900 },
  { ename: 'allen', sal: 1600, bonus_sal: 1700 },
  { ename: 'ward', sal: 1250, bonus_sal: 1350 },
  { ename: 'jones', sal: 2975, bonus_sal: 3075 }
  ]-------------------------------------------------------------------------------------------------
product>  **db.emp.find({},{ename:1,_id:0,salary:{$add:[10,20,30]}})**
[
  { ename: 'smith', salary: 60 },
  { ename: 'allen', salary: 60 },
  { ename: 'ward', salary: 60 }
  ]-------------------------------------------------------------------------------------------------
product>  **db.emp.find({},{ename:1,salary:{$subtract:["$sal",100]},_id:0})**
[
  { ename: 'smith', salary: 700 },
  { ename: 'allen', salary: 1500 },
  { ename: 'ward', salary: 1150 }
  ]---------------------------------------------------------------------------------------------------
product> **db.emp.find({},{ename:1,annual_salary:{$multiply:["$sal",12]},_id:0,sal:1})**
[
  { ename: 'smith', sal: 800, annual_salary: 9600 },
  { ename: 'allen', sal: 1600, annual_salary: 19200 },
  { ename: 'ward', sal: 1250, annual_salary: 15000 },
  { ename: 'jones', sal: 2975, annual_salary: 35700 }
  ]---------------------------------------------------------------------------------------------------
product> **db.emp.find({},{ename:1,half_salary:{$divide:["$sal",2]},_id:0})**
[
  { ename: 'smith', half_salary: 400 },
  { ename: 'allen', half_salary: 800 },
  { ename: 'ward', half_salary: 625 },
  { ename: 'jones', half_salary: 1487.5 }
  ]--------------------------------------------------------------------------------------------------
product> **db.emp.find({},{bonus_salary:{$add:["$sal",2000]},ename:1,job:1,mgr:1,empno:1,hiredate:1,comm:1,deptno:1,sal:1})**
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
    deptno: 20,
    bonus_salary: 2800
  }]-------------------------------------------------------------------------------------------------
product> **db.emp.find({},{bonus_sal:{$add:["$sal",{$multiply:["$sal",0.1]}]},_id:0,sal:1})**
[
  { sal: 800, bonus_sal: 880 },
  { sal: 1600, bonus_sal: 1760 }
]------------------------------------------------------------------------------------------------
product> **db.emp.find({},{annual_salary:{$multiply:["$sal",12]},ename:1,job:1,mgr:1,empno:1,hiredate:1,comm:1,deptno:1,sal:1})**
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
    deptno: 20,
    annual_salary: 9600
  }]--------------------------------------------------------------------------------------------------
product> **db.emp.find({},{ename:1,job:1,_id:0, penalty:{$subtract:["$sal",100]}})**
[
  { ename: 'smith', job: 'clerk', penalty: 700 },
  { ename: 'allen', job: 'salesman', penalty: 1500 },
  { ename: 'ward', job: 'salesman', penalty: 1150 },
  { ename: 'jones', job: 'manager', penalty: 2875 }
  ]--------------------------------------------------------------------------------------------------
