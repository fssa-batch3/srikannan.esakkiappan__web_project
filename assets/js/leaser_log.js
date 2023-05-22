let form = document.querySelector(".formm")
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