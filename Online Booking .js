// Validating all fields are filled and confirmation message

function validateForm() {
  var firstName = document.getElementById("f_name").value;
  var lastName = document.getElementById("l_name").value;
  var birthdate = document.getElementById("birthdate").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var dentist = document.getElementById("dentist").value;
  var timeslots = document.getElementById("timeslots").value;

  if (firstName == "" || lastName == "" || birthdate == "" || email == "" || phone == "" || dentist == "" || timeslots == "") {
    alert("Please fill in all the required fields.");
    return false;
  } else {
    // Show confirmation message
    alert("Appointment booked! Thank you " + firstName + " " + lastName + " for booking an appointment with " + dentist + " on " + timeslots + ".");
    return true;
  }
}

// Define the available timeslots for each dentist

const dentists = {
  "Dr.Reem Fakhry": ["Saturday 6 PM - 7 PM", "Saturday 7 PM - 8 PM", "Saturday 8 PM - 9 PM","Saturday 9 PM - 10 PM" ,"Sunday 6 PM - 7 PM", "Sunday 7 PM - 8 PM", "Sunday 8 PM - 9 PM","Sunday 9 PM - 10 PM"],
  "Dr.Dina Khaled": ["Monday 6 PM - 7 PM ","Monday 7 PM - 8 PM ","Monday 8 PM - 9 PM ","Monday 9 PM - 10 PM ", "Tuesday 6 PM- 7PM ", "Tuesday 7 PM- 8 PM ","Tuesday 8 PM- 9 PM ","Tuesday 9 PM- 10 PM "],
  "Dr.Abadir Ghaly": ["Wedneday 6 PM - 7 PM ", "Wednesday 7 PM - 8 PM ", "Wednesday 8 PM - 9 PM ","Wednesday 9 PM - 10 PM ","Thursday 6 PM - 7 PM ","Thursday 7 PM - 8 PM ","Thursday 8 PM - 9 PM ","Thursday 9 PM - 10 PM "]
};

// Function to populate the timeslots dropdown based on the selected dentist

function populateTimeslots() {
  const dentistSelect = document.getElementById("dentist");
  const timeslotSelect = document.getElementById("timeslots");

  // Clear the timeslots dropdown
  timeslotSelect.innerHTML = "<option value=''>--Select a time slot--</option>";

  // Get the selected dentist
  const selectedDentist = dentistSelect.value;

  // If a dentist has been selected, populate the timeslots dropdown with their available timeslots
  if (selectedDentist) {
    const timeslots = dentists[selectedDentist];

    for (let i = 0; i < timeslots.length; i++) {
      const timeslot = timeslots[i];
      const option = document.createElement("option");
      option.text = timeslot;
      option.value = timeslot;
      timeslotSelect.appendChild(option);
    }
  }
}
  
  
  