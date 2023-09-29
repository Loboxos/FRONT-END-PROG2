function getCanales(id_servidor) {
const channelsUrl = `http://127.0.0.1:5000/canales/${id_servidor}`;

fetch(channelsUrl, {
    method: 'GET',
    credentials: 'include'
})
.then(response => {
    if (response.status === 200) {
        return response.json().then(canales => {
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
});
}
function mostrarCanales(canales) {
    const columnaCanales = document.getElementById("columnaCanales");
  
    columnaCanales.innerHTML = "";
    console.log(canales)
    canales.forEach(canal => {
      const elementoCanal = document.createElement("div");
      elementoCanal.className = "canal"; 
  
      const imagenCanal = document.createElement("img");
      imagenCanal.src = "/assets/canales.png"; 
      imagenCanal.alt = "Imagen del canal"; 
      imagenCanal.addEventListener("click", function () {

       
          console.log("Se hizo clic en la imagen del canal:", canal.nombre);
          getChat(canal.id_canal)
        
      });



      const nombreCanal = document.createElement("p");
      nombreCanal.textContent = canal.nombre;
      
      elementoCanal.appendChild(imagenCanal);
      elementoCanal.appendChild(nombreCanal);
     
  
      columnaCanales.appendChild(elementoCanal);
    });
  }
  