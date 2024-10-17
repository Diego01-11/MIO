document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevenir que el formulario se envíe

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
