function obtenerServidores(usuarioId) {
    const url = `http://127.0.0.1:5000/servidores/${usuarioId}`;
    fetch(url, {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 200) {
            return response.json().then(servidores => {
                console.log(servidores)
       if (servidores.length != 0) {
         mostrarServidores(servidores);
          }

            });
        } else {
            console.log("la respuesta es 404")
            mostrarMensajeSinServidores();
                }
    })
    .catch(error => {
       
    });
}

function mostrarServidores(servidores) {
    console.log("tiene muchos servidores")
        const contenedorServidores = document.getElementById("contenedorServidores");
    
        servidores.forEach(servidor => {
            const elementoServidor = document.createElement("div");
            elementoServidor.className = "servidor"; 
    
            const imagenServidor = document.createElement("img");
            imagenServidor.src = "/assets/servidores.png"; 
            imagenServidor.alt = "Imagen del servidor"; 
            imagenServidor.addEventListener("click", function () {

                console.log("Se hizo clic en la imagen del servidor:", servidor.nombre);
                getCanales(servidor.id_servidor)
            });
            const nombreServidor = document.createElement("p");
            nombreServidor.textContent = servidor.nombre;
    
            elementoServidor.appendChild(imagenServidor);
            elementoServidor.appendChild(nombreServidor);
    
            contenedorServidores.appendChild(elementoServidor);
        });
}

function mostrarMensajeSinServidores() {
    const mensajeSinServidores = document.getElementById("mensajeSinServidores");
    const h3A = document.createElement("h3");
    h3A.textContent = "Aun no te has unido a un servidor";

    const h3B = document.createElement("h3");
    h3B.textContent = "Intenta buscar uno o crea uno propio";

     
    mensajeSinServidores.appendChild(h3A);
    mensajeSinServidores.appendChild(h3B);

}