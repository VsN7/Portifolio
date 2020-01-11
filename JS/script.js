const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


const target = document.querySelectorAll('[data-anime]');
const naigation = document.querySelectorAll('[data-target]');
const animationClass = 'animate';
const animationNav = 'animateNav';
let i = 0;
let primeiro = 0;

function animeScroll() {

    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

    target.forEach(function(element) {

        if ((windowTop) > element.offsetTop) {

            if (primeiro == 0) {
                i = windowTop;
                primeiro == 1;
            }
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);


        }
        if (windowTop > 700) {


            naigation.forEach(function(element) {
                element.classList.add(animationNav);

            })
        } else {
            naigation.forEach(function(element) {
                element.classList.remove(animationNav);

            })
        }

    })
}
animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 200));
}

//'nav a[href^="#habilidades"]'
const menuItens = document.querySelectorAll('nav a');
menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const elemento = event.target;
    const id = elemento.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    window.scroll({
        top: to - 80,
        behavior: "smooth"

    });
}