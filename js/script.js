const chk = document.getElementById('chk');
let header = document.querySelector('header');
let nav = document.querySelectorAll('a');
let container = document.querySelector('.container')
let text = document.querySelectorAll('p');
let main = document.querySelector('main');
let h1 = document.querySelector('h1');
let footer = document.querySelector('footer');
let picture = document.querySelectorAll('.menu-flex');
console.log()
chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
    container.classList.toggle('container-dark');
    header.classList.toggle('header-dark');
    for(let navs of nav){
        navs.classList.toggle('a-dark');
    }
    
    main.classList.toggle('main-dark');
    h1.classList.toggle('h1-dark');
    for(let pictures of picture){
        pictures.classList.toggle('menu-flex-dark');
    }   
    for(let texts of text){
        texts.classList.toggle('p-dark');
    }
    
});

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
