document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    register();
})
function formatFecha(fecha) {
    var yyyy = fecha.getFullYear().toString();
    var mm = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Meses en JavaScript comienzan en 0
    var dd = fecha.getDate().toString().padStart(2, '0');
    return yyyy + '-' + mm + '-' + dd;
  }
function register() {
    // Obtener los elementos select por sus IDs
    var diaSelect = document.getElementById("dia");
    var mesSelect = document.getElementById("mes");
    var anioSelect = document.getElementById("anio");
    
    // Obtener los valores seleccionados de los elementos select
    var diaSeleccionado = diaSelect.value;
    var mesSeleccionado = mesSelect.value;
    var anioSeleccionado = anioSelect.value;
    
    // Crear una fecha en JavaScript con los valores seleccionados
    var fecha = new Date(anioSeleccionado, mesSeleccionado - 1, diaSeleccionado); // Meses en JavaScript comienzan en 0
    var fechaFormateada = formatFecha(fecha);

        const data = {
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            email: document.getElementById("email").value,
            fecha_nacimiento:fechaFormateada,
            contraseña: document.getElementById("contraseña").value,
            apodo: document.getElementById("usuario").value
        };
         
        fetch("http://127.0.0.1:5000/usuarios/crear", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        .then(response => {
            if (response.status === 201) {
                return response.json().then(data => {
                    window.location.href = "pantalla_3.html";
                });
            } else {
                return response.json().then(data => {
                    document.getElementById("message").innerHTML = data.message;
                });
            }
        })
        .catch(error => {
            document.getElementById("message").innerHTML = "An error occurred.";
        });
    
    }