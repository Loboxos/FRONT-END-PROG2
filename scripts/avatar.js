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

let avatarSeleccionado = null; 
function seleccionarAvatar(avatarNombre) {
    avatarSeleccionado = avatarNombre; 
  
    guardarAvatar()
}

function guardarAvatar() {
    if (avatarSeleccionado) {
    
        obtenerIdusuario().then(userId => {
            fetch("http://127.0.0.1:5000/usuarios/actualizar", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ avatar: avatarSeleccionado, userId: userId }), 
            })
            .then(response => {
                if (response.status === 200) {
                 
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
