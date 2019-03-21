"use strict";

let costaanName = document.getElementsByClassName("name")[0];
let department = document.getElementsByClassName("department")[0]; 
// let counter = 0;

// const names = ['Johny English', 'Tom Clancy', 'Harry Potter'];
// const departmentNames = ['Department of Something', 'Department of Else', 'Department of that']
// console.log(names);
// // console.log(names.length);
// costaanName.innerHTML = names[counter];
// department.innerHTML = departmentNames[counter];

// const nextPerson = () => {
//     if (counter > names.length - 2) 
//         counter = 0;
//     else 
//         counter++;
//     // console.log(counter);
//     costaanName.innerHTML = names[counter];
//     department.innerHTML = departmentNames[counter];
// }

// const prevPerson = () => {
//     if (counter <= 0) 
//         counter = names.length-1;
//     else 
//         counter--;
//     // console.log(counter);
//     costaanName.innerHTML = names[counter];
//     department.innerHTML = departmentNames[counter];
// }

// document.addEventListener("keydown", (e) => {
//     switch (e.keyCode) {
//         case 39:
//         case 68:
//             nextPerson();
//             break;
        
//         case 37:
//         case 65:
//             prevPerson();
//             break;
//     }
// })
let spacePressed = 0
document.addEventListener("keydown", (e)=>{
    if (e.keyCode == 32) {
        if (spacePressed == 0) {
            document.querySelector(".text-circle").classList.remove("slide-right");
            document.querySelector(".text-circle").classList.add("slide-left");

            setTimeout(()=>{
                costaanName.style.display = "block";
                department.style.display = "block";
            }, 500)

            document.getElementsByClassName("container")[0].classList.add("show-text");
            document.getElementsByClassName("container")[0].classList.remove("hide-text");
            spacePressed = 1;
        }
        else {
            document.querySelector(".text-circle").classList.remove("slide-left");
            document.querySelector(".text-circle").classList.add("slide-right");

        
            costaanName.style.display = "none";
            department.style.display = "none";

            document.getElementsByClassName("container")[0].classList.add("hide-text");
            document.getElementsByClassName("container")[0].classList.remove("show-text");
            spacePressed = 0;
        }
    }
})
