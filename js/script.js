let chk = document.getElementById('chk');
let header = document.querySelector('header');
let cardHeader = document.querySelector('.card-header');
let logo = document.querySelector('.logo');
let nav = document.querySelectorAll('a');
let navigation = document.querySelectorAll('.card-a');
let container = document.querySelector('.container');
let text = document.querySelectorAll('p');
let main = document.querySelector('main');
let h1 = document.querySelector('h1');
let footer = document.querySelector('footer');
let cardFooter = document.querySelector('.card-footer');
let cookies = document.querySelector('.cookies-agreement');
let okbutton = document.querySelector('.cookies-button');
let contentDesktop = document.querySelector('.content-desktop');
let toggleButton = document.querySelector('.toggle-menu');
let navBar = document.querySelector('.nav-bar');
console.log()
chk.onchange = function(){
	document.body.classList.toggle('dark');
    container.classList.toggle('container-dark');
    header.classList.toggle('header-dark');
    header.classList.toggle('header-tablet-dark');
    header.classList.toggle('header-mobile-dark');
    for(let navs of nav){
        navs.classList.toggle('a-dark');
    }
    for(let navigations of navigation){
        navigations.classList.toggle('card-a-dark');
    }
    for(let texts of text){
        texts.classList.toggle('p-dark');
    }
    cookies.classList.toggle('cookies-agreement-dark');
    main.classList.toggle('main-dark');
    h1.classList.toggle('h1-dark');
    footer.classList.toggle('footer-dark');
    logo.classList.toggle('logo-dark');
    cardHeader.classList.toggle('card-header-dark');
    cardFooter.classList.toggle('card-footer-dark');
    contentDesktop.classList.toggle('content-desktop-dark');
}

let upButton = document.querySelector('.up-button');

window.onscroll = function (){
    if(window.pageYOffset > 200){
        upButton.classList.add('shown');
    }
    else{
        upButton.classList.remove('shown');
    }
}

upButton.onclick = function(){
    window.scrollTo(0,0);
}
let div = document.querySelectorAll('.menu-div');
let filter = document.querySelector('.filter');

filter.onchange = function(){
    console.log(filter);
    for (let divs of div){
        if (divs.dataset.category !== filter.value && filter.value !=='all'){
            divs.classList.add('hidden');
        }
        else{
            divs.classList.remove('hidden');
        }
    }
    
}

okbutton.onclick = function(){
    cookies.classList.add('hidden')
}

toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});