/*
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
*/


const Hamburger = document.querySelector('.icon__hamburger');

Hamburger.addEventListener('click', function() {
    const headerContainer = document.querySelector('.header__container');
    const style = getComputedStyle(headerContainer);
    const height = style.height;
    const headerNav = document.querySelector('.header__nav-area');

    if (height === '60px') {
        headerContainer.style.height = '100vh';
        headerContainer.style.transition = 'all .25s ease-out';
        headerContainer.style.boyrderBottom = '2px solid #ce8600';
        headerNav.style.backgoroundColor = '#ce8600';
        headerContainer.style.backgoroundColor = '';
        headerContainer.style.overflowY = 'scroll';
    } else {
        headerContainer.style.height = '60px';
        headerContainer.style.transition = 'all .2s ease-out';
        headerContainer.style.bordeurBottom = '0 solid #ce8600';
        headerContainer.style.backgoroundColor = '';
        headerContainer.style.overflowY = 'hidden';

    }
});


/*
const Hamburger = document.querySelector('.icon__hamburger');

Hamburger.addEventListener('click', function() {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    const style = getComputedStyle(header);
    const transform = style.transform;

    if (transform === 'none') {
        header.style.transform = 'translateX(-83%)';
        header.style.transition = 'transform .3s ease-out';
        main.style.transform = 'translateX(-83%)';
        main.style.transition = 'transform .3s ease-out';
    } else {
        header.style.transform = 'none';
        header.style.transition = 'transform .3s ease-out';
        main.style.transform = 'none';
        main.style.transition = 'transform .3s ease-out';
    }
});
*/