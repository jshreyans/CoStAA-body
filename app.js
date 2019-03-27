let costaanName = document.getElementsByClassName("name")[0];
let departmentName = document.getElementsByClassName("department")[0]; 

const names = ['Johny English', 'Guido Rossum', 'Harry Potter', 'Linus Torvalds'];
const departments = ['Department of Something', 'Department of Else', 'Something Else', 'Linux Linux'];
let counter = 0;

let costaanDetails = {
    1: {
        name: 'Satyansh Rai',
        dep: 'President',
        image: './costaans/President.png'
    },
    2: {
        name: 'Aakash Singh',
        dep: 'Genreal Secretary',
        image: './costaans/GenSec.png'
    },
    3: {
        name: 'Megh Thakkar',
        dep: 'Department Of Visual Media',
        image: './costaans/DVM.png'
    },
    4: {
        name: 'Anirudh Singla',
        dep: 'Pep',
        image: './costaans/Pep.png'
    },
    5: {
        name: 'Aditya Pawar',
        dep: 'Department of Art, Design and Publicity',
        image: './costaans/adp.png'
    },
    6: {
        name: 'Anushka Pathak',
        dep: 'Department of Sponsorship',
        image: './costaans/spons.png'
    },
    7: {
        name: 'Apoorv Saxena',
        dep: 'Department of Controls',
        image: './costaans/controls.png'
    }
}

// function printLetters(index, arr, nameToPrint) 
// {
// 	let person = arr[index];               
// 	let ar = person.split("");

// 	if(person != null) {
//         for (let i=0; i < ar.length; i++)
//         {
// 			// let element = document.getElementById("element");
//             let span = document.createElement('span');
//             span.innerHTML = ar[i];
//             nameToPrint.appendChild(span);
//             span.style.opacity = 0;
//         }
//         person = null;
// 	}
//     for (let i=0; i < ar.length; i++) 
//     {
//         (function(i) {
//             setTimeout(function() {
//                 // nameToPrint.getElementsByTagName('span')[i].style.opacity = 1;
//                 nameToPrint.getElementsByTagName('span')[i].classList.add("scale-letter");
//             }, 90 * i);             
//         })(i); 
//     }
// }

function printLetters(prop, index, nameToPrint) 
{
    // let person;
    // if (prop === name) 
    //     person = costaanDetails[index]['name'];       
    // else if (prop === dep)
    //     person = costaanDetails[index]['dep'];  
    let person = costaanDetails[index][prop];

	let ar = person.split("");

	if(person != null) {
        for (let i=0; i < ar.length; i++)
        {
			// let element = document.getElementById("element");
            let div = document.createElement('div');
            div.classList.add("created");
            if (ar[i] == " ") 
                div.innerHTML = "&nbsp;"
            else
                div.innerHTML = ar[i];
            nameToPrint.appendChild(div);
            div.style.opacity = 0;
        }
        person = null;
	}
    for (let i=0; i < ar.length; i++) 
    {
        (function(i) {
            setTimeout(function() {
                // console.log('works');
                nameToPrint.getElementsByClassName("created")[i].style.opacity = "1";
                nameToPrint.getElementsByClassName("created")[i].style.transform = "scale(1)";
            }, 90 * i);             
        })(i); 
    }
}

function removeLetters(nameToRemove) 
{
    // console.log('remove called');
    let indicator = 1;
    for (let i=0; i <= nameToRemove.childElementCount - 1; i++) {
        console.log("removing");
        nameToRemove.children[i].style.opacity = "0";
        indicator = 0;
    }
    setTimeout(()=> {
        while (nameToRemove.hasChildNodes()) {
            nameToRemove.removeChild(nameToRemove.lastChild);
        }
    },2000)
}

function addAnimation() {
    document.getElementsByClassName("th")[0].classList.remove("collapse");
    document.getElementsByClassName("outer-circle")[0].classList.add("animate-outer-circle");
    document.getElementsByClassName("inner-circle")[0].classList.add("animate-inner-circle");
    document.getElementsByClassName("innermost")[0].classList.add("animate-innermost");
    document.getElementsByClassName("rotator-1")[0].classList.add("animate-rotator");        
    // document.querySelector(".circles").style.animation = "slide 1s forwards";
} 

// function removeAnimation() {
//     document.getElementsByClassName("outer-circle")[0].classList.remove("animate-outer-circle");
//     document.getElementsByClassName("inner-circle")[0].classList.remove("animate-inner-circle");
//     document.getElementsByClassName("innermost")[0].classList.remove("animate-innermost");
//     document.getElementsByClassName("rotator-1")[0].classList.remove("animate-rotator");
//     document.getElementsByClassName("th")[0].classList.add("collapse");
// }

let firstTimeCalled = 0;

function displayDetailsFirst(index) {
    document.querySelector(".circles").style.animation = "slideRight 1s forwards";
    document.querySelector(".nameBox").style.animation = "open 1s forwards";
    setTimeout(()=>{
        printLetters('name', index, costaanName);
    },1000)
    setTimeout(() => {
        printLetters('dep', index, departmentName);
    },2000)
    // setTimeout(()=> {removeAnimation()},3000)
    firstTimeCalled = 1;
}

function displayDetails(index) {
    removeLetters(costaanName);
    removeLetters(departmentName);
    // addAnimation();
    // while (costaanName.hasChildNodes()) {
    //     costaanName.removeChild(costaanName.lastChild);
    // }
    // while (departmentName.hasChildNodes()) {
    //     departmentName.removeChild(departmentName.lastChild);
    // }

    setTimeout(() => {
        document.querySelector(".circles").style.animation = "slideLeft 1s forwards";
        document.querySelector(".nameBox").style.animation = "close 1s forwards";
    },1000)
    
    setTimeout(() => {
        document.querySelector(".circles").style.animation = "slideRight 1s forwards"; 
        document.querySelector(".nameBox").style.animation = "open 1s forwards";
    },2500);
    
    setTimeout(()=>{
        printLetters('name', index, costaanName);
    },3500)
    setTimeout(() => {
        printLetters('dep', index, departmentName);
    },4500)
    // setTimeout(()=>{removeAnimation()},5500)
}

// window.onload(addAnimation());   
document.addEventListener("keydown", (e)=> {
    let code = e.keyCode; 
    let imgURL;
    if (!firstTimeCalled && code >= 49 && code <= 57) {
        displayDetailsFirst(code - 48);
        imgURL = costaanDetails[code-48]['image'];
        document.getElementsByClassName("image")[0].style.background = `url(${imgURL})`; 
    }

    else if (code >= 49 && code <= 57) {
        displayDetails(code - 48);
        imgURL = costaanDetails[code-48]['image'];
        document.getElementsByClassName("image")[0].style.background = `url(${imgURL})`; 
    } 
})
let coun = 0;
document.addEventListener("keydown", (e)=> {
    if (e.keyCode == 32) {
        
        if (!coun) {
            document.getElementsByClassName("close-box")[0].style.animation = "expand-box 2s forwards";
            coun = 1;
        }
        else {
            document.getElementsByClassName("close-box")[0].style.animation = "close-box 2s forwards";
            coun = 0;
        }
    }
})