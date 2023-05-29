let form = document.querySelector("form")
let password = document.getElementById("pass");
let passwor = document.getElementById("password");

const togglePass = document.querySelector("#togglePassword");

const togglePass1 = document.querySelector("#togglePassword1");

togglePass.addEventListener("click", function () {
  // toggle the type attribute
  if (password.type === "password") {
    password.type = "text";
  } else{
    password.type = "password";
  }
  this.classList.toggle("bi-eye");
});

togglePass1.addEventListener("click", function () {
  // toggle the type attribute
  if(passwor.type === "password"){
    passwor.type = "text";
  }else{
    passwor.type = "password";
  }
  this.classList.toggle("bi-eye");
});


form.addEventListener("submit", e => {
  e.preventDefault()

  const firstname = document.getElementById("fname").value.trim()
  const lastname = document.getElementById("lname").value.trim()
  const email = document.getElementById("email").value.trim()
  const number1 = document.getElementById("numb").value.trim()
  const number2 = document.getElementById("number").value.trim()
  const address = document.getElementById("subject").value.trim()
  const location = document.getElementById("sub").value;
  const password1 = document.getElementById("pass").value.trim()
  const password2 = document.getElementById("password").value.trim()



  if (password1 != password2) {
    alert("Oops !! password and confirm password doesn't match.")
  }
  else {
    let leaser = JSON.parse(localStorage.getItem("leaser")) ?? [];
    let j = 0;
    for (let i = 0; i < leaser.length; i++) {
      if (leaser[i]["email"] === email) {
        j = 1;
        break;
      }
    }
    if (j == 1) {
      alert("email already registered")
    }
    else {

      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
      }
      else {
        alert("Geolocation is not supported by this browser.")
      }
      function showPosition(position) {

        let lattitude = position.coords.latitude
        let longitude = position.coords.longitude
        console.log(lattitude, longitude); // 13.0963045  80.2865916
        let user_data = {
          "firstname": firstname,
          "lastname": lastname,
          "email": email,
          "phone_number": number1,
          "phone_number1": number2,
          "address": address,
          "location" : location,
          "password": password1,
          "confirm_password": password2,
          "Lattitude": lattitude,
          "Longitude": longitude,
          "upload_image":" ",
          "upload_docs":" ",
          "user_image" : " "
        }

        leaser.push(user_data)
        localStorage.setItem("leas_signup",JSON.stringify(user_data))
        let leasign = JSON.parse(localStorage.getItem("leas_signup"))
        console.log(leasign);
        localStorage.setItem("leaser_modify_data",JSON.stringify(leaser))
        localStorage.setItem("leaser",JSON.stringify(leaser))
        window.location.href = "leaser-profile.html?mail=" +leasign["email"]  
      }
    }
  }
})

