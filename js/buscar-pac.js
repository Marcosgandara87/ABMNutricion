var btonbuscar = document.querySelector("#buscar-paciente");

btonbuscar.addEventListener("click", function(){
var xhr = new XMLHttpRequest;

xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");

xhr.addEventListener("load",function(){

var errorajax = document.querySelector("#error-ajax");
if (xhr.status ==200){
    errorajax.classList.add("invisible");
    var respuesta = xhr.responseText;
    var pacientes = JSON.parse(respuesta);
    pacientes.forEach(function(paciente){
    adicionarPacienteEnTabla(paciente);

});



}else{
    errorajax.classList.remove("invisible");
    errorajax.classList.add("paciente-incorrecto");
}

});

xhr.send();


});
