var users = JSON.parse(localStorage.getItem('users')) || [];
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = users.find(user => user.username === username && user.password === password);
  if (user) {
    window.location.href = "success.html";
    return false;
  } else {
    alert("Invalid username or password. Please try again.");
    return false;
  }
}
function addUser() {
  var username = document.getElementById("new-username").value;
  var password = document.getElementById("new-password").value;
  var existingUser = users.find(user => user.username === username);
  if (existingUser) {
    alert("Username already exists. Please choose a different one.");
    return;
  }
  users.push({ username: username, password: password });
  localStorage.setItem('users', JSON.stringify(users));
  alert("User created successfully!");
}
