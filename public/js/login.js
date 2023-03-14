const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  console.log("This is the username", username);
  console.log("This is the password", password);

  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    console.log("this is the response", response);

    if (response.ok) {
      // document.location.replace("/");
      alert("Login Successful");
    } else {
      alert("Login failed");
    }
  }
};

document
  .querySelector("#form-submit")
  .addEventListener("click", loginFormHandler);
