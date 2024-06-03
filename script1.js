"use strict";
const b=document.getElementById("button");
let answear;
b.addEventListener("click",()=>{
    answear=document.getElementById("answear").value;
    if(answear=="Для бізнесу"){
        let p=document.getElementById("p").value="Добре, отримати його ви можете в банку чи у банкоматі";
        document.getElementById("p").innerHTML=p;
    }
})
b.addEventListener("click",()=>{
    answear=document.getElementById("answear").value;
    if(answear=="Для недвіжемості"){
        let p=document.getElementById("p").value="Добре, отримати його ви можете в банку чи у банкоматі";
        document.getElementById("p").innerHTML=p;
    }
})