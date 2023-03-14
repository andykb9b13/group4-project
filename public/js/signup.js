const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username");
  const passwordEl = document.querySelector("#password");
  const emailEl = document.querySelector("#email");

  console.log(usernameEl.value, passwordEl.value, emailEl.value);

  const response = await fetch("/api/user/", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/profile");
    alert("New User Added!");
  } else {
    alert("Failed to sign up");
  }
};

const loginRedirect = async (event) => {
  event.preventDefault();
  document.location.replace("/login");
};

document
  .querySelector("#signupBtn")
  .addEventListener("click", signupFormHandler);

document.querySelector("#loginBtn").addEventListener("click", loginRedirect);
