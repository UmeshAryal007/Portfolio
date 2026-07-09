const reveals = document.querySelectorAll(
".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);

function revealElements(){

    reveals.forEach(element=>{

        const windowHeight = window.innerHeight;

        const top = element.getBoundingClientRect().top;

        const visible = 120;

        if(top < windowHeight - visible){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);