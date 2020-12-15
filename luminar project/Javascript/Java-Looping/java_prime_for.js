var num=Number(prompt("enter value"))
var flag=0
for(var i=2;i<num;i++)
    {if(num%i==0){
    flag++;
    break;}
    else{
    flag=0;}
}
if(flag==0){
alert("prime")
}
else{
alert("not prime")
}