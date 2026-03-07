const form = document.getElementById("formularioo"); // error intencional (id incorrecto)

form.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    const respuesta = document.getElementById("respuesta");

    if(nombre === "" || email === "" || mensaje === ""){
        respuesta.textContent = "Por favor completa todos los campos";
        respuesta.classList.add("error");
        return;
    }

    respuesta.textContent = "Mensaje enviado correctamente";
    respuesta.classList.add("exito");

    form.reset();
});