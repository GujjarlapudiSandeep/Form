document.querySelector("#formTag").addEventListener("submit", myFunction);

function myFunction() {
  // event.preventDefault(); // Prevent the form from submitting
  // Get the values from the form fields
  let firstName = document.querySelector(".firstname").value;
  let lastName = document.querySelector(".lastname").value;
  let email = document.querySelector("#email").value;
  let hobbies = document.querySelector("#hobbies").value;
  let birthYear = document.querySelector("#birthyear").value;
  // Get the selected gender
  let gender = document.querySelector("#gender").value;
  // Log the form values to the console
  console.log(firstName, lastName, email, hobbies, birthYear, gender);
  // Check if all fields are filled, then display an alert
  if (firstName && lastName && email && hobbies && birthYear && gender) {
    alert("Submitted Successfully!"); // Show success alert
  } else {
    alert("Please fill all the fields!"); // If any field is missing
  }
}
