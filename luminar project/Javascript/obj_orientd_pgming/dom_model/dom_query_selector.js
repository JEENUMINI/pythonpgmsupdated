let qsl=document.querySelectorAll("li")
for(let tags of qsl){
    tags.style.color="green";}

let hone=document.querySelectorAll("h1")
for(let tags of hone){
    tags.style.color="cyan";}

let htwo=document.querySelector("#hone")
htwo.style.color="red";

let qsa=document.querySelectorAll(".lt")
for(let tags of qsa){
tags.style.color="orange";}

let head=document.querySelector("#hone")

//let data=head.textContent
//alert(data)

head.textContent="WELCOME TO DOM"

let lstem=document.querySelectorAll(".lt")
for(let val of lstem){
    val.textContent="listitem"}

let lsf=document.querySelectorAll(".lt")
for(let val of lsf){
    val.innerHTML="<em>listitem</em>"}



