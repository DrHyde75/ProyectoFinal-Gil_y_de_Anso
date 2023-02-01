//objeto. Caracteristicas de las camisetas.
class Productos {
    constructor(id, producto, precio, region, categoria, stock, destacado, cantidad) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
        this.region = region;
        this.categoria = categoria;
        this.stock = stock;
        this.destacado = destacado;
        this.cantidad = cantidad;
    };
};



//variables a usar
let productos = []
let total = 0;
let carrito = []
let productosFiltrados = []



let contenedorProductos = document.getElementById('contenedor-productos')

let contenedorCarrito = document.getElementById('agregados-contenedor')

let botonVaciar = document.getElementById('vaciar-carrito')
let botonComprar = document.getElementsByClassName('boton-agregar')[1]

let contadorCarrito = document.getElementById('contadorCarrito')
let precioTotal = document.getElementById('precioTotal')




//filtro por categoria estructura
let categoriasCheckbox = $(
`
<div class="categorias">
    <h6>Categorias</h6>
    <form class="categoriasCheckbox" onsubmit="return false">
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Paises" value="Paises">
        <label class="form-check-label" for="Paises">
            Paises
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Equipos" value="Equipos">
        <label class="form-check-label" for="Equipos">
            Equipos
        </label>
    </div>
    <input class="btn btn-primary" type="submit" value="Aplicar">
    </form>
</div>
`
);



//filtro por region estructura
let regionesCheckbox = $(
`
<div class="regiones">
    <h6>Regiones</h6>
    <form class="regionesCheckbox" onsubmit="return false">
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Norteamerica" value="Norteamerica">
        <label class="form-check-label" for="Norteamerica">
            Norteamerica
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Sudamerica" value="Sudamerica">
        <label class="form-check-label" for="Sudamerica">
            Sudamerica
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Europa" value="Europa">
        <label class="form-check-label" for="Europa">
            Europa
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Africa" value="Africa">
        <label class="form-check-label" for="Africa">
            Africa
        </label>
    </div>
    <input class="btn btn-primary" type="submit" value="Aplicar">
    </form>
</div>
`

);



//filtros por precio estructura
let precioRango = $(

    `
    <h6>Rango de precio</h6>
    <form class="rangoPrecios d-flex flex-column" onsubmit="return false">
        <label for="rangoMinimo" class="form-label">
            Minimo
        </label>
        <input type="range" class="form-range" min="10000" max="25000" value="10000" id="rangoMinimo">
        </input>
        <output>10000</output>
        <label for="rangoMaximo" class="form-label">
            Maximo
        </label>
        <input type="range" class="form-range" min="10000" max="25000" value="25000" id="rangoMaximo">
        </input>
        <output>25000</output>
        <input class="btn btn-primary" type="submit" value="Aplicar">
    
    </form>
    `

);

let contenedorGrilla = $('<div class="contenedor-grilla row d-flex"></div>')

let grilla = $('<div class="grilla col-md-10"></div>')

let filtros = $(`<aside class="flex-column col-md-2 d-flex"></aside>`
);


//la funcion de a continuacion, pinta los productos y acomoda toda la tienda

let pintarProductos = (response) => {



    $('section').append(contenedorGrilla)

    $('.contenedor-grilla').append(filtros)

    $('.contenedor-grilla').append(grilla);

    $('aside').append(categoriasCheckbox)

    $('aside').append(regionesCheckbox)

    $('aside').append(precioRango)

  

    
response.forEach((prod) => {//a cada producto del json le asigna la clase productos
    productos.push(new Productos(prod.id, prod.producto, prod.precio, prod.region, prod.categoria, prod.stock, prod.destacado, prod.cantidad))
    if (prod.destacado === true) {
        agregarAGrilla(prod) //muestra solo los productos destacados
    }
})

console.log(productos)


//IMPORTANTE: los filtros son excluyentes el uno del otro. Solo se puede utlizar un filtro a la vez. Es la forma que decidi hacerlo

//Filtro de categoria
$('aside').on('submit', 'form.categoriasCheckbox', (e) => { 

productosFiltrados = []
        
for (const categoria of e.target) { //con esto recorro los radios
    if (categoria.value === "Paises"){//si el radio es el de Paises...
        if (categoria.checked === true){//y esta tildado...
            for (const producto of productos) {//entonces recorre los productos y agrega los que cumplen con el requisito
                let categoriaProducto = producto.categoria;
                if (categoriaProducto === "Pais") {
                    productosFiltrados.push(producto);
                };
            };

        }
    }

    else if (categoria.value === "Equipos"){//idem arriba
        if (categoria.checked === true){
            for (const producto of productos) {
                let categoriaProducto = producto.categoria;
                if (categoriaProducto === "Equipo") {
                    productosFiltrados.push(producto);
                };
            };

        }

    } 
         
};
actualizarGrilla()

});


//Filtro por region
$('aside').on('submit', 'form.regionesCheckbox', (e) => { 
productosFiltrados = []

for (const region of e.target) { //funciona igual al de arriba

    if (region.value === "Norteamerica"){
        if (region.checked === true){
            for (const producto of productos) {
                let regionProducto = producto.region;
                if (regionProducto === "Norteamerica") {
                    productosFiltrados.push(producto);
                };
            };

                }
            }
    else if (region.value === "Sudamerica"){
        if (region.checked === true){
            for (const producto of productos) {
                let regionProducto = producto.region;
                if (regionProducto === "Sudamerica") {
                    productosFiltrados.push(producto);
                };
            };

        }

    }
            
    else if (region.value === "Europa"){
        if (region.checked === true){
            for (const producto of productos) {
                let regionProducto = producto.region;
                if (regionProducto === "Europa") {
                    productosFiltrados.push(producto);
                };
            };

        }

    }
            
    else if (region.value === "Africa"){
        if (region.checked === true){
            for (const producto of productos) {
                let regionProducto = producto.region;
                if (regionProducto === "Africa") {
                    productosFiltrados.push(producto);
                };
            };

        }

    } 
       
actualizarGrilla()
};
        
        
});


//Filtro por rango de precio

$('aside').on('submit', 'form.rangoPrecios', (e) => {
productosFiltrados = []
//obtengo el minimo y el maximo introducido por el usuario
let minimo = e.target[0].value
let maximo = e.target[2].value

for (const producto of productos) {//recorro los productos y agrego los que estan dentro del rango
    let precioEnProducto = producto.precio
    if (parseInt(precioEnProducto) > parseInt(minimo) && parseInt(precioEnProducto) < parseInt(maximo)) {
        productosFiltrados.push(producto)
    } 

}
actualizarGrilla()
        
});


//Esto es para que se vea reflejado el valor minimo y maximo
$('aside').on('input', '#rangoMaximo', (e) => {
    e.target.nextElementSibling.value = e.target.value
}); 
$('aside').on('input', '#rangoMinimo', (e) => {
    e.target.nextElementSibling.value = e.target.value
});

}



