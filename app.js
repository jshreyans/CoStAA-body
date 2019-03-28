let path_list = document.querySelectorAll("path");
let costaanName = document.getElementsByClassName("name")[0];
let departmentName = document.getElementsByClassName("dep")[0];
// let duration = 9;


// --------- Assigning animations to the SVG paths --------------
for (let i = 0; i < path_list.length-2; i++) {
    path_list[i].classList.add(`circle${i}`);
    let elem = document.querySelector(`.circle${i}`);

    elem.style.animation = `rotate ${13 - 0.6*i}s linear infinite`;
    elem.style.animationDelay = `${0.1*i}s`;
    elem.style.transformOrigin = "50% 50%";
}

let ellipse_list = document.querySelectorAll("ellipse");
for (let i = 0; i < ellipse_list.length; i++) {
    ellipse_list[i].classList.add(`ellipse${i}`);
}

// ---------------------- Slideshow logic --------------------------

let costaanDetails = {
    9: {
        name: 'SATYANSH RAI',
        dep: 'President, Student Union',
        image: './costaans/pres.png'
    },
    8: {
        name: 'AAKASH SINGH',
        dep: 'General Secretary, Student Union',
        image: './costaans/gensec.png'
    },
    3: {
        name: 'MEGH THAKKAR',
        dep: 'Department Of Visual Media',
        image: './costaans/dvm.png'
    },
    2: {
        name: 'ANIRUDH SINGLA',
        dep: 'Department of Paper Evaluation and Presentation',
        image: './costaans/pep.png'
    },
    1: {
        name: 'ADITYA PAWAR',
        dep: 'Department of Art, Design and Publicity',
        image: './costaans/adp.png'
    },
    7: {
        name: 'ANUSHKA PATHAK',
        dep: 'Department of Sponsorship and Marketing',
        image: './costaans/spons.png'
    },
    6: {
        name: 'APOORV SAXENA',
        dep: 'Department of Controls',
        image: './costaans/controls.png'
    },
    5: {
        name: 'PARV PANTHARI',
        dep: 'Department of Publication and Correspondence',
        image: './costaans/pcr.png'
    },
    4: {
        name: 'YATHARTH SINGH',
        dep: 'Department of Reception and Accommodation',
        image: './costaans/recnac.png'
    }
}

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

                if(prop == 'name' && i == ar.length-1) 
                    printLetters('dep', index, departmentName);
                if(prop == 'dep' && i == ar.length -1)
                    window.addEventListener("keyup", change);
            }, 80 * i);             
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

    // for (let i=0; i < ar.length; i++) 
    // {
    //     (function(i) {
    //         setTimeout(function() {
    //             // console.log('works');
    //             nameToPrint.getElementsByClassName("created")[i].style.opacity = "1";
    //             nameToPrint.getElementsByClassName("created")[i].style.transform = "scale(1)";
    //         }, 90 * i);             
    //     })(i); 
    // }
    setTimeout(()=> {
        while (nameToRemove.hasChildNodes()) {
            nameToRemove.removeChild(nameToRemove.lastChild);
        }
    },1000)
}
let firstTimeCalled = 1;
let isDisplayRunning = false;

function displayDetails(index) {
    isDisplayRunning = true;
    printLetters('name', index, costaanName);
    // printLetters('dep', index, departmentName);
    firstTimeCalled = 0;
    isDisplayRunning = false;
}
window.addEventListener("keyup", change);

function change(e) {

    let img = document.getElementsByClassName("photo-2")[0]
    let code = e.keyCode; 
    console.log(e);
    let imgURL;

    if (firstTimeCalled && code >= 49 && code <= 57) 
    {
        window.removeEventListener("keyup", change);
        if (!isDisplayRunning)
            displayDetails(code - 48);   
        // document.getElementsByClassName('photo-1')[0].style.animation = "rotate 2s ease-in-out forwards"
        imgURL = costaanDetails[code-48]['image'];
        img.style.opacity = "0";
        img.style.background = `url(${imgURL})`; 
        img.style.backgroundRepeat = "no-repeat";
        img.style.backgroundSize = "cover";
        img.style.backgroundPosition = "center";
        img.style.animation = "fadeIn 1s forwards";

        setTimeout(() => {
            img.style.opacity = "1";
            img.style.animation = "";
            // document.getElementsByClassName('photo-1')[0].style.animation = "rotate 12s linear infinite forwards";
        }, 2000);
        setTimeout(() => {
            // window.addEventListener("keyup", change);            
        }, 3000);
    }

    else if (code >= 49 && code <= 57) {
        // document.getElementsByClassName('photo-1')[0].style.animation = "rotate 1s ease-in-out forwards"
        window.removeEventListener("keyup", change);
        console.log('removed');
        removeLetters(costaanName);
        removeLetters(departmentName);

        setTimeout(() => {
            displayDetails(code - 48);
        }, 1000);

        imgURL = costaanDetails[code-48]['image'];
        img.classList.remove("adder");
        img.classList.add("remove");

        setTimeout(()=> {
            img.classList.remove("remove");
            img.style.background = `url(${imgURL})`; 
            img.style.opacity = "0";
            img.classList.add("adder");
            img.style.backgroundPosition = "center";
            img.style.backgroundRepeat = "no-repeat";
            img.style.backgroundSize = "cover";

            // window.addEventListener("keyup", change);
            img.classList.remove("remove");
        },600);
        setTimeout(() => {
            // window.addEventListener("keyup", change);            
        }, 3000);
    } 
}