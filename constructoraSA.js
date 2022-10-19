const contenedorGrandeCarrousel = document.querySelector(".contenedor-grande-carrousel")
const puntoCarrousel = document.querySelectorAll(".punto-carrousel")

/*
    PROPÓSITO:
        Al cliclear en un punto:
            -> Saber la posición de ese punto
            -> Aplicar transform translateX al contenedor-grande-carrousel
            -> Quitar la clase .activo de TODOS los puntos
*/

/* Son tres imágenes, entonces si la posición es 0 transformX es 0, si la posición es 1 transformX es -33.3%, si la posición es 2 trasnformX es -66.6%. Entonces la operación es i(posición) * -33.3% */
/*puntoCarrousel.array.forEach((cadaPunto, i) => {
    punto[i].addEventListener['click', ()=>{
        let posicion = i
        let operacion = posicion * -33.3

        contenedorGrandeCarrousel.style.transform = 'translateX(${ operacion } %)'

        puntoCarrousel.array.forEach((cadaPunto, i)=> {
            puntoCarrousel[i].classList.remove("activo")
        })
        puntoCarrousel[i].classList.add("activo")
    })
*/

//Recorre todos los puntos
puntoCarrousel.forEach( (cadaPunto, i)=> {
    //asigna un click a cadaPunto
    puntoCarrousel[i].addEventListener("click", ()=>{
        //guarda la posición de ese punto
        let posicion = i
        //calcula el desplazamiento del contenedor grande
        let operacion = posicion * -33.3
        //mueve el contenedor grande
        contenedorGrandeCarrousel.style.transform = "translateX(${ operacion }%)"


        //recorre todos los puntos de nuevo
        puntoCarrousel.forEach( (cadaPunto, i)=>{
            //quita la clase activo a los puntos
            puntoCarrousel[i].classList.remove("activo")

        })
        //añade la clase activo al punto de click
        puntoCarrousel[i].classList.add("activo")
    })
})
