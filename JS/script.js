



const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    
    target.forEach(function(element){
        
        if((windowTop) > element.offsetTop){
            
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
        
    })
}

animeScroll();

if(target.length){
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 200));
}

//'nav a[href^="#habilidades"]'
const menuItens = document.querySelectorAll('nav a');
menuItens.forEach(item =>{
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event){
    event.preventDefault();
    const elemento = event.target;
    const id = elemento.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    window.scroll({
        top: to - 80,
        behavior: "smooth"
        
    });
}


