import {productos} from './js/productos.js'

const todosProductos = document.getElementById('todos-productos')

productos.forEach(producto =>{
    todosProductos.innerHTML += `
    <div class="col">
        <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${producto.imagen}" role="img">
            <div class="card-body">
                <p class="card-text text-primary" style="height: 10rem;"><span class="text-danger">Nombre: </span>${producto.nombre}<br>
                    <span class="text-danger">Descripcion: </span>${producto.descripcion}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <a href="${producto.link}" class="btn btn-sm text-white btn-dark" target="_blank">Comprar Producto</a>
                    </div>
                        <small class="text-success">${producto.precio}</small>
                </div>
            </div>
        </div>
    </div>
    
    ` 
})






