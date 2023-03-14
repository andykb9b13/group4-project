// import VanillaCalendar from "@uvarov.frontend/vanilla-calendar";
// import "@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css";
// import "@uvarov.frontend/vanilla-calendar/build/themes/light.min.css";
// import "@uvarov.frontend/vanilla-calendar/build/themes/dark.min.css";

// //https://vanilla-calendar.frontend.uvarov.tech/api/ api documentation to reference later

// const calendar = new VanillaCalendar("#calendar");
// calendar.init();

const addActivity = async (event) => {
  event.preventDefault();

  const entry_date = "2023-3-19";
  const duration = document.querySelector("#duration").value;
  const distance = document.querySelector("#distance").value;

  try {
    const response = await fetch("/api/post/activity", {
      method: "POST",
      body: JSON.stringify({
        entry_date,
        duration,
        distance,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  } catch (err) {
    console.log("There was an error adding the activity", err);
  }
};

document.querySelector("#saveBtn").addEventListener("click", addActivity);
