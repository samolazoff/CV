const burger = document.querySelector('.burger');
const stick = document.querySelectorAll('.stick')
const nav = document.querySelector('.nav-items');
const navItem = document.querySelectorAll('.nav-item');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    stick.forEach(element => {
        if(element.classList.contains('open')){
            element.classList.remove('open');
            element.classList.add('close');
        }else{
            if(element.classList.contains('close')){
                element.classList.remove('close');
                element.classList.add('open');
            }else{
                element.classList.add('open');
            }
        }
    });
  });

nav.addEventListener('click', (e) => {
    if(e.target.classList.contains('nav-item')
    || e.target.classList.contains('nav-item__link')){
        stick.forEach(elm=>{
            elm.classList.remove('open');
            elm.classList.add('close');
        });
        nav.classList.toggle('active');
    }
});