// js file for manipulating elements on profile page

const logout = async () => {
  try {
    const response = await fetch("api/user/logout", {
      method: "POST",
    });
    if (response.ok) {
      document.location.replace("/login");
      alert("You are now logged out");
    }
  } catch (err) {
    alert("Couldn't log out!");
  }
};

const activityRedirect = async (event) => {
  event.preventDefault();
  document.location.replace("/activity");
};

document.querySelector("#logoutBtn").addEventListener("click", logout);
document
  .querySelector("#activityBtn")
  .addEventListener("click", activityRedirect);
