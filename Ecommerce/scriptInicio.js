window.onload=function(){

    var icono = document.getElementById("icono-usuario");
    var UsuarioLogeado= sessionStorage.getItem("UsuarioLogeado");
    var jsonus= JSON.parse(UsuarioLogeado);
    console.log(jsonus);
     icono.src= jsonus.icon;

     
}

