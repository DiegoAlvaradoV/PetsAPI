//FUNCIÓN ENCARGADA DE MOSTRAR EL SCROLLTOP
const scrollTop = () => {

  const scrollTop = document.querySelector('.scrollTop');

  let scroll = window.scrollY;

  let val = scrollTop.classList.contains('scrollTop__Show');


  if(scroll >= 540){
    scrollTop.classList.add('scrollTop__Show');
  }else if(scroll<=540 && val == true){
    scrollTop.classList.remove('scrollTop__Show');
  }

}

//SE AÑADE EL EVENTO SCROLL QUE EJECUTE LA FUNCIÓN ENCARGADA DE MOSTRAR EL SCROLLTOP
window.addEventListener('scroll', scrollTop);