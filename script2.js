"use strict";
const b=document.getElementById("button");
let answear;
b.addEventListener("click",()=>{
    answear=document.getElementById("answear").value;
    if(answear=="10%"){
        let p=document.getElementById("p").value="Дякуємо за використання нашої фірми!";
        document.getElementById("p").innerHTML=p;
    }
})
b.addEventListener("click",()=>{
    answear=document.getElementById("answear").value;
    if(answear=="100%"){
        let p=document.getElementById("p").value="Дякуємо за використання нашої фірми!";
        document.getElementById("p").innerHTML=p;
    }
})
b.addEventListener("click",()=>{
    answear=document.getElementById("answear").value;
    if(answear=="1000%"){
        let p=document.getElementById("p").value="Дякуємо за використання нашої фірми!";
        document.getElementById("p").innerHTML=p;
    }
})