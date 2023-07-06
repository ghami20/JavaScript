window.onload=function(){

    var icono = document.getElementById("icono-usuario");
    var jsonus= JSON.parse(sessionStorage.getItem("UsuarioLogeado"));
     icono.src= jsonus.icon;
    var miscompras=[];

    
     var compras = JSON.parse(localStorage.getItem("compras"));
     for (let index = 0; index < compras.length; index++) {
        if(compras[index].usuario.nombre==jsonus.nombre){
            miscompras.push(compras[index]);
        }
     
     }
     var ListaCompras = document.getElementById("lista-compras");
     for (let index = 0; index < miscompras.length; index++) {
        var total=0;
        console.log( miscompras[index].carrito);
        var divcont = document.createElement("div");
        divcont.className="Compras";
        var titulo = document.createElement("h1");
        titulo.textContent="ID Compra " + index;
        divcont.appendChild(titulo);
            for (let index2= 0; index2 < miscompras[index].carrito.length; index2++) {
                var nueva = document.createElement("li");
                var contenedor = document.createElement("div");
                contenedor.className="producto";
                nueva.className="Elemento";
                var imagen = document.createElement("img");
                imagen.src=miscompras[index].carrito[index2].img;
                var titulo = document.createElement("h2");
                titulo.textContent=miscompras[index].carrito[index2].nombre;
                var parrafo = document.createElement("p");
                parrafo.textContent="Precio unitario: "+ miscompras[index].carrito[index2].precio;
                var cantidad = document.createElement("p");
                cantidad.textContent="cantidad: "+ miscompras[index].carrito[index2].cantidad;
                contenedor.appendChild(imagen);
                contenedor.appendChild(titulo);
                contenedor.appendChild(parrafo);
                contenedor.appendChild(cantidad);
                nueva.appendChild(contenedor);
                divcont.appendChild(nueva);
                ListaCompras.appendChild(divcont);
               // console.log(typeof());
                total=total+parseInt(miscompras[index].carrito[index2].precio)*parseInt(miscompras[index].carrito[index2].cantidad);
                console.log(total);
            }
            var precioFinal = document.createElement("p");
            precioFinal.textContent="Precio final "+ total;
            divcont.appendChild(precioFinal);


    }
}

