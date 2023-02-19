var contout=document.getElementById("container")
var first=document.getElementById("first")
var cont=document.getElementById("inner")
var txt=document.getElementById("txt")
var lbl=document.getElementById("lbl")
txt.style.height="25px"
var btn=document.getElementById("btn")
btn.style.position="relative"
btn.style.left="30px"
lbl.style.position="relative"
lbl.style.right="45px"
btn.style.height="30px"
btn.style.width="80px"
btn.style.color="white"
btn.style.borderStyle="solid"
btn.style.borderWidth="5px"
btn.style.borderColor="blue"
btn.style.backgroundColor="#008080"
btn.style.borderWidth="0px"
btn.style.borderRadius="3px"
contout.style.border="20px"
contout.style.backgroundColor="#E0FFFF"
contout.style.borderStyle="solid"
contout.style.borderColor="#7FFFD4"
contout.style.borderWidth="1px"
contout.style.minHeight="150px"
cont.style.backgroundColor="white"
contout.style.position="relative"
// contout.style.left="40%"
contout.style.top="100px"
contout.style.padding="20px"
contout.style.width="450px"
form.style.position="relative"
form.style.top="10px"
form.style.left="40px"
form.style.padding="60px"
contout.style.position="flex"
contout.style.flexDirection="column"
contout.style.justifyContent="space-between"
var dlt=document.getElementsByClassName("delete");
document.addEventListener("click",del);
function del(e){
let delMark=e.target;
if(delMark.classList.contains("delete")){
let container = delMark.parentElement.parentElement;
container.remove();
localStorage.setItem("i",cont.innerHTML)
}
}
if(localStorage.getItem("i")!=null)cont.innerHTML=localStorage.getItem("i") 
var ind=Number(localStorage.getItem("i"));
function addTask(){
   var newDiv = document.createElement("div");
    var tas=txt.value;
   newDiv.innerHTML=`<div class="first"><div class="tsk">${tas}</div>
        <div class="btns">
            <button type="button" class="done">✓</button>
            <button type="button" class="delete">X</button>
        </div></div>`
   
    cont.insertAdjacentHTML('beforeend', newDiv.innerHTML);
    localStorage.setItem("i",cont.innerHTML)
}
var done=document.getElementsByClassName("done");
document.addEventListener("click",dne);
function dne(e){
let doneMark=e.target;
if(doneMark.classList.contains("done")){
let container = doneMark.parentElement.parentElement;
let taskText = doneMark.parentElement.parentElement.firstElementChild;
if(container.style.backgroundColor!="green"){
    container.style.backgroundColor="green";
    taskText.innerText+= " - Completed";
    }
}
localStorage.setItem("i",cont.innerHTML)
}