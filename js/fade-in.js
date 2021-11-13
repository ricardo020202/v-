let fadein = document.querySelectorAll(".fade-in");
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < fadein.length; i++){
        let alturaf=fadein[i].offsetTop;
        if (alturaf -500 < scrollTop){
            fadein[i].style.opacity=1;
            fadein[i].classList.add("showFromBelow");
        }
    }
}

let fadeinright = document.querySelectorAll(".fade-in-from-right");
function mostrarScrollRight(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < fadeinright.length; i++){
        let alturaf=fadeinright[i].offsetTop;
        if (alturaf -500 < scrollTop){
            fadeinright[i].style.opacity=1;
            fadeinright[i].classList.add("showFromRight");
        }
    }
}

let fadeinleft = document.querySelectorAll(".fade-in-from-left");
function mostrarScrollLeft(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < fadeinleft.length; i++){
        let alturaf=fadeinleft[i].offsetTop;
        if (alturaf -500 < scrollTop){
            fadeinleft[i].style.opacity=1;
            fadeinleft[i].classList.add("showFromLeft");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);
window.addEventListener('scroll', mostrarScrollRight);
window.addEventListener('scroll', mostrarScrollLeft);