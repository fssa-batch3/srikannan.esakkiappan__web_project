let form = document.querySelector(".formm")

let passwor = document.getElementById("password");

const togglePass = document.querySelector("#togglePassword");

togglePass.addEventListener("click", function () {
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
    const email = document.getElementById("emai").value
    const pass_word = document.getElementById("password").value

    const User_details = JSON.parse(localStorage.getItem("leaser"))
    let datas = {
        "username": email,
        "password": pass_word
    }
    let check;
    User_details.find(element => {

        if (element["email"] === email && element["password"] === pass_word) {
            localStorage.setItem("profile_details", JSON.stringify(datas))
            return check = 1
        }
        else {
            return check = 0
        }
    })

    if (check === 1) {

        window.location.href = "leaser-profile.html"
    }
    else {
        alert("Invalid")
    }

}
)