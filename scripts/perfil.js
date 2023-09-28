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
getProfile()