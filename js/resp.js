burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navlist = document.querySelector('.navlist')



burger.addEventListener('click', () => {
    rightNav.classList.toggle('visibility-class');
    navlist.classList.toggle('visibility-class');
    navbar.classList.toggle('height-nav')
})
