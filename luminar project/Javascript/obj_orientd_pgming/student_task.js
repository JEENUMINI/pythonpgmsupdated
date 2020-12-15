class Student{
    constructor(rol,name,total,course){
        this.rol=rol;
        this.name=name;
        this.total=total;
        this.course=course;
    }
    printStudent(){
        console.log(this.rol);
        console.log(this.name);
        console.log(this.total);
        console.log(this.course);
    }

    }


var obj1=new Student(01,"ajay",300,"mca");
var obj2=new Student(02,"vjay",600,"bca");
var obj3=new Student(03,"anju",350,"bca");
var obj4=new Student(04,"arun",130,"mba");
var obj5=new Student(05,"binu",500,"bca");
//obj1.printStudent()
//obj2.printStudent()
//obj3.printStudent()
//obj4.printStudent()
//obj5.printStudent()
var arr=[]
arr[0]=obj1
arr[1]=obj2
arr[2]=obj3
arr[3]=obj4
arr[4]=obj5
console.log(arr)

//print student whose course=bca

var task1=arr.filter(objects=>objects.course=="bca")
for(objects of task1){
console.log(objects.name)}

//print students whose total>135

var task2=arr.filter(objects=>objects.total>135)
for(objects of task2){
console.log(objects.name)}

//find highest total

var task3=arr.map(obj=>obj.total).reduce((objects1,objects2)=>objects1>objects2?objects1:objects2)
console.log(task3)


//find sum of total

var task4=arr.map(obj=>obj.total).reduce((objects1,objects2)=>objects1+objects2)
console.log(task4)



//sort all students with their total

var task5=arr.sort((objects1,objects2)=>objects1.total>objects2.total?1:-1)
console.log(task5)

