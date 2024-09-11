document.querySelector("#formTag").addEventListener("submit", myFunction);

function myFunction() {
  event.preventDefault();
  let firstName = document.querySelector(".firstname").value;
  let lastName = document.querySelector(".lastname").value;
  let email = document.querySelector("#email").value;
  let hobbies = document.querySelector("#hobbies").value;
  let birthYear = document.querySelector("#birthyear").value;
  let gender = document.querySelector("#gender").value;
  console.log(firstName, lastName, email, hobbies, birthYear, gender);
}
