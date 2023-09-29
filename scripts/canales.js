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
            console.log("usted esta aqui")
            mostrarCanales(canales);
           
        });
    } else {
        console.log("La respuesta es 404");
        /*mostrarMensajeSinCanales();*/
    }
})
.catch(error => {
    console.log("hola soy un error")
    // Maneja el error si ocurre un error en la solicitud
});
}
function mostrarCanales(canales) {
    const columnaCanales = document.getElementById("columnaCanales");
  
    // Limpia cualquier contenido anterior en la columna de canales
    columnaCanales.innerHTML = "";
    console.log(canales)
    canales.forEach(canal => {
      // Crea un elemento de canal
      const elementoCanal = document.createElement("div");
      elementoCanal.className = "canal"; // Agrega una clase para estilizar cada canal
  
      const imagenCanal = document.createElement("img");
      imagenCanal.src = "/assets/canales.png"; // Ajusta la propiedad "src" según la ubicación de la imagen
      imagenCanal.alt = "Imagen del canal"; // Agrega un texto alternativo para la imagen
      imagenCanal.addEventListener("click", function () {

          // Aquí puedes agregar el código que deseas que ocurra al hacer clic en la imagen del servidor
          console.log("Se hizo clic en la imagen del canal:", canal.nombre);
          /*getChat(servidor.id_servidor)*/
          // Por ejemplo, puedes redirigir al usuario a la página del servidor o realizar alguna otra acción.
      });



      // Crea un elemento de texto para el nombre del canal
      const nombreCanal = document.createElement("p");
      nombreCanal.textContent = canal.nombre;
      
      // Agrega el nombre y descripción al elemento de canal
      elementoCanal.appendChild(imagenCanal);
      elementoCanal.appendChild(nombreCanal);
     
  
      // Agrega el elemento de canal a la columna de canales
      columnaCanales.appendChild(elementoCanal);
    });
  }
  