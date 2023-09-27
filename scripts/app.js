/*login*/
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    login();
})

/* register */
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    register();
})

function login() {
    const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    fetch("http://127.0.0.1:5000/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 200) {
            // Redirect to profile page if login is successful
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

    const data = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        email: document.getElementById("email").value,
        fecha_nacimiento:fecha,
        contraseña:getElementById("contraseña").value,
        apodo: getElementById("usuario").value
    };
    console.log(data)
     
    fetch("http://127.0.0.1:5000/usuarios/crear", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 200) {
            // Redirect to profile page if login is successful
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


let crearServidorBtn = document.getElementById ("crearServidor")
let buscarServidorBtn = document.getElementById ("buscarServidor")
const medicinaBtn = document.getElementById ("medicina");
let musicaBtn = document.getElementById ("musica");
let juegosBtn = document.getElementById ("juegos");
let deportesBtn = document.getElementById ("deportes");
let literaturaBtn = document.getElementById ("literatura");
let viajesBtn  = document.getElementById ("viajes");
let cineBtn = document.getElementById ("cine");

crearServidorBtn.addEventListener("click",function(){
})
crearServidorBtn.addEventListener("mouseover",() =>{       
});

buscarServidorBtn.addEventListener("click",function(){
})
buscarServidorBtn.addEventListener("mouseover",() =>{       
});

medicinaBtn.addEventListener("mouseover",()=>{   
    medicinaBtn.textContent = "Salud y Bienestar";    
});
medicinaBtn.addEventListener("mouseout", ()=> {
    medicinaBtn.textContent = "Medicina"; // Vuelve al texto original cuando se retira el mouse
});
medicinaBtn.addEventListener("click",function(){       
});

musicaBtn.addEventListener("click",function(){ 
})
musicaBtn.addEventListener("mouseover",() =>{       
});

juegosBtn.addEventListener("click",function(){ 
})
juegosBtn.addEventListener("mouseover",() =>{       
});

deportesBtn.addEventListener("click",function(){   
})
deportesBtn.addEventListener("mouseover",() =>{       
});

literaturaBtn.addEventListener("click",function(){
})
literaturaBtn.addEventListener("mouseover",() =>{       
});

viajesBtn.addEventListener("click",function(){
})
viajesBtn.addEventListener("mouseover",() =>{       
});

cineBtn.addEventListener("click",function(){
})
cineBtn.addEventListener("mouseover",() =>{       
});
