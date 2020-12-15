person={name:"ajay",age:25,salary:25000}

console.log(person["name"])
console.log(person["salary"])

person["salary"]+=5000
console.log(person.salary)//(person.salary) or (person["salary"]) both can be use

console.log("gender" in person)// return boolean values

person.gender="male";//person["gender"]="male"
console.log(person)

var text="hello hai hello hai"
var words=text.split(" ")
var dict={}
for(var word of words){
    if(word in dict){
        dict[word]+=1
        }
    else{
        dict[word]=1
        }
    }
console.log(dict)
