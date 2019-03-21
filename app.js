let costaanName = document.getElementsByClassName("name")[0];
let departmentName = document.getElementsByClassName("department")[0]; 

const names = ['Johny English'];
const departments = ['Department of Something'];

function printLetters(index, arr, nameToPrint) 
{
	let person = arr[index];               
	let ar = person.split("");

	if(person != null) {
        for (let i=0; i < ar.length; i++)
        {
			// let element = document.getElementById("element");
            let span = document.createElement('span');
            span.innerHTML = ar[i];
            nameToPrint.appendChild(span);
            span.style.opacity = 0;
        }
        person = null;
	}
    for (let i=0; i < ar.length; i++) 
    {
        (function(i) {
            setTimeout(function() {
                document.getElementsByTagName('span')[i].style.opacity = 1;
            }, 90 * i);             
        })(i); 
    }
}

document.addEventListener("keydown", (e)=> {
    if (e.keyCode == 32) {
        console.log('works');
        document.querySelector(".circles").style.animation = "slide 1s ease forwards";
    }
    // setTimeout()
    else if (e.keyCode == 65) {
        printLetters(0, names, costaanName);
        printLetters(0, departments, departmentName);
    }
})
