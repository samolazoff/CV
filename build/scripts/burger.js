  const burger = document.querySelector('.burger');
  const stick = document.querySelectorAll('.stick')

  burger.addEventListener('click', () => {
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
  })