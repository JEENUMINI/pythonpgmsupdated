var num2
var num
var num1
class MathsPg{
    add(){
        console.log("no arg method")
        }
    add(num)
        {console.log("single arg method")
        }
    add(num1,num2){
        console.log("two arg method")
        }
    }
var obj=new MathsPg()
obj.add()
obj.add(num)
obj.add(num1,num2)

