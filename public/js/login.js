const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    const response = await fetch("api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

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
