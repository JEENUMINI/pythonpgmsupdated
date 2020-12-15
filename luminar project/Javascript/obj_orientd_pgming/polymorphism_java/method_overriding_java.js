class Parent{
    phone(){
        console.log("have nokia5300")
        }
    }
class Child extends Parent{
    phone(){
        console.log("have iphone")
        }
    }
var c=new Child()
c.phone()
//java not support operator over loading