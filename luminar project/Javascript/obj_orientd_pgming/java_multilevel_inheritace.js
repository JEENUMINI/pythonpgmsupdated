class Parent{
    m1(){
        console.log("m1")
        }
    }
class Child extends Parent{
    m2(){
        console.log("m2")
        }
    }
class SubChild extends Child{
    m3(){
        console.log("m3")
        }
    }
let sb=new SubChild()
sb.m3()
sb.m2()
sb.m1()
let c=new Child()
c.m2()
c.m1()
//c.m3() not possible
let p=new Parent()
p.m1()
//p.m2() not possible
//p.m3() not possible
// java does not support multiple inheritance