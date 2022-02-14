/* var titulo = document.querySelector(".titulo");
	console.log(titulo);
	console.log(titulo.textContent);
	titulo.textContent = "Hola";

	console.log(titulo.textContent);
	document.write("hola mundo"); */

var pacientes = document.querySelectorAll(".paciente");

    for(var i = 0; i< pacientes.length; i++){
    var priPeso = pacientes[i].querySelector(".info-peso").textContent;
    var peso = pacientes[i].querySelector(".info-peso");
    var priAltura = pacientes[i].querySelector(".info-altura").textContent;
    var altura = pacientes[i].querySelector(".info-altura");
    var prImc = pacientes[i].querySelector(".info-imc");
    prImc.textContent =calculoImc(priPeso,priAltura);
   
    pesoEsValido = validarPeso(priPeso);
    alturaEsValido = validarAltura(priAltura);
    
        if(!pesoEsValido){
        pacientes[i].classList.add("paciente-incorrecto");
        peso.textContent =("peso invalido");
        console.log(prImc.textContent);
        }

        if(!alturaEsValido){
        pacientes[i].classList.add("paciente-incorrecto");
        altura.textContent =("Altura invalido");
        console.log(prImc.textContent);
        }
    

     if (prImc.textContent > 24){
        pacientes[i].classList.add("paciente-incorrecto");
        }else{
        pacientes[i].classList.add("paciente-correcto");

    } 
}

    function calculoImc(peso,altura){ 
    
    var prImc2 = (peso/(altura*altura)).toFixed(2);
    return prImc2;
    
}


function validarPeso(peso){
    if(peso >= 0 && peso <= 300){

        return true;

    }else{
        return false;

    }
}

function validarAltura(altura){
    if(altura >= 0 && altura <= 2.5){

        return true;

    }else{
        return false;

    }
}











