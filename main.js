const menu_btn = document.querySelector('.nav__menu-button')
let menu_open = false;
menu_btn.addEventListener('click', () => {
    if(!menu_open){
        menu_btn.classList.add('nav__menu__open')
        menu_open = true
    }
    else{
        menu_btn.classList.remove('nav__menu__open')
        menu_open = false
    }
})