let agregarAGrilla =  (producto) => {
//obtengo la foto del producto (sin espacios)
let nombreFoto = producto.producto.replaceAll(' ', '_')
//creo la estructura, con el nombre del producto, su foto, su precio
let estructuraProducto = $(`
    <div class="productoDisplay fadeIn ${producto.id}">
        <p>${producto.producto}</p>
        <img class="imagenForma" src="img/productos/${nombreFoto}.jpg" >
        <div class="d-flex justify-content-between align-items-center">
            <a id = "agregar${producto.id}"class="btn btn-primary agregar">Agregar</a>
            <p class="precio">${producto.precio} </p>
        </div>
    </div>'
`
    
);
$('.grilla').append(estructuraProducto);

//ahora viene la parte para poder agregar un producto en especifico al carrito

//como vemos arriba, utilizo la id del producto para poder agregarlo al carrito
let btnAgregar = document.getElementById(`agregar${producto.id}`)
let talle = document.getElementsByClassName('talle-contenedor')[0]


btnAgregar.addEventListener('click', () => {
    agregarAlCarrito(producto.id)
    talle.classList.toggle('talle-active') //pregunta por el talle
})

}


let actualizarGrilla = () => {
    $('.productoDisplay').remove()
    for (const producto of productosFiltrados){
        agregarAGrilla(producto)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})


//funcion para vaciar carrito. Simplemente le setea su longitud en 0.
botonVaciar.addEventListener('click', () => {
    carrito.forEach(prod => { 
       prod.cantidad = 1
       localStorage.setItem('carrito', JSON.stringify(carrito))
     })
    carrito.length = 0
    actualizarCarrito()
    botonComprar.classList.add('comprar') //Escondo el boton de comprar cuando lo vacio.
})



let agregarAlCarrito = (idProducto) => {

    //a traves de el id del preducto chequeo si ese producto ya se encuentra en el carrito

   
    // se fija si hay un producto con el mismo id
    //si el producto esta en el carrito, lo busca a traves de su id, y le suma 1 a cantidad

    if (carrito.some(prod => prod.id === idProducto)){ 
        carrito.forEach(prod => { 
        if (prod.id === idProducto){
            prod.cantidad++
            
        }
     })

    //si el producto no esta, simplemente lo busca el producto con esa misma id y lo agrega al carrito
    } 
    else {
        let producto = productos.find((prod) => prod.id === idProducto)
        carrito.push(producto)
    }
    //actualizamos el carrito para que se vean efectivamente los cambios
    actualizarCarrito() 
}


let eliminarDelCarrito = (idProducto) => {

    carrito.forEach(prod => {//busca al producto y setea su cantidad nuevamente en 1
        if (prod.id === idProducto){
            prod.cantidad = 1
            localStorage.setItem('carrito', JSON.stringify(carrito))
            
        }
     })

    let producto = carrito.find((prod) => prod.id === idProducto) //obtiene el producto a traves de su id

    let indice = carrito.indexOf(producto) //busca la posicion del producto en el array carrito

    carrito.splice(indice, 1) //borramos ese elemento

    actualizarCarrito() //actualizamos el carrito para reflejar los cambios

    // si cuando eliminamos el producto, no hay productos en el carrito, sacamos el boton comprar
    if (carrito.length === 0){
        botonComprar.classList.add('comprar')
    }

}

let actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" //seteo el nodo como si fuera nuevo

    //para cada producto, creo su estructura y la agrego al carrito
    carrito.forEach((prod) => {
        let div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.producto} x${prod.cantidad}</p>
        <p>Precio:$${prod.precio}</p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg></button>
        `

        contenedorCarrito.appendChild(div)
        
        //actualizamos el localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })


    //actualizamos el localStorage si el carrito esta vacio (cosa que arriba no hace)
    if (carrito.length === 0){
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }

    //calculamos el precio total, teniendo en cuenta el precio de cada producto, y la cantidad de cada uno
    precioTotal.innerText = carrito.reduce((suma, prod) => suma + prod.precio * prod.cantidad, total)

    contadorCarrito.innerText = carrito.length //actualizamos el contador del carrito, teniendo en cuenta su longitud

    

}

