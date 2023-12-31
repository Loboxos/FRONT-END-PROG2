function getProfile() {
    const url = "http://127.0.0.1:5000/perfil";
    fetch(url, {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                const usuarioId = data.id_usuario;
                const nombre = data.nombre;
                const avatar = data.avatar;
                crearElementoPerfil(nombre,avatar);
                obtenerServidores(usuarioId);
            });
        } else {
            return response.json().then(data => {
                document.getElementById("message").innerHTML = data.message;
            });
        }
    })
    .catch(error => {
        /*document.getElementById("message").innerHTML = "Ocurrió un error.";
    */
     console.log("error")
    });
};

function crearElementoPerfil(nombre,avatar) {
    const contenedorPerfil = document.querySelector(".perfil");
    contenedorPerfil.innerHTML = ""; 
    
    const imagenUsuario = document.createElement("img");
    imagenUsuario.src = "/assets/"+avatar; 
    imagenUsuario.alt = "imagen_perfil";

    const nombreUsuario = document.createElement("p");
    nombreUsuario.textContent = nombre;


    imagenUsuario.addEventListener("click", function () {
        window.location.href = "perfil.html";
    });

    contenedorPerfil.appendChild(imagenUsuario);
    contenedorPerfil.appendChild(nombreUsuario);
}



getProfile()