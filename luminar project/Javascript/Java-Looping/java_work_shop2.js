//task js pgm
//sample i/p=2 o/p=24(2+22)
//sample i/p=3 o/p=369(3+33+333)
//sample i/p=4 o/p=4936(4+44+444+4444)



var number=3;
var data=0;
total=0;
for(i=0;i<number;i++){
    total=total*10+number;
    data=data+total;
    }
console.log(data)