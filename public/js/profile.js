// get user that is currently logged in.

// request data from database about that user

// render that data to the profile page

// access that data on the profile page

// get user from sessionStorage
const getUser = async () => {
  const currentUser = sessionStorage.getItem(email);
  const response = await fetch(`api/user/${currentUser}`, {
    method: "GET",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });
  console.log("This is the response from the getUser", response);
};

getUser();
