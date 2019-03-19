"use strict";

let costaanName = document.querySelector(".name");
let department = document.querySelector(".department"); 
let counter = 0;

const names = ['Johny English', 'Tom Clancy', 'Harry Potter'];
const departments = ['']
console.log(names);
// console.log(names.length);
costaanName.innerHTML = names[counter];

const nextPerson = () => {
    if (counter > names.length - 2) 
        counter = 0;
    else 
        counter++;
    // console.log(counter);
    costaanName.innerHTML = names[counter];
}

const prevPerson = () => {
    if (counter <= 0) 
        counter = names.length-1;
    else 
        counter--;
    // console.log(counter);
    costaanName.innerHTML = names[counter];
}

document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
        case 39:
        case 68:
            nextPerson();
            break;
        
        case 37:
        case 65:
            prevPerson();
            break;
    }
})
