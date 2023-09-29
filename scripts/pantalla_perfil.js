// Obtener referencia a los elementos HTML en "perfil.html"
const nombreUsuarioElement = document.getElementById("nombreUsuario");
const avatarImgElement = document.getElementById("avatarImg");
const apodoUsuarioElement = document.getElementById("apodoUsuario");
const fechaNacimientoElement = document.getElementById("fechaNacimiento");
const emailUsuarioElement = document.getElementById("emailUsuario");

function getProfile() {
    const url = "http://127.0.0.1:5000/perfil";
    fetch(url, {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                // Llenar los elementos con los datos del perfil
                nombreUsuarioElement.textContent = `${data.nombre} ${data.apellidos}`;
                avatarImgElement.src = `/assets/${data.avatar}`; // Reemplaza la ruta adecuada
                apodoUsuarioElement.textContent = `Apodo: ${data.apodo}`;
                fechaNacimientoElement.textContent = `Fecha de Nacimiento: ${data.fecha}`;
                emailUsuarioElement.textContent = `Email: ${data.email}`;
            });
        } else {
            return response.json().then(data => {
                // Maneja el caso en el que la respuesta no sea 200 (por ejemplo, si hay un error)
                console.log("Error al obtener el perfil:", data.message);
            });
        }
    })
    .catch(error => {
        // Maneja errores de red u otros errores
        console.error("Ocurrió un error:", error);
    });
}

// Llamar a la función getProfile para obtener la información del perfil y llenar los elementos HTML
getProfile();
