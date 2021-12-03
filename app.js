// ==================MOBILE MENU====================

const hamberger_icon=document.getElementsByClassName('menu-hamberger-icon');
const cross_icon=document.getElementsByClassName('menu-cross-icon');
const mobile_menu_side_background=document.getElementsByClassName('mobile-menu-side-background');

function mobile_menu_appear(){
    mobile_menu_side_background[0].classList.add("mobile-menu-side-background-active");
}
hamberger_icon[0].addEventListener("click",mobile_menu_appear);
function mobile_menu_disappear()
{
    mobile_menu_side_background[0].classList.remove("mobile-menu-side-background-active");
}
cross_icon[0].addEventListener("click",mobile_menu_disappear);


// ====================Main Image part slider==================
const main_image=document.getElementsByClassName("main-image");
const thumbnail_image=document.getElementsByClassName("thumbnail-image");

function slide_show(x)
{
        x.classList.add("thumbnail-image-hover");
        for(j=0;i<thumbnail_image.length;j++)
        {
        if (thumbnail_image.indexOf(x)==j)
        continue;
        thumbnail_image[j].classList.remove("thumbnail-image-hover");
        }

        let i=thumbnail_image.indexOf(x);
        main_image[i].style.display="block";
        for(g in main_image)
        {   if(main_image(indexOf(g)==i))
            continue;
            g.style.display="none";
        }
        
}

thumbnail_image.forEach(x => x.addEventListener("onclick",slide_show(x)));
