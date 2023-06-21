var carrito=[];
var productos=[{
    nombre:"Samsung Galaxy s22 Ultra",
    precio:200000,
    img:"assets/imagen-producto1.jpg"
    
},{
    nombre:"TCL 307",
    precio:20000,
    img:"assets/imagen-producto2.jpg"
},{
    nombre:"Generico",
    precio:20000,
    img:"assets/imagen-producto3.jpg"
},{
    nombre:"Generico",
    precio:20000,
    img:"assets/imagen-producto4.jpg"
}
];

window.onload=function(){
var lista = document.getElementById("productos");
for (let index = 0; index < productos.length; index++) {
        var contenedor = document.createElement("div");

        contenedor.className="producto";

        var img = document.createElement("img");
        img.src=productos[index].img;
        var titulo = document.createElement("h2");

        titulo.textContent=productos[index].nombre;
        var precio = document.createElement("p");

        precio.textContent=productos[index].precio;

        var cantidad= document.createElement("input");
        cantidad.type="number";
        cantidad.value=1;
        cantidad.textContent="cantidad";
        cantidad.id="cantidad-input";
        var boton = document.createElement("button");
        boton.className="agregar-carrito";
        boton.addEventListener("click", AgregarCarrito);
        boton.textContent="Agregar al carrito";
        contenedor.appendChild(img);
        contenedor.appendChild(titulo);
        contenedor.appendChild(precio);
        contenedor.appendChild(cantidad);
        contenedor.appendChild(boton);
        lista.appendChild(contenedor);
}
}

function AgregarCarrito(event){

    
    const producto = event.target.parentNode;

    const imagen = producto.querySelector('img').src;
    
    const titulo = producto.querySelector('h2').textContent;
    
    const precio = producto.querySelector('p').textContent;
    const cantidad = producto.querySelector('input').value;
    console.log('Imagen:', imagen);
    console.log('Título:', titulo);
    console.log('Cantidad',cantidad);
    console.log('Precio:', precio);
    var repetido= false;
    var indice = 0;
    for (let index = 0; index < carrito.length; index++) {
        
        if(titulo==carrito[index].nombre){
            repetido=true;
            indice=index;
        }
    }
    if(repetido==true){
        carrito[indice].cantidad=parseInt(cantidad)+parseInt( carrito[indice].cantidad);
        console.log(carrito);
    }else{
        var celularnuevo={
            nombre:titulo,
            precio:precio,
            img:imagen,
            cantidad:cantidad
        };
        carrito.push(celularnuevo);
        console.log(carrito);

    }
}
function AccederCarrito(){
var carritocontenedor= document.getElementById("carrito");
var ListaCarrito= document.getElementById("lista-carrito");
ListaCarrito.innerHTML="";
var totalizador= 0;
for (let index = 0; index < carrito.length; index++) {
        var contenedor = document.createElement("div");

        contenedor.className="producto";

        var img = document.createElement("img");
        img.src=carrito[index].img;
        var titulo = document.createElement("h2");

        titulo.textContent=carrito[index].nombre;
        var precio = document.createElement("p");

        precio.textContent=carrito[index].precio;

        var cantidad = document.createElement("p");

        cantidad.textContent=carrito[index].cantidad;
       
        var boton = document.createElement("button");
        boton.className="agregar-carrito";
        boton.addEventListener("click", AgregarCarrito);
        boton.textContent="Agregar al carrito";
        contenedor.appendChild(img);
        contenedor.appendChild(titulo);
        contenedor.appendChild(precio);
        contenedor.appendChild(cantidad);
        contenedor.appendChild(boton);
        ListaCarrito.appendChild(contenedor);
        totalizador=totalizador+ parseInt(carrito[index].precio)*carrito[index].cantidad;
}

var total = document.getElementById("total");
total.textContent="El total es: "+ totalizador;
carritocontenedor.style="display:block";



}