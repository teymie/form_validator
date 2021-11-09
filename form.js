const myName = document.getElementById("name");
const phone = document.getElementById("number");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
submit.addEventListener("click", validator);
function validator(e) {
  e.preventDefault();
  let text;
  let letters = /^[a-zA-Z\s]*$/;
  if (myName.value == "") {
    text = "Name cannot be empty!";
    document.getElementById("demo").innerText = text;
    myName.focus();
  }
  let checkName = myName.value.match(letters);
  if (checkName) {
    text = "";
    document.getElementById("demo").innerText = text;
  } else {
    text = "Please input alphabet characters only";
    document.getElementById("demo").innerText = text;
    myName.focus();
  }
  let checkNumber =
    phone.value == "" || isNaN(phone.value) || phone.value.length !== 11;
  if (checkNumber) {
    text = "Please enter a valid 11 digit number!";
    document.getElementById("demo2").innerText = text;
    phone.focus();
    document.getElementById("demo2").innerText = text;
    phone.focus();
  } else {
    text = "";
    document.getElementById("demo2").innerText = text;
  }
  let atposition = email.value.indexOf("@");
  let dotposition = email.value.lastIndexOf(".");
  let checkEmail =
    atposition < 1 || dotposition - atposition < 2 || email.value == "";
  if (checkEmail) {
    text = "Please enter a valid Email!";
    document.getElementById("demo3").innerHTML = text;
    email.focus();
  } else {
    text = "";
    document.getElementById("demo3").innerText = text;
    email.focus();
  }
  if (checkName && checkNumber != true && checkEmail != true) {
    alert("submitted!");
  }
}
