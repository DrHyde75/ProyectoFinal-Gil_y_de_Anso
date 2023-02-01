
//se cargan los productos desde productos.json

fetch('stock/productos.json')
  .then(response => response.json())
  .then(response => {
    pintarProductos(response)
  });





