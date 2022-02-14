

var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", function(event){
    
    event.preventDefault();

    //elige el formulario y toma los valors de los input
    var form=document.querySelector(".formAdicionar")
    var paciente = capturarDatosPacientes(form);
    //valido datos a cargar
    var errores = validarPaciente(paciente);
        if(errores.length > 0){
        exhibirmsjerrores(errores);
        return;
    }
    
    adicionarPacienteEnTabla(paciente);
    //limpiar formular
    form.reset();

    //limpiar lista de errores
    var limpiarerrores = document.querySelector("#error");
    limpiarerrores.innerHTML = "";
});

function adicionarPacienteEnTabla(paciente){
    pacientetr = construirtr(paciente);
    
}



 function construirtr(paciente){
    //crea las etiquetas a agregar al html
    var pacientetr = document.createElement("tr");
    pacientetr.classList.add("paciente");
    
    var tabla1 = document.querySelector("#tabla-pacientes");
    tabla1.appendChild(pacientetr);
    
    nombretd = construirtd(paciente.nombre,"info-nombre");
    pesotd = construirtd(paciente.peso,"info-peso");
    alturatd = construirtd(paciente.altura,"info-altura")
    gorduratd = construirtd(paciente.gordura,"info-gordura")
    imctd = construirtd(paciente.imc,"info-imc") 

    /* //asigna los valores a las etiquitas
    nombretd.textContent = paciente.nombre;
    pesotd.textContent = paciente.peso;
    alturatd.textContent = paciente.altura;
    gorduratd.textContent =  paciente.gordura;
    imctd.textContent = paciente.imc; */

    //elige la tabla para asignar la herencia
   
    if (imctd.textContent > 24){
        pacientetr.classList.add("paciente-incorrecto");
        }else{
        pacientetr.classList.add("paciente-correcto");

    } 
   //hace la herencia de las etiquetas
    pacientetr.appendChild(construirtd(paciente.nombre,"info-nombre"));
    pacientetr.appendChild(construirtd(paciente.peso,"info-peso"));
    pacientetr.appendChild(construirtd(paciente.altura,"info-altura"));
    pacientetr.appendChild(construirtd(paciente.gordura,"info-gordura"));
    pacientetr.appendChild(construirtd(paciente.imc,"info-imc"));


   

}



    function construirtd(dato,clase){
var td = document.createElement("td");
td.classList.add(clase);
td.textContent= dato;
return td;



}




function capturarDatosPacientes(form){
    var paciente = {
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculoImc(form.peso.value,form.altura.value),
   

    }
return paciente;

}


function validarPaciente(paciente){
    var errores = []
   
    if(paciente.nombre.length == 0){
        errores.push("Paciente sin nombre"); 
    }

    if(paciente.peso.length == 0){
        errores.push("Paciente sin peso"); 
    }

    if(paciente.altura.length == 0){
        errores.push("Paciente sin Altura"); 
    }

    if(paciente.gordura.length == 0){
        errores.push("Paciente sin gordura"); 
    }



    if(!validarPeso(paciente.peso)){
        errores.push("Peso Incorrecto");
   }
   if(!validarAltura(paciente.altura)){
        errores.push("Altura Incorrecta")}

        return errores;

     


}


function exhibirmsjerrores(errores){
var ul = document.querySelector("#error")
ul.innerHTML ="";
errores.forEach(function (msj) {
var li = document.createElement("li");
li.textContent = msj;
ul.appendChild(li);


li.classList.add("paciente-incorrecto");  


});


}

