function register() {
    let username = document.getElementById("regUser").value;
    let password = document.getElementById("regPass").value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration Successful!");
    window.location.href = "index.html";
}

function login() {
    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (username === savedUser && password === savedPass) {
        alert("Login Successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid Username or Password");
    }
}

function logout() {
    window.location.href = "index.html";
}
