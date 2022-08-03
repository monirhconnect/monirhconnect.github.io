const navBtn = document.querySelector('.header__nav-item--button');
const navListSub = document.querySelector('.header__nav-list-sub');

function navDropDown() {
    navListSub.style.opacity = 1;
    navListSub.style.visibility = 'visible';
    navListSub.style.transform = 'translateY(1.4rem)';
    navBtn.style.padding = '1.2rem 1.5rem 1.2rem .3rem';
}
navBtn.addEventListener('mouseover', navDropDown);
navListSub.addEventListener('mouseover', navDropDown);


function navClose() {
    navListSub.style.opacity = 0;
    navListSub.style.visibility = 'hidden';
    navListSub.style.transform = 'translateY(-1.4rem)';
    navBtn.style.padding = '.1rem 1.5rem .1rem .3rem';
}
navBtn.addEventListener('mouseleave', navClose);
navListSub.addEventListener('mouseleave', navClose);



const Hamburger = document.querySelector('.icon__hamburger');

Hamburger.addEventListener('click', function() {
    const headerNav = document.querySelector('.header__nav-area');
    const header = document.querySelector('.header');
    const headerContainer = document.querySelector('.header__container');
    const style = getComputedStyle(headerContainer);
    const height = style.height;
    const main = document.querySelector('.main');
    const footer = document.querySelector('.footer');

    if (height === '60px') {
        headerContainer.style.height = '75vh';
        headerContainer.style.transition = 'all .25s ease-out';
        headerContainer.style.borderBottom = '60vh solid #ce8600';
        main.style.filter = 'brightness(.85)';
    } else {
        headerContainer.style.height = '60px';
        headerContainer.style.transition = 'all .2s ease-out';
        headerContainer.style.borderBottom = '0 solid #ce8600';
        main.style.filter = 'none';
    }
});