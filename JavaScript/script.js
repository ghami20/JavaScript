/*var valor1 = 10;
let valor2 = "Algo";
const valor3= "Algo1";
console.log(valor1);
console.log(valor2);
console.log(valor3);

if (valor2==valor3) {
    console.log("El valor es igual");
} else {
    console.log("El valor es distinto");
}

window.onload=function(){
    var numero= prompt("Ingrese numero ");
    console.log(numero);
        var numeros=[];
        for (let index = 0; index < numero; index++) {
            numeros[index]=Math.random()* 20;
            console.log(numeros[index]);
        }
        console.log("El largo del array es: "+numeros.length);
}
*/

function IniciarSesion(){
    alert("Esta inciando sesion");
}
window.onload=function(){
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
        if(contraseña.length=="" || contraseña.length<5){
            errorC.style="display:block";
            error=false;
        }else{
            errorC.style="display:none";
            error=true;
        }
        if(error==true && usuario=="Gamaliel" ){
            formulario.action="Alternativa.html";
            formulario.submit();
        } if(error==true){
            formulario.submit();
        }


    });
}
