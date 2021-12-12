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
const main_image=document.getElementsByClassName('main-image');
const thumbnail_image=document.getElementsByClassName('thumbnail-image-inner');
const thumbnail_image_outer=document.getElementsByClassName("thumbnail-image");
function slide_show(x)
{
        for(let j=0;j<thumbnail_image.length;j++)
        {
        if (thumbnail_image[j]==x)
        {
            main_image[j].classList.add("check");
            thumbnail_image_outer[j].classList.add("thumbnail-image-outer-hover");
            x.classList.add("thumbnail-image-hover");
            continue;
        }
        thumbnail_image[j].classList.remove("thumbnail-image-hover");
        main_image[j].classList.remove("check");
        thumbnail_image_outer[j].classList.remove("thumbnail-image-outer-hover");
        }        
}

for(let i=0;i<thumbnail_image.length;i++)
{
    thumbnail_image[i].addEventListener("click",()=>slide_show(thumbnail_image[i]));
}

// ===============PRODUCT COUNTER AND CART HEADER ACTIVATIONS=========================

const product_plus=document.querySelector(".product-plus");
const product_minus=document.querySelector(".product-minus");
const product_count=document.querySelector(".product-count");
const cart_count_icon=document.querySelector(".cart-count-icon");
const cart_pop_filled_text=document.querySelector('.cart-pop-filled-text');
const cart_pop_empty_text=document.querySelector('.cart-pop-empty-text');
const cart_pop_product_name=document.querySelector('.cart-pop-product-name');
const cart_pop_product_price=document.querySelector('.cart-pop-product-price');
const cart_pop_product_count=document.querySelector('.cart-pop-product-count');
const cart_pop_product_total=document.querySelector('.cart-pop-product-total');

product_plus.addEventListener("click",()=>{
let count=parseInt(product_count.innerHTML);
count++;
// ========product-count count change
product_count.innerHTML=count.toString();
// ========cart pop content switching
cart_pop_filled_text.classList.remove('cart-pop-filled-text-hide');
cart_pop_empty_text.classList.add('cart-pop-empty-text-hide');
// ========cart-pop-filled-text content change
cart_pop_product_name.innerHTML=document.querySelector('.product-main-heading').innerHTML;
cart_pop_product_price.innerHTML=document.querySelector('.current-price').innerHTML+' x ';
cart_pop_product_name.innerHTML=document.querySelector('.product-main-heading').innerHTML;
cart_pop_product_count.innerHTML=document.querySelector('.product-count').innerHTML;
let product_count_Int=parseFloat(document.querySelector('.product-count').innerHTML);
let product_price_Int=parseFloat((document.querySelector('.current-price').innerHTML).slice(1,));
let total_Int=product_count_Int*product_price_Int;
cart_pop_product_total.innerHTML="$"+total_Int.toString()+".00";
//========cart pop icon display
cart_count_icon.style.visibility="visible";
// =======cart pop icon count 
cart_count_icon.innerHTML=product_count.innerHTML;
});
product_minus.addEventListener("click",()=>{
let count=parseInt(product_count.innerHTML);
if(count==0)
{
// ========cart pop content switching
cart_pop_filled_text.classList.add('cart-pop-filled-text-hide');
cart_pop_empty_text.classList.remove('cart-pop-empty-text-hide');
//========cart pop icon display
cart_count_icon.style.visibility="hidden";
return;
}
count--;
if(count==0)
{
// ========cart pop content switching
cart_pop_filled_text.classList.add('cart-pop-filled-text-hide');
cart_pop_empty_text.classList.remove('cart-pop-empty-text-hide');
// ========product-count count change
product_count.innerHTML=count.toString();
//========cart pop icon display
cart_count_icon.style.visibility="hidden";
// =======cart pop icon count 
cart_count_icon.innerHTML=product_count.innerHTML;
return;
}
// ========cart pop content switching
cart_pop_filled_text.classList.remove('cart-pop-filled-text-hide');
cart_pop_empty_text.classList.add('cart-pop-empty-text-hide');
// ========product-count count change
product_count.innerHTML=count.toString();
//========cart pop icon display
cart_count_icon.style.visibility="visible";
// =======cart pop icon count 
cart_count_icon.innerHTML=product_count.innerHTML;
});

// ======================HEADER-CART POP==================
const cart=document.querySelector('.cart');
const cart_pop=document.querySelector('.cart-pop');
cart.addEventListener("click",()=>cart_pop.classList.toggle('cart-pop-hide'));

// ======================CART POP FILLED TEXT ON PRESSING BIN==
const cart_pop_bin=document.querySelector('.cart-pop-bin');
cart_pop_bin.addEventListener("click",()=>{
    cart_pop_filled_text.classList.add ('cart-pop-filled-text-hide');
cart_pop_empty_text.classList.remove('cart-pop-empty-text-hide');
product_count.innerHTML="0";
cart_count_icon.style.visibility="hidden";
});

// ==================lightbox===============
const main_image_part=document.querySelector(".main-image-part");
const light_box_background=document.querySelector('.light-box-background');
main_image_part.addEventListener("click",()=>{
    light_box_background.style.visibility="visible";
})
const light_box_cross_icon=document.querySelector(".light-box-cross-icon");
light_box_cross_icon.addEventListener("click",()=>{
    light_box_background.style.visibility="hidden";
});

const light_box_main_image=document.getElementsByClassName('light-box-main-image');
const light_box_thumbnail_image=document.getElementsByClassName('light-box-thumbnail-image-inner');
const light_box_thumbnail_image_outer=document.getElementsByClassName("light-box-thumbnail-image");
function light_box_slide_show(x)
{
        for(let j=0;j<light_box_thumbnail_image.length;j++)
        {
        if (light_box_thumbnail_image[j]==x)
        {
            light_box_main_image[j].classList.add("check");
            light_box_thumbnail_image_outer[j].classList.add("light-box-thumbnail-image-outer-hover");
            x.classList.add("light-box-thumbnail-image-hover");
            continue;
        }
        light_box_thumbnail_image[j].classList.remove("light-box-thumbnail-image-hover");
        light_box_main_image[j].classList.remove("check");
        light_box_thumbnail_image_outer[j].classList.remove("light-box-thumbnail-image-outer-hover");
        }        
}

for(let i=0;i<light_box_thumbnail_image.length;i++)
{
    light_box_thumbnail_image[i].addEventListener("click",()=>light_box_slide_show(light_box_thumbnail_image[i]));
}

const light_box_slider_left=document.querySelector(".light-box-slider-left");
const light_box_slider_right=document.querySelector(".light-box-slider-right");

function light_box_slider(n){
    for(let i=0;i<light_box_main_image.length;i++)
    {
        if (light_box_main_image[i].classList.contains("check")==true)
        {
            n=n+i;
            if(n<0)
            light_box_slide_show(light_box_thumbnail_image[light_box_main_image.length-1])
            else if(n>=light_box_main_image.length)
            light_box_slide_show(light_box_thumbnail_image[0]); 
            else
            light_box_slide_show(light_box_thumbnail_image[n]);          
            break;        
        }
    }
}
light_box_slider_left.addEventListener("click",()=>light_box_slider(-1));
light_box_slider_right.addEventListener("click",()=>light_box_slider(1));

// ===================product image slider for mobile=================
const mobile_slider_left=document.querySelector(".mobile-slider-left");
const mobile_slider_right=document.querySelector(".mobile-slider-right");
const mobile_main_image=document.querySelectorAll(".mobile-main-image");

function mobile_slider(n)
{
    for(let i=0;i<mobile_main_image.length;i++)
    {
        if(mobile_main_image[i].classList.contains("check")==true)
        {
            n=n+i;
            mobile_main_image[i].classList.remove("check");
            if(n<0)
            mobile_main_image[mobile_main_image.length-1].classList.add("check");
            else if(n>=mobile_main_image.length)
            mobile_main_image[0].classList.add("check"); 
            else
            mobile_main_image[n].classList.add("check");          
            break;
        }
    }   
}
mobile_slider_left.addEventListener("click",()=>mobile_slider(-1));
mobile_slider_right.addEventListener("click",()=>mobile_slider(1));
