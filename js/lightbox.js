// lightbox galeria start
const imagenes  = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const icon_menu1 = document.querySelector('.icon-menu');
const swipercardperfil = document.querySelectorAll('#contenedor-swiper')
const tiempoLimitadoSection = document.querySelectorAll('.tiempo-limitado-section');


const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    icon_menu1.style.opacity = '0';
    tiempoLimitadoSection.style.visibility = 'hidden';
}
imagenes.forEach(imagen =>{
   imagen.addEventListener('click', ()=>{
    aparecerImagen(imagen.getAttribute('src'));
    swipercardperfil.forEach(element => {
        element.style.opacity = '.6'
    });
   })
}

);
contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        icon_menu1.style.opacity = '1';
        swipercardperfil.forEach(element => {
            element.style.opacity = '1'
        });
        tiempoLimitadoSection.style.display = 'block';
        // tiempoLimitadoSection.style.z-index=8;
    }
})