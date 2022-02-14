//hacemos filtro
var filtro = document.querySelector("#filtro-tabla");

filtro.addEventListener("input",function(){
    
    //cargamos los pacientes
    var pacientes = document.querySelectorAll(".paciente")
   console.log(pacientes)

    for(var i = 0; i <pacientes.length;i++){
    //tomamos el nombre
    var tdNombre = pacientes[i].querySelector(".info-nombre").textContent;
    //la exprecion sirve para que busque tanto mayuscula como minuscula y si esta dentro de la cadena de caracteres
    var expresion = new RegExp(this.value,"i");
    //consulto si lo que busco esta en alguna parte del nombre
    if (!expresion.test(tdNombre)){
            pacientes[i].classList.add("invisible");

        }else{
            pacientes[i].classList.remove("invisible");

        }
    
        if (this.value == ""){
            pacientes[i].classList.remove("invisible");}

    }



});


