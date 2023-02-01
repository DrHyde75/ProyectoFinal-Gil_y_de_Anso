
let carrito = JSON.parse(localStorage.getItem('carrito'))
let contadorCarrito = document.getElementById('contadorCarrito')
let contenedorCheckout = document.getElementById('contenedor-checkout')
let precioTotal = document.getElementById('precioTotal')

let generarCheckout = () => {
 
    contenedorCheckout.innerHTML = "" 
  
    carrito.forEach((prod) => {
        const li = document.createElement('li')
        li.className = ('list-group-item d-flex justify-content-between lh-sm')
        li.innerHTML = `
        <h6 class="my-0">${prod.producto} x${prod.cantidad}</h6>
        <span class="text-muted">$${prod.precio}</span>
      
        `
  
        contenedorCheckout.appendChild(li)

        contadorCarrito.innerText = carrito.length 

        console.log(carrito)
        precioTotal.innerText = carrito.reduce((suma, prod) => suma + prod.precio * prod.cantidad, 0)
        
  
    })}

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
  generarCheckout()
})()



