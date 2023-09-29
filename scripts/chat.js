function getChat(id_canal) {
    const channelsUrl = `http://127.0.0.1:5000/chat/${id_canal}`;
    
    fetch(channelsUrl, {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 200) {
            return response.json().then(mensajes => {
                // Aquí tienes la lista de canales, puedes mostrarlos en la segunda columna
                console.log("usted esta aqui")
                mostrarChat(mensajes);
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
    function mostrarChat(mensajes) {
        const columnaMensajes = document.getElementById("columnaMensajes");
      
        columnaMensajes.innerHTML = "";
        console.log(mensajes)
        mensajes.forEach(msj => {
          // Crea un elemento de canal
          const elementoMsj = document.createElement("div");
          elementoMsj.className = "mensaje"; // Agrega una clase para estilizar cada canal

          const imagenMsj = document.createElement("img");
          imagenMsj.src = "/assets/messi.png"; // Ajusta la propiedad "src" según la ubicación de la imagen
          imagenMsj.alt = "Imagen del canal"; // Agrega un texto alternativo para la imagen
          imagenMsj.addEventListener("click", function () {
    
              // Aquí puedes agregar el código que deseas que ocurra al hacer clic en la imagen del servidor
              console.log("Se hizo clic en la imagen del chat");
              
              // Por ejemplo, puedes redirigir al usuario a la página del servidor o realizar alguna otra acción.
          });
    
          // Crea un elemento de texto para el nombre del canal
          const mensaje = document.createElement("p");
          mensaje.textContent = msj.mensaje;
           

              // Crea un elemento de texto para el nombre del canal
            const fecha = document.createElement("p");
            fecha.textContent = msj.fecha_mensaje;

          // Agrega el nombre y descripción al elemento de canal
          elementoMsj.appendChild(imagenMsj);
          elementoMsj.appendChild(mensaje);
          elementoMsj.appendChild(fecha);
         


         
      
          // Agrega el elemento de canal a la columna de canales
          columnaMensajes.appendChild(elementoMsj);
        });
      }
      