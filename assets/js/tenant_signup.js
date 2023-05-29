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
 
  // function checkdata(){

  const first_name = document.getElementById("fname").value
  const last_name = document.getElementById("lname").value
  const email = document.getElementById("email").value
  const number_1 = document.getElementById("numb").value
  const number_2 = document.getElementById("number").value
  const Address = document.getElementById("subject").value
  const password_1 = document.getElementById("pass").value
  const password_2 = document.getElementById("password").value

  if (password_1 != password_2) {
    alert("Oops !! password and confirm password doesn't match.")
  }
  else {
    let Tenant = JSON.parse(localStorage.getItem("Tenant")) ?? [];
    let j = 0;
    for (let i = 0; i < Tenant.length; i++) {
      if (Tenant[i]["Email"] === email) {
        j = 1;
        break;
      }
    }
    if (j == 1) {
      alert("email already registered")
    }
    else {
      let user_data = {
        "Firstname": first_name,
        "Lastname": last_name,
        "Email": email,
        "phone_number": number_1,
        "phone_number1": number_2,
        "Address": Address,
        "password": password_1,
        "confirm_password": password_2,
        "request_receive_people": [],
        "upload_image": "",
        "upload_docs":"",
        "user_image":" "
      }
      Tenant.push(user_data)
      localStorage.setItem("Tenant_sign", JSON.stringify(user_data))
      let tenasign = JSON.parse(localStorage.getItem("Tenant_sign"))
      // let tet = JSON.parse(localStorage.getItem("Tenant_additional_det")) ?? [];
      localStorage.setItem("Tenant_additional_det", JSON.stringify(Tenant))
      localStorage.setItem("Tenant", JSON.stringify(Tenant))
      window.location.href = "tenant-profile.html?mail=" +tenasign["Email"]
      // console.log(user_data);
    }
  }
})
