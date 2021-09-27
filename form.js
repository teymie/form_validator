const myName = document.getElementById("name");
const phone = document.getElementById("number");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
submit.addEventListener("click", function validate(e) {
  // e.preventDefault();
  let text;
  let letters = /^[A-za-z]+$/;
  if (myName.value == "") {
    text = "Name cannot be empty!";
    document.getElementById("demo").innerText = text;
    myName.focus();
    return false;
  }
  if (myName.value.match(letters)) {
    text = "";
    document.getElementById("demo").innerText = text;
    return false;
  } else {
    text = "Please input alphabet characters only";
    document.getElementById("demo").innerText = text;
    myName.focus();
    return false;
  }
});
submit.addEventListener("click", function valiDate(e) {
  // e.preventDefault();
  if (phone.value == "" || isNaN(phone.value) || phone.value.length !== 11) {
    text = "Please enter a valid 11 digit number!";
    document.getElementById("demo2").innerText = text;
    phone.focus();
    document.getElementById("demo2").innerText = text;
    phone.focus();
    return false;
  } else {
    text = "";
    document.getElementById("demo2").innerText = text;
    phone.focus();
    return false;
  }
});
submit.addEventListener("click", function validAte(e) {
  // e.preventDefault();
  let atposition = email.value.indexOf("@");
  let dotposition = email.value.lastIndexOf(".");
  if (atposition < 1 || dotposition - atposition < 2 || email.value == "") {
    text = "Please enter a valid Email!";
    document.getElementById("demo3").innerHTML = text;
    email.focus();
    return false;
  } else {
    text = "";
    document.getElementById("demo3").innerText = text;
    email.focus();
    return false;
  }
});

// submit.addEventListener("click", function formz(e) {
//   e.preventDefault();
//   let myname = document.Regform.name.value;
//   let text;
//   if (myname == "tolulope") {
//     text = "correct !";
//     // return false;
//   } else {
//     text = "Enter a correct name !";
//     // return false;
//   }
//   document.getElementById("demo").innerHTML = text;
// });
