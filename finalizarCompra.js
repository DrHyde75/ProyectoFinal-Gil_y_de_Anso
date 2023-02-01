const finalizarPago = document.getElementById('finalizarPago')
const formCompleto = document.getElementsByClassName('needs-validation')[0]


function hacer(event) {
  let res = true

    Array.from(formCompleto).forEach(form => {
          if (!form.checkValidity()) {
            res = false
          }
    })
    
    event.preventDefault()
    event.stopPropagation()    
      if (res === true){
        Swal.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Tu compra se ha realizado con exito. Boltytango enviara tu pedido en los proximos dias.',
          confirmButtonColor: 'rgb(0, 162, 255)',
          confirmButtonText: '<a href="../../index.html">Volver al inicio</a>'
      
      })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Fracaso!',
          text: 'Hubo un problema con tu compra. Revisa los datos e intenta nuevamente.',
          confirmButtonColor: 'rgb(0, 162, 255)'
      })
      }
    }


    

  


formCompleto.addEventListener('submit', hacer)