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
    const style = getComputedStyle(headerNav);
    const height = style.height;
    const main = document.querySelector('.main');
    const footer = document.querySelector('.footer');

    if (height === '0px') {
        headerNav.style.height = 'fit-content';
        headerNav.style.visibility = 'visible';
        headerNav.style.opacity = 1;
        //main.style.filter = 'blur(1px) brightness(.8) grayscale(.8)';
    } else {
        headerNav.style.height = '0px';
        headerNav.style.visibility = 'hidden';
        headerNav.style.opacity = 0;
        //main.style.filter = '';
    }
});