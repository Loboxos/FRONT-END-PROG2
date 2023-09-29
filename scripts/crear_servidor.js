// Primero define la función obtenerIdUsuario
function obtenerIdUsuario() {
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

document.getElementById("crearServidorForm").addEventListener("submit", function (event) {
    event.preventDefault();

    obtenerIdUsuario().then(userId => {
        const formData = new FormData(document.getElementById("crearServidorForm"));
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        data['id_usuario'] = userId;

        fetch("http://127.0.0.1:5000/servidores/crear", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        .then(response => {
            if (response.status === 201) {
                alert("Servidor creado exitosamente");
                window.location.href = "pantalla_3.html";
            } else {
                alert("Error al crear el servidor");
            }
        })
        .catch(error => {
            console.error("Error de red:", error);
        });
    });
});
