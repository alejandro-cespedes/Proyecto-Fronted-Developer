const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenu = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.my-order')



menuEmail.addEventListener('mouseover', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() 
{
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside()
{
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}


