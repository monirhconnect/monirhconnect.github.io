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
    const headerNav = document.querySelector('.header__nav');
    const style = getComputedStyle(headerNav);
    const display = style.display;
    const headerContainer = document.querySelector('.header__container');

    if (display === 'none') {
        headerNav.style.display = 'flex';
        headerNav.style.flexDirection = 'column';
        headerContainer.style.boxShadow = '0 .5rem 1rem rgba(0, 0, 0, .2)';
    } else {
        headerNav.style.display = 'none';
    }
});