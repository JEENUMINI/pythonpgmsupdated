//class Person{
//    setPerson(age,name){//local variables inside this round bracket
//        this.age=age;//person has these attributes age and name
//        this.name=name;
//    }
//    printPerson(){
//        console.log(this.age);
//        console.log(this.name);
//    }
//
//}
//object
//var obj=new Person();
//obj.setPerson(25,"ajay")
//obj.printPerson()

//instance variables
//setPerson perform intializing instance variables
//consructor duty to intializing instance variables

class Student{
    setStudent(name,rol,total,course)
        {this.name=name;
        this.rol=rol;
        this.total=total;
        this.course=course;
    }
    printStudent(){
        console.log(this.name);
        console.log(this.rol);
        console.log(this.total);
        console.log(this.course);
    }
 }
var obj1=new Student()
obj1.setStudent("alan",02,500,"bca")
obj1.printStudent()