function cerrarSesion() {
    var us = sessionStorage.getItem("UsuarioLogeado");
        sessionStorage.clear();
        window.location.href = "index.html";
        var carrito = JSON.parse(localStorage.getItem("carrito"));
       var vacio =[]; 
  
       carrito = vacio;
       localStorage.setItem("carrito",JSON.stringify(carrito));
    
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

/*
  function CambiarFoto(){
    var us = sessionStorage.getItem("UsuarioLogeado");
    var jsonus= JSON.parse(us);
 
    var algo = document.getElementById("CambiarFoto").value;
    console.log(algo);
    jsonus.icon=algo;
    sessionStorage.setItem("UsuarioLogeado",JSON.stringify(jsonus));
    location. reload();
  }
  */
  function mostrar(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
        document.getElementById("img").src = reader.result;
        var us = sessionStorage.getItem("UsuarioLogeado");
        var jsonus= JSON.parse(us);
        jsonus.icon=reader.result;
       var locals= localStorage.getItem("Usuarios");
        var usuarios = JSON.parse(locals);
        for (let index = 0; index < usuarios.length; index++) {
          if(usuarios[index].nombre==jsonus.nombre){
            console.log("Lo encontré");
            usuarios[index].icon=reader.result;
            localStorage.setItem("Usuarios",JSON.stringify(usuarios));
          }
          
        }
        sessionStorage.setItem("UsuarioLogeado",JSON.stringify(jsonus));

      }
    }
  }