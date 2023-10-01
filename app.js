const nav=document.querySelector('nav');
window.addEventListener('scroll',scrollNavi);
function scrollNavi(){
    nav.classList.toggle('newNav',window.scrollY>120);
}
const togg=document.querySelector('.nav-toggler');
const menu=document.querySelector('.navbar-menu');
togg.addEventListener('click',()=>{
    menu.classList.toggle('showmenu');
});


const toTop=document.querySelector('.go-top');
toTop.addEventListener('click',()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
});



/*============================================================================*/
window.addEventListener('scroll',reveal);
function reveal(){
    var reveals=document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++)
    {
    var windowheight=window.innerHeight;
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealpoint=150;
    if(revealtop<windowheight-revealpoint){
        reveals[i].classList.add('reveal-active');
    }
    else{
        reveals[i].classList.remove('reveal-active');
    }
}
}
/*up-down reveal*/
window.addEventListener('scroll',reveal2);
function reveal2(){
    var reveals=document.querySelectorAll('.reveal2');
    for(var i=0;i<reveals.length;i++)
    {
    var windowheight=window.innerHeight;
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealpoint=150;
    if(revealtop<windowheight-revealpoint){
        reveals[i].classList.add('reveal2-active');
    }
    else{
        reveals[i].classList.remove('reveal2-active');
    }
}
}


/*============================================================================*/



