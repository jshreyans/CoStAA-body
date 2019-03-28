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
    1: {
        name: 'Satyansh Rai',
        dep: 'President, SU',
        image: './costaans/pres.png'
    },
    2: {
        name: 'Aakash Singh',
        dep: 'General Secretary, SU',
        image: './costaans/gensec.png'
    },
    3: {
        name: 'Megh Thakkar',
        dep: 'Department Of Visual Media',
        image: './costaans/dvm.png'
    },
    4: {
        name: 'Anirudh Singla',
        dep: 'Department of Paper Evaluation and Presentation',
        image: './costaans/pep.png'
    },
    5: {
        name: 'Aditya Pawar',
        dep: 'Department of Art, Design and Publicity',
        image: './costaans/adp.png'
    },
    6: {
        name: 'Anushka Pathak',
        dep: 'Department of Sponsorship and Marketing',
        image: './costaans/spons.png'
    },
    7: {
        name: 'Apoorv Saxena',
        dep: 'Department of Controls',
        image: './costaans/controls.png'
    },
    8: {
        name: 'Parv Panthari',
        dep: 'Department of Publication and Correspondence',
        image: './costaans/pcr.png'
    },
    9: {
        name: 'Yatharth Singh',
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
document.addEventListener("keydown", change);

function change(e) {

    let img = document.getElementsByClassName("photo-2")[0]
    let code = e.keyCode; 
    // console.log(e);
    let imgURL;

    if (firstTimeCalled && code >= 49 && code <= 57) 
    {
        // document.removeEventListener("keydown", change);
        if (!isDisplayRunning)
            displayDetails(code - 48);   
        // document.getElementsByClassName('photo-1')[0].style.animation = "rotate 2s ease-in-out forwards"
        imgURL = costaanDetails[code-48]['image'];
        img.style.opacity = "0";
        img.style.background = `url(${imgURL})`; 
        img.style.backgroundRepeat = "no-repeat";
        img.style.backgroundPosition = "center";
        img.style.animation = "fadeIn 1s forwards";

        setTimeout(() => {
            img.style.opacity = "1";
            img.style.animation = "";
            document.addEventListener("keydown", change);
            // document.getElementsByClassName('photo-1')[0].style.animation = "rotate 12s linear infinite forwards";
        }, 2000);
    }

    else if (code >= 49 && code <= 57) {
        // document.getElementsByClassName('photo-1')[0].style.animation = "rotate 1s ease-in-out forwards"
        document.removeEventListener("keydown", change);

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
            document.addEventListener("keydown", change);
            img.classList.remove("remove");
        },600);
    } 
}