const hamberger_icon=document.getElementsByClassName('menu-hamberger-icon');
const cross_icon=document.getElementsByClassName('menu-cross-icon');
const mobile_menu_side_background=document.getElementsByClassName('mobile-menu-side-background');

function mobile_menu_appear(){
    mobile_menu_side_background[0].classList.add("mobile-menu-side-background-active");
}
hamberger_icon[0].addEventListener("click",mobile_menu_appear);