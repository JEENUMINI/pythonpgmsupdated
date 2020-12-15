var arr=[2,3,8,4,10,5,6]

var squares=arr.map(num=>num**2)
console.log(squares)

var evens=arr.filter(num=>num%2==0)
console.log(evens)

var sorted=arr.sort((num1,num2)=>num1-num2)//ascending order=num1-num2
console.log(sorted)

var sorted=arr.sort((num1,num2)=>num2-num1)//descending order=num2-num1
console.log(sorted)

//reduce
var total=arr.reduce((num1,num2)=>num1+num2)
console.log(total)

var maximum=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(maximum)

var minimum=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(minimum)