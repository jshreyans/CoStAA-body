"use strict";

let costaanName = document.getElementsByClassName("name")[0];
let department = document.getElementsByClassName("department")[0]; 

document.addEventListener("keydown", (e)=> {
    if (e.keyCode == 32) {
        console.log('works');
        document.querySelector(".circles").style.animation = "slide 1s ease forwards";
    }
})
