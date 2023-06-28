function cerrarSesion() {
    var us = sessionStorage.getItem("UsuarioLogeado");
        sessionStorage.clear();
        window.location.href = "index.html";
    
  }


  window.onload=function(){
    var icono = document.getElementById("img");
    var nombre = document.getElementById("nombre");
    var UsuarioLogeado= sessionStorage.getItem("UsuarioLogeado");
    var jsonus= JSON.parse(UsuarioLogeado);

    console.log("hola"+jsonus);
     icono.src= jsonus.icon;
    nombre.textContent=jsonus.nombre;




  }