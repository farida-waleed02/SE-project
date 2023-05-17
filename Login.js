function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("Please enter both username and password");
    } else if (username == "admin" && password == "password") {
        alert("Login successful");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
}