// Obtén el contenedor donde agregarás los nuevos elementos
const contenedor = document.getElementById("contenedorBotones");

// Crea un nuevo botón
const nuevoBoton = document.createElement("button");
nuevoBoton.className = "boton"; // Aplica las mismas clases que a los botones existentes
nuevoBoton.innerHTML = '<img src="/ruta/a/la/imagen.png" alt="Nuevo botón"><br><p>Nuevo elemento</p>';

// Agrega el nuevo botón al contenedor
contenedor.appendChild(nuevoBoton);
