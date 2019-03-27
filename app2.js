let path_list = document.querySelectorAll("path");
// let duration = 9;
for (let i = 0; i < path_list.length; i++) {
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