const chk = document.getElementById('chk');
let header = document.querySelector('header');
let nav = document.querySelectorAll('a');
let container = document.querySelector('.container')
let text = document.querySelectorAll('p');
let main = document.querySelector('main');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
    container.classList.toggle('container-dark');
    for(texts of text){
         texts.classList.toggle('p-dark');
    }   
    header.classList.toggle('header-dark');
    for(navs of nav){
        navs.classList.toggle('a-dark');
    }
     main.classList.toggle('main-dark');
     for(texts of text){
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
