function obtenerIdusuario() {
    const url = "http://127.0.0.1:5000/perfil";
    return fetch(url, {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                return data.id_usuario;
            });
        }
    });
}


let avatarSeleccionado = null; // Variable para almacenar la selección del avatar

function seleccionarAvatar(avatarNombre) {
    avatarSeleccionado = avatarNombre; // Almacenar la selección del usuario
    // Agregar algún estilo para resaltar la selección visualmente si es necesario
    guardarAvatar()
}

function guardarAvatar() {
    if (avatarSeleccionado) {
        // Enviar la selección al servidor para actualizar el perfil del usuario
        // Usar una solicitud Fetch para enviar avatarSeleccionado y el ID del usuario al servidor
        obtenerIdusuario().then(userId => {
            fetch("http://127.0.0.1:5000/usuarios/actualizar", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ avatar: avatarSeleccionado, userId: userId }), // Reemplazar userId con el ID del usuario
            })
            .then(response => {
                if (response.status === 200) {
                    // Redirigir al usuario a donde desees después de actualizar el avatar
                    window.location.href = "pantalla_3.html";
                } else {
                    console.error("Error al actualizar el avatar");
                }
            })
            .catch(error => {
                console.error("Error de red:", error);
            });
        });
    } else {
        console.error("Ningún avatar seleccionado");
    }
}
