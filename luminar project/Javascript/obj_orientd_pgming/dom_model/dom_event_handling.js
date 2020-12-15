let clk=document.querySelector("#clk")
function clickedFn(){
clk.style.color="red";
clk.textContent="Clicked on"
}
clk.addEventListener("click",clickedFn)


let dbl=document.getElementById("dbl")
dbl.addEventListener("dblclick",()=>{
dbl.style.color="green";
dbl.textContent="dblclicked"
})

//let dbl=document.querySelector("#dbl")
//function doubleFn(){
//dbl.style.color="green";
//dbl.textContent="dbl clicked"
//}
//dbl.addEventListener("dblclick",doubleFn)

let hov=document.querySelector("#hov")
hov.addEventListener("mouseover",()=>{
hov.textContent="mouseoverme";
hov.style.color="cyan";
})

hov.addEventListener("mouseout",()=>{
hov.textContent="mouse not over me";
hov.style.color="red";
})



