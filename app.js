const hamberger_icon=document.getElementsByClassName('menu-hamberger-icon');
const cross_icon=document.getElementsByClassName('menu-cross-icon');
const mobile_menu_side_background=document.getElementsByClassName('mobile-menu-side-background');
const mobile_menu=document.getElementsByClassName('main-menu');

function mobile_menu_appear(){
    mobile_menu_side_background.classList.add("mobile-menu-side-background-active");
}
hamberger_icon[0].addEventListener(onclick,mobile_menu_appear);