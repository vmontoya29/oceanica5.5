function login(){
    var user, password

    user = document.getElementById("Usuario").value;
    password = document.getElementById("Contraseña").value;

    if(user == "Profesor" && password == "1234"){
        window.location = "/Profesor.html";
        alert("Bienvenido Profesor")
    }else{
        if(user == "Administrador" && password == "1234"){
            window.location = "/administrador.html"
            alert("Bienvenido administrador")
        }else{
            alert("datos incorrectos")
        }
    }
}