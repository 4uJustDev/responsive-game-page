let menu =document.querySelector('#menu-icon')
let navlist =document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

const scrollReveal = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
scrollReveal.reveal('.heroes-text', {delay: 400, origin: 'top'});
scrollReveal.reveal('.hero-one', {delay: 200, origin: 'left'});
scrollReveal.reveal('.hero-two', {delay: 200, origin: 'right'});
