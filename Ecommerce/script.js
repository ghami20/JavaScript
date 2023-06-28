
window.onload=function(){

  var usuarios=[
    {
        nombre:"gamaliel",
        clave:"1234",
        icon:"assets/nekoarc.jpg"
      },
      {
        nombre:"natanael",
        clave:"1234",
        icon:"assets/skull.jpg"
      },
      {
        nombre:"ghami",
        clave:"1234",
        icon:"assets/squidward.jpg"
      }
    ];
    
    
    var boton = document.getElementById("miBoton");
    boton.addEventListener("click",function(){
      let usuario = document.getElementById("usuario").value;
      let contraseña = document.getElementById("contrasena").value;
      let errorU = document.getElementById("labelErrorUsuario");
      let errorC = document.getElementById("labelErrorContraseña");
      let formulario =document.getElementById("formulario");
      let box = document.getElementById("chekbox").value;
      let error = true;
      if(usuario.length=="" || usuario.length<3){
        errorU.style="display:block";
        error=false;
      }else{
        errorU.style="display:none";
        error=true;
      }
      if(contraseña.length=="" || contraseña.length<3){
        errorC.style="display:block";
        error=false;
      }else{
        errorC.style="display:none";
        error=true;
      }
      
      var encontrado=true;
      var img;
      for (let index = 0; index < usuarios.length; index++) {
        
        if(error==true && usuario==usuarios[index].nombre && contraseña==usuarios[index].clave){
          formulario.action="carrito.html";
          encontrado=true;
          img=usuarios[index].icon; 
          index=usuarios.length;
        }else{
          encontrado=false;
        }
        
      }
      
      if(encontrado==true){
        var UsuarioLogeado={
          nombre:usuario,
          contraseña:contraseña,
          icon:img,
          sesion:true
        };
        sessionStorage.setItem("UsuarioLogeado",JSON.stringify(UsuarioLogeado));
        formulario.submit();
      }else if(encontrado==false && error==true ){
        alert("usuario no encontrado");
      }



    });
  }