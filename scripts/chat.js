function getChat(id_canal) {
    const channelsUrl = `http://127.0.0.1:5000/chat/${id_canal}`;
    
    fetch(channelsUrl, {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 200) {
            return response.json().then(mensajes => {
            
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
   
    });
    }
    function mostrarChat(mensajes) {
        const columnaMensajes = document.getElementById("columnaMensajes");
    
        columnaMensajes.innerHTML = "";
    
        
        mensajes.forEach(msj => {
     
            const elementoMsj = document.createElement("div");
            elementoMsj.className = "mensaje";
    
        
            const imagenMsj = document.createElement("img");
            imagenMsj.src = "/assets/messi.png";
            imagenMsj.alt = "Imagen del mensaje";
    
    
            const mensaje = document.createElement("p");
            mensaje.textContent = msj.mensaje;
    
         
            const fecha = document.createElement("p");
            fecha.textContent = msj.fecha_mensaje;
    
       
            elementoMsj.appendChild(imagenMsj);
            elementoMsj.appendChild(mensaje);
            elementoMsj.appendChild(fecha);
    
            columnaMensajes.appendChild(elementoMsj);
        });
    
        const enviarMensajeForm = document.createElement("form");
        enviarMensajeForm.id = "enviarMensajeForm";
    
        const inputMensaje = document.createElement("input");
        inputMensaje.type = "text";
        inputMensaje.id = "nuevoMensaje";
        inputMensaje.placeholder = "Escribe tu mensaje aquí";
        inputMensaje.required = true;
    
        const enviarButton = document.createElement("button");
        enviarButton.type = "submit";
        enviarButton.textContent = "Enviar";
    
        enviarMensajeForm.addEventListener("submit", function (event) {
            event.preventDefault();
            enviarMensaje(); 
        });
    
        enviarMensajeForm.appendChild(inputMensaje);
        enviarMensajeForm.appendChild(enviarButton);
    
        columnaMensajes.appendChild(enviarMensajeForm);
    }
    
      
      