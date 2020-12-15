
empolyees=[{eid:100,name:"ajay",desig:"devop",join:1981,resign:2003},
		{eid:101,name:"vijay",desig:"devop",join:1992,resign:2008},
		{eid:102,name:"bijoy",desig:"ba",join:1999,resign:2007},
		{eid:103,name:"jhon",desig:"ba",join:1989,resign:2010},
		{eid:104,name:"danie",desig:"qa",join:2009,resign:2014},
		{eid:105,name:"lari",desig:"qa",join:1987,resign:2010}]

//qs1: print all employee name and designation only
for(let emp of empolyees){
console.log(emp.name+","+emp.desig)
}

//qs2:print all employee details whose desig equals devop
var task2=empolyees.filter(emp=>emp.desig=="devop")
console.log(task2)

//qs3:print all employee details those who are woking in 80s  [*(>1980 & <1190)]
var work3=empolyees.filter(emp=>(emp.join>=1980 && emp.join<1990))
console.log(work3)

//qs4:print all employee details those who have experience >9 years
var qs4=empolyees.filter(emp=>emp.resign-emp.join>9)
console.log(qs4)

//qs5:sort all employees based on their joining year
var task5=empolyees.sort((emp1,emp2)=>emp1.join>emp2.join?1:-1)
console.log(task5)

var ta=empolyees.reduce((no1,no2)=>no1.join>no2.join?no1.join:no2.join)
console.log(ta)