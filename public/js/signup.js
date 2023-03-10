const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username");
  const passwordEl = document.querySelector("#password");
  const emailEl = document.querySelector("#email");

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // document.location.replace("/dashboard");
    alert("New User Added!");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#form-submit")
  .addEventListener("click", signupFormHandler);
