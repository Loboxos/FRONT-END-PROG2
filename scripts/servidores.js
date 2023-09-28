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
        // Maneja el error si ocurre un error en la solicitud
    });
}

function mostrarServidores(servidores) {
    console.log("tiene muchos servidores")
        const contenedorServidores = document.getElementById("contenedorServidores");
    
        servidores.forEach(servidor => {
            const elementoServidor = document.createElement("div");
            elementoServidor.className = "servidor"; // Agrega una clase para estilizar cada servidor
    
            // Crea un elemento de imagen para la imagen del servidor (ajusta la propiedad "logo" según corresponda)
            const imagenServidor = document.createElement("img");
            imagenServidor.src = "/assets/servidores.png"; // Ajusta la propiedad "src" según la ubicación de la imagen
            imagenServidor.alt = "Imagen del servidor"; // Agrega un texto alternativo para la imagen
            imagenServidor.addEventListener("click", function () {

                // Aquí puedes agregar el código que deseas que ocurra al hacer clic en la imagen del servidor
                console.log("Se hizo clic en la imagen del servidor:", servidor.nombre);
                getCanales(servidor.id_servidor)
                // Por ejemplo, puedes redirigir al usuario a la página del servidor o realizar alguna otra acción.
            });
            // Crea un elemento de texto para el nombre del servidor
            const nombreServidor = document.createElement("p");
            nombreServidor.textContent = servidor.nombre;
    
            // Agrega la imagen y el nombre al elemento de servidor
            elementoServidor.appendChild(imagenServidor);
            elementoServidor.appendChild(nombreServidor);
    
            // Agrega el elemento de servidor al contenedor de servidores
            contenedorServidores.appendChild(elementoServidor);
        });
}

function mostrarMensajeSinServidores() {
    const mensajeSinServidores = document.getElementById("mensajeSinServidores");
    const h3A = document.createElement("h3");
    h3A.textContent = "Aun no te has unido a un servidor";

    const h3B = document.createElement("h3");
    h3B.textContent = "Intenta buscar uno o crea uno propio";

    // Agrega los elementos h3 a la sección mensajeSinServidores
    mensajeSinServidores.appendChild(h3A);
    mensajeSinServidores.appendChild(h3B);

}