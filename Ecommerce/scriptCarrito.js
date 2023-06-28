var carrito=[];

var productos = [{
    img:"assets/imagen-producto1.jpg",
    nombre:"Samsung Galaxy S22 Ultra",
    precio:500000
},{
    img:"assets/imagen-producto2.jpg",
    nombre:"Xiami redmi 2",
    precio:10000
},{
    img:"assets/imagen-producto3.jpg",
    nombre:"Generico 1",
    precio:105000
},{
    img:"assets/imagen-producto4.jpg",
    nombre:"Generico 2",
    precio:10000
},{
    img:"assets/imagen-producto5.jpg",
    nombre:"Generico 3",
    precio:1001
}];
var itemsString = JSON.stringify(productos);
var  items = localStorage.setItem("productos",itemsString);
var productLocal =localStorage.getItem('productos');
console.log(JSON.parse( productLocal));

var productos2 = JSON.parse( productLocal);
console.log(productos2);


window.onload=function(){
    var icono = document.getElementById("icono-usuario");
   var UsuarioLogeado= sessionStorage.getItem("UsuarioLogeado");
   var jsonus= JSON.parse(UsuarioLogeado);
   console.log(jsonus);
    icono.src= jsonus.icon;
    var listaProductos = document.getElementById("productos");
    for (let index = 0; index < productos.length; index++) {
        var contenedor = document.createElement("div");
        contenedor.className="producto";
        var imagen = document.createElement("img");
        imagen.src=productos[index].img;
        var titulo = document.createElement("h2");
        titulo.textContent=productos[index].nombre;
        var parrafo = document.createElement("p");
        parrafo.textContent=productos[index].precio;
        var boton = document.createElement("button");
        boton.addEventListener("click",AgregarCarrito);
        boton.className="agregar-carrito"
        boton.textContent="Agregar al carrito";
        var cantidad = document.createElement("input");
        cantidad.type="number";
        cantidad.value=1;
        contenedor.appendChild(imagen);
        contenedor.appendChild(titulo);
        contenedor.appendChild(parrafo);
        contenedor.appendChild(cantidad);
        contenedor.appendChild(boton);
        listaProductos.appendChild(contenedor);
    }
}


function Todos(){


    var listaProductos = document.getElementById("productos");
    listaProductos.innerHTML="";
    for (let index = 0; index < productos.length; index++) {
   
        var contenedor = document.createElement("div");
        contenedor.className="producto";
        var imagen = document.createElement("img");
        imagen.src=productos[index].img;
        var titulo = document.createElement("h2");
        titulo.textContent=productos[index].nombre;
        var parrafo = document.createElement("p");
        parrafo.textContent=productos[index].precio;
        var boton = document.createElement("button");
        
        boton.addEventListener("click",AgregarCarrito);
        boton.className="agregar-carrito"
        boton.textContent="Agregar al carrito";
        var cantidad = document.createElement("input");
        cantidad.type="number";
        cantidad.value=1;
        
        contenedor.appendChild(imagen);
        contenedor.appendChild(titulo);
        contenedor.appendChild(parrafo);
        contenedor.appendChild(cantidad);
        contenedor.appendChild(boton);
        
        listaProductos.appendChild(contenedor);
    }

}


function Menor(){
    var listaProductos = document.getElementById("productos");
    listaProductos.innerHTML="";
    for (let index = 0; index < productos.length; index++) {
        if(productos[index].precio<100000){

            
            var contenedor = document.createElement("div");
            contenedor.className="producto";
            var imagen = document.createElement("img");
            imagen.src=productos[index].img;
            var titulo = document.createElement("h2");
            titulo.textContent=productos[index].nombre;
            var parrafo = document.createElement("p");
            parrafo.textContent=productos[index].precio;
            var boton = document.createElement("button");
            
            boton.addEventListener("click",AgregarCarrito);
            boton.className="agregar-carrito"
            boton.textContent="Agregar al carrito";
            var cantidad = document.createElement("input");
            cantidad.type="number";
            cantidad.value=1;
            
            contenedor.appendChild(imagen);
            contenedor.appendChild(titulo);
            contenedor.appendChild(parrafo);
            contenedor.appendChild(cantidad);
            contenedor.appendChild(boton);
            
            listaProductos.appendChild(contenedor);
        }
    }
}

function Mayor(){

    var listaProductos = document.getElementById("productos");
    listaProductos.innerHTML="";
    for (let index = 0; index < productos.length; index++) {
        if(productos[index].precio>100000){

            
            var contenedor = document.createElement("div");
            contenedor.className="producto";
            var imagen = document.createElement("img");
            imagen.src=productos[index].img;
            var titulo = document.createElement("h2");
            titulo.textContent=productos[index].nombre;
            var parrafo = document.createElement("p");
            parrafo.textContent=productos[index].precio;
            var boton = document.createElement("button");
            
            boton.addEventListener("click",AgregarCarrito);
            boton.className="agregar-carrito"
            boton.textContent="Agregar al carrito";
            var cantidad = document.createElement("input");
            cantidad.type="number";
            cantidad.value=1;
            
            contenedor.appendChild(imagen);
            contenedor.appendChild(titulo);
            contenedor.appendChild(parrafo);
            contenedor.appendChild(cantidad);
            contenedor.appendChild(boton);
            
            listaProductos.appendChild(contenedor);
        }
    }

}


function AgregarCarrito(event){
    
    carrito=JSON.parse(localStorage.getItem("carrito"));
    var producto = event.target.parentNode;

    var imagen = producto.querySelector('img').src;
    var titulo = producto.querySelector('h2').textContent;
    var precio = producto.querySelector('p').textContent;
    var cantidad = producto.querySelector('input').value;


    console.log("imagen " + imagen);
    console.log("titulo " + titulo);
    console.log("precio " + precio);
    console.log("cantidad " + cantidad);
    var repetido = false;
    var indice=0;
    for (let index = 0; index < carrito.length; index++) {
       if(titulo==carrito[index].nombre){
        repetido=true;
        indice=index;
       }
        
    }
    if(repetido==true){

        carrito[indice].cantidad= parseInt(carrito[indice].cantidad)+parseInt(cantidad);

    }else{
        var producto = {
            img:imagen,
            nombre:titulo,
            precio:precio,
            cantidad:cantidad
        }
        carrito.push(producto);
    }
    localStorage.setItem("carrito",JSON.stringify(carrito));
    

//alert("Producto agregado");

}

function AccederCarrito(){
    if(carrito.length==0){
alert("Carrito vacio compre algo para acceder");
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
    }
    
    var total = document.getElementById("total");
    total.textContent="El total es " + totalizador;
  
    window.location.href="compra.html";


}

function comprar(){

    alert("Su compra ha sido exitosa");
    var carritocontenedor = document.getElementById("carrito");
        carritocontenedor.style="display:none";

    carrito=[];
}
