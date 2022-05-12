/* --------------- Grab elements from DOM --------------- */

const cabeça = document.querySelector("header");

const skill_primeira = document.querySelector(".skill:first-child");
const contadors = document.querySelectorAll(".contador span");
const barra =  document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll", ()=>{
    skillsConters();
})

/* --------------- Sticky Navbar --------------- */

function stickyNavbar(){
    cabeça.classList.toggle("rolada", window.scrollY > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);


/* --------------- Reveal Animation --------------- */

let rolagem = ScrollReveal({
    duration: 2000,
    distance: "60px",
});

rolagem.reveal(".showcase-info", {delay: 500});
rolagem.reveal(".showcase-image", {origin: "top", delay: 600});


/* --------------- Skills Progress Bar Animation --------------- */



function hasRached(el){
    let topPosition = el.getBoundingClientRect().top;

    if(window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
}


function updateContador(num, maxNum){
    let currentNum = +num.innerText;

    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateContador(num, maxNum)
        }, 12 )
    }
}

function skillsConters(){
    if(!hasRached(skill_primeira)) return;

    contadors.forEach((contador, i) => {
        let target = +contador.dataset.target;
        let strokeValue = 427 - 427 *(target / 100);

        barra[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
            updateContador(contador, target);
        },400);
    })
    
    barra.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards"))

}

/* --------------- Services Counter Animation --------------- */

/* --------------- Portfolio Filter Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */
