
let carritoContenedor = document.getElementsByClassName('carrito-contenedor')[0]
let productosCarrito = document.getElementsByClassName('carrito-productos')[0]

let btnAbrir = document.getElementById('boton-carrito')
let btnCerrar = document.getElementById('carritoCerrar')
let btnComprar = document.getElementsByClassName('boton-agregar')[1]

let talle = document.getElementsByClassName('talle-contenedor')[0]
let talleSeleccionadoXS = document.getElementById('seleccionarTalleXS')
let talleSeleccionadoS = document.getElementById('seleccionarTalleS')
let talleSeleccionadoM = document.getElementById('seleccionarTalleM')
let talleSeleccionadoL = document.getElementById('seleccionarTalleL')
let talleSeleccionadoXL = document.getElementById('seleccionarTalleXL')


btnAbrir.addEventListener('click', ()=>{
    btnComprar.classList.remove('comprar')
    if (carrito.length === 0){
        btnComprar.classList.add('comprar')
    }
    else{
        btnComprar.classList.remove('comprar')
    }
    carritoContenedor.classList.toggle('carrito-visible')
})
btnCerrar.addEventListener('click', ()=>{
    carritoContenedor.classList.toggle('carrito-visible')
})

carritoContenedor.addEventListener('click', (event) =>{
    carritoContenedor.classList.toggle('carrito-visible')

})

productosCarrito.addEventListener('click', (event) => {
    event.stopPropagation() //para que no se cierre el carrito
})


talleSeleccionadoXS.addEventListener('click', ()=>{
    talle.classList.toggle('talle-active')
    Toastify({//cuando agrego un producto, se muestra la notificacion
        text: 'Producto agregado al carrito',
        duration: 3000,
        gravity: 'bottom',
        close: true,
        style: {
            background: "linear-gradient(to right, rgb(0, 162, 255), rgb(0, 110, 255))",
          }
    }).showToast();
})

talleSeleccionadoS.addEventListener('click', ()=>{
    talle.classList.toggle('talle-active')
    Toastify({
        text: 'Producto agregado al carrito',
        duration: 3000,
        gravity: 'bottom',
        close: true,
        style: {
            background: "linear-gradient(to right, rgb(0, 162, 255), rgb(0, 110, 255))",
          }
    }).showToast();
})

talleSeleccionadoM.addEventListener('click', ()=>{
    talle.classList.toggle('talle-active')
    Toastify({
        text: 'Producto agregado al carrito',
        duration: 3000,
        gravity: 'bottom',
        close: true,
        style: {
            background: "linear-gradient(to right, rgb(0, 162, 255), rgb(0, 110, 255))",
          }
    }).showToast();
})

talleSeleccionadoL.addEventListener('click', ()=>{
    talle.classList.toggle('talle-active')
    Toastify({
        text: 'Producto agregado al carrito',
        duration: 3000,
        gravity: 'bottom',
        close: true,
        style: {
            background: "linear-gradient(to right, rgb(0, 162, 255), rgb(0, 110, 255))",
          }
    }).showToast();
})

talleSeleccionadoXL.addEventListener('click', ()=>{
    talle.classList.toggle('talle-active')
    Toastify({
        text: 'Producto agregado al carrito',
        duration: 3000,
        gravity: 'bottom',
        close: true,
        style: {
            background: "linear-gradient(to right, rgb(0, 162, 255), rgb(0, 110, 255))",
          }
    }).showToast();
})

