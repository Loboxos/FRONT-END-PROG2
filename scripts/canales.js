function getCanales(id_servidor) {
const channelsUrl = `http://127.0.0.1:5000/canales/${id_servidor}`;

fetch(channelsUrl, {
    method: 'GET',
    credentials: 'include'
})
.then(response => {
    if (response.status === 200) {
        return response.json().then(canales => {
            // Aquí tienes la lista de canales, puedes mostrarlos en la segunda columna
            mostrarCanales(canales);
            console.log("usted esta aqui")
        });
    } else {
        console.log("La respuesta es 404");
        /*mostrarMensajeSinCanales();*/
    }
})
.catch(error => {
    console.log("error")
    // Maneja el error si ocurre un error en la solicitud
});
}
function mostrarCanales(canales) {
    const columnaCanales = document.getElementById("columnaCanales");
  
    // Limpia cualquier contenido anterior en la columna de canales
    columnaCanales.innerHTML = "";
  
    canales.forEach(canal => {
      // Crea un elemento de canal
      const elementoCanal = document.createElement("div");
      elementoCanal.className = "canal"; // Agrega una clase para estilizar cada canal
  
      // Crea un elemento de texto para el nombre del canal
      const nombreCanal = document.createElement("p");
      nombreCanal.textContent = canal.nombre;
  
      // Crea un elemento de texto para la descripción del canal
      const descripcionCanal = document.createElement("p");
      descripcionCanal.textContent = canal.descripcion;
  
      // Agrega el nombre y descripción al elemento de canal
      elementoCanal.appendChild(nombreCanal);
      elementoCanal.appendChild(descripcionCanal);
  
      // Agrega el elemento de canal a la columna de canales
      columnaCanales.appendChild(elementoCanal);
    });
  }
  