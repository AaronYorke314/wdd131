
const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const IDContainer = document.querySelector("#IDContainer");
const PContainer = document.querySelector("#PContainer");
const student = document.querySelector("#student");
const guest = document.querySelector("#guest");
const output = document.querySelector("#output");

function updateNotesField() {
  const value = travelRange.value;
  
  // Show the travel notes on the form if they are choosing many campuses and require it
  if (value === 'student') {
    IDContainer.hidden = false;
    student.required = false;
    PContainer.hidden = true;
    guest.required = false;
  } else if (value === 'guest'){
    IDContainer.hidden = true;
    student.required = false;
    PContainer.hidden = false;
    guest.required = false;
  } else {
    IDContainer.hidden = true;
    PContainer.hidden = true;
    student.required = false;
    guest.required = false;
  }
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.EventDate.value;
  
  // Let the user know if they choose many campuses but didn't put a note that they need to add a note
  if (type == 'student' && student.value.length !== 9) {
    output.textContent = 'Please Fill Out the 9 digit Student ID';
    return;
  }

  if (type == 'guest' && !guest.value.trim() !== 'EVENT131') {
    output.textContent = 'Please Fill Out the Promo Code';
    return;
  }

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return
  }

  

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>Date: ${availableDate}</p>
  <p>Clearance: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});