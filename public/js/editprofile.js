const editProfileForm = async function (event) {
    event.preventDefault();
  
    const ageEl = document.querySelector("#age-input");
    const locationEl = document.querySelector("#location-input");
    const heightEl = document.querySelector("#height-input");
    const startingWeightEl = document.querySelector("#starting-weight-input")
  
    console.log(passwordEl.value, emailEl.value);
  
    const response = await fetch("/api/user/", {
      method: "POST",
      body: JSON.stringify({
        name: ageEl.value,
        location: locationEl.value,
        height: heightEl.value,
        starting_weight: startingWeightEl.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/profile");
      alert("Profile updated!");
    } else {
      alert("Failed to update profile.");
    }
  };
  
  const loginRedirect = async (event) => {
    event.preventDefault();
    document.location.replace("/login");
  };
  
  document
    .querySelector("#edit-profile")
    .addEventListener("click", editProfileForm);
  

  