
   window.onload=function(){

    var usuarios=[
      {
        nombre:"gamaliel",
        contraseña:1234
      }, {
        nombre:"natanael",
        contraseña:1234
      }, {
        nombre:"ghami",
        contraseña:1234
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
        if(usuario.length=="" || usuario.length<5){
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
        var noencontrado=true;
        for (let index = 0; index < usuarios.length; index++){   
          console.log(usuarios[index].nombre);
          console.log(usuario);
          if(error==true && usuarios[index].nombre==usuario){
              formulario.action="inicio.html";
              noencontrado=true
              index=usuarios.length;
            }else{
              noencontrado=false;
            }
          }
          if(noencontrado==true){
            formulario.submit();
          }
          

    });
}

