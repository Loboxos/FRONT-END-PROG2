/*login*/
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    login();
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
            return response.json().then(data => {
                window.location.href = "pantalla_3.html";
            });
        } else {
            return response.json().then(data => {
                document.getElementById("errorMessage").textContent = data.message;
            });
        }
    })
    .catch(error => {
        document.getElementById("errorMessage").textContent = "Ocurrio un error";
    });
}

