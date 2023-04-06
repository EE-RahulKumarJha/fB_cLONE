function handleSubmit(event) {
  event.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value;

  const data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    gender: gender,
  };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "signup.txt", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(data));

  alert("Thank you for signing up!");
  event.target.reset();
}
