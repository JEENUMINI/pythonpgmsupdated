class MyBank{

static getUserData(){
var users={
userone:{username:"userone",password:"userone",acno:1000,balance:5000},
usertwo:{username:"usertwo",password:"usertwo",acno:1001,balance:10000},
userthree:{username:"userthree",password:"userthree",acno:1002,balance:8000},
}
return users}
static login(){
let uname=document.querySelector("#uname").value
let pasword=document.querySelector("#pwd").value
let users=MyBank.getUserData()
if(uname in users){
if(pasword==users[uname]["password"]){
alert("login sucess")
window.location.href="userhome.html"}
else{
alert("invalid password")}
}
else{
alert("there is no user")}
}
static deposit(){
let uname=document.querySelector("#uname").value
let amount=Number(document.querySelector("#amount").value)
var users=MyBank.getUserData()
if(uname in users){
users[uname]["balance"]+=amount
alert(users[uname]["balance"])}
else{
alert("invalid credentials")}}

static withdraw(){
let uname=document.querySelector("#uname").value
let amount=Number(document.querySelector("#amount").value)
var users=MyBank.getUserData()
if(uname in users){
if(amount>users[uname]["balance"]){
alert("insufficient balance")}
else{
users[uname]["balance"]-=amount
alert(users[uname]["balance"])}}
else{
alert("invalid credentials")}
}
























}