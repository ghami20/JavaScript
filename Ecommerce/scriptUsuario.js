var carrito=[];
window.onload=function(){
var icono = document.getElementById("icono-usuario");
   var UsuarioLogeado= sessionStorage.getItem("UsuarioLogeado");
   var jsonus= JSON.parse(UsuarioLogeado);
   console.log("hola"+jsonus);
    icono.src= jsonus.icon;
    var carritotLocal =localStorage.getItem('carrito');
    carrito= JSON.parse( carritotLocal);

    if(carrito.length==0){
        console.log("hola")
        document.getElementById("vacio").style="display:block";
    }else{
        var carritocontenedor = document.getElementById("carrito");
    
        carritocontenedor.style="display:block";

        var listaCarrito= document.getElementById("lista-carrito");
        listaCarrito.innerHTML="";
        var totalizador = 0;
        for (let index = 0; index < carrito.length; index++) {
        
    
            var contenedor = document.createElement("li");
            contenedor.className="producto";
            var imagen = document.createElement("img");
            imagen.src=carrito[index].img;
            var titulo = document.createElement("h2");
            titulo.textContent=carrito[index].nombre;
            var parrafo = document.createElement("p");
            parrafo.textContent="Precio: "+ carrito[index].precio;
            var cantidad = document.createElement("p");
            cantidad.textContent="Cantidad : "+carrito[index].cantidad;
    
            contenedor.appendChild(imagen);
            contenedor.appendChild(titulo);
            contenedor.appendChild(parrafo);
            contenedor.appendChild(cantidad);
    
    
            listaCarrito.appendChild(contenedor);

            totalizador=totalizador+parseInt(carrito[index].precio)*parseInt(carrito[index].cantidad);
        
        }
        
        var total = document.getElementById("total");
        total.textContent="El total es " + totalizador;
    }
    }
function cerrarSesion() {
    var us = sessionStorage.getItem("UsuarioLogeado");
        sessionStorage.clear();
        window.location.href = "index.html";
    
  }
  function comprar(){

    alert("Su compra ha sido exitosa");
    var carritocontenedor = document.getElementById("carrito");
        carritocontenedor.style="display:none";
        var sesion= JSON.parse(sessionStorage.getItem("UsuarioLogeado"));
        var compras = JSON.parse(localStorage.getItem("compras"));
    
    var compranueva={
        carrito:carrito,
        usuario:sesion
    }

    compras.push(compranueva);
    localStorage.setItem("compras",JSON.stringify(compras));
    carrito=[];
    localStorage.setItem("carrito",JSON.stringify(carrito));


}