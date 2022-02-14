var pacientes = document.querySelectorAll(".paciente");



var tabla = document.querySelector("#tabla-pacientes");
//tomo la tabla
tabla.addEventListener("dblclick",function(event){
event.target.parentNode.classList.add("fadeOut");


    //elijo la etiqueta y elimino con el padre para borrar la lista
setTimeout(function(){
    event.target.parentNode.remove();
}, 500); 
    
console.log("Hicieron Click");

});




/* pacientes.forEach(function(paciente){
paciente.addEventListener("dblclick",function(){
console.log("Realizaron 2 clicks");
this.remove();


});


}); */