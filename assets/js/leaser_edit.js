let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let email = document.getElementById("email")
let numb = document.getElementById("numb")
let number = document.getElementById("number")
let address = document.getElementById("subject")
let locat = document.getElementById("sub")
let pass = document.getElementById("pass")
let password = document.getElementById("password")
let land_img = document.getElementById("land_img")
let land_docs = document.getElementById("land_docs")
let user_img = document.getElementById("user_img")
let leas_sign = JSON.parse(localStorage.getItem("leas_signup"));
console.log(leas_sign);
let data = JSON.parse(localStorage.getItem("leaser"))
let dataa = JSON.parse(localStorage.getItem("leaser_modify_data"))
let profile = JSON.parse(localStorage.getItem("profile_details"));
console.log(data)
console.log(profile)

const url = window.location.search;
const urlParams = new URLSearchParams(url)
let mail = urlParams.get('mail');

let check;
check = data.find(e => {
    let e_mai = e["email"]
    if (mail === e_mai) {
        return true;
    }

})

console.log(check)

if (check == undefined) {
    data.find(l => {
        if (l["email"] === profile["username"]) {
            return check = l;
        }
    })
}
// check["upload_image"]=" ",
// check["upload_docs"]=" ",
// check["user_image"]=" "
// localStorage.setItem("leaser",JSON.stringify(data))

fname.value = check["firstname"]
lname.value = check["lastname"]
email.value = check["email"]
numb.value = check["phone_number"]
number.value = check["phone_number1"]
address.value = check["address"]
locat.value = check["location"]
pass.value = check["password"]
password.value = check["confirm_password"]
land_img.value = check["upload_image"]
land_docs.value = check["upload_docs"]
user_img.value = check["user_image"]


// upload land image..........................................


document.getElementById("land_prev").addEventListener("click", e => {
    e.preventDefault();
    const upload_img = document.getElementById("land_img").value;

    check["upload_image"] = upload_img;

    localStorage.setItem("leaser", JSON.stringify(data))

    localStorage.setItem("leaser_modify_data", JSON.stringify(data))

    preview1()
})

// upload land docs..........................................

document.getElementById("land_doc_prev").addEventListener("click", e => {
    e.preventDefault();
    const upload_docs = document.getElementById("land_docs").value;

    check["upload_docs"] = upload_docs;

    localStorage.setItem("leaser", JSON.stringify(data))

    localStorage.setItem("leaser_modify_data", JSON.stringify(data))

    preview2()
})

// upload user image..........................................

document.getElementById("user_prev").addEventListener("click", e => {
    e.preventDefault();
    const user_image = document.getElementById("user_img").value;

    check["user_image"] = user_image;

    localStorage.setItem("leaser", JSON.stringify(data))

    localStorage.setItem("leaser_modify_data", JSON.stringify(data))

    preview3()
})

let landpic = document.getElementById("display_image")
function preview1() {
    landpic.innerHTML = `<br><img src="${check["upload_image"]}" alt="Hv4a2Tv.jpg" border="0" id="lnd" height="255px" width="430px" >`
}

let landdoc = document.getElementById("display_docs")
function preview2() {
    landdoc.innerHTML = `<br><img src="${check["upload_docs"]}" alt="Hv4a2Tv.jpg" border="0"  id="lnd_doc" height="335px" width="390px" >`
}

let userimg = document.getElementById("display_photo")
function preview3() {
    userimg.innerHTML = `<br><img src="${check["user_image"]}" alt="Hv4a2Tv.jpg" border="0" id="use" height="255px" width="200px" >`
}




document.getElementById("save").addEventListener("click", e => {
    e.preventDefault();
    check["firstname"] = document.getElementById("fname").value;
    check["lastname"] = document.getElementById("lname").value;
    check["email"] = document.getElementById("email").value;
    check["phone_number"] = document.getElementById("numb").value;
    check["phone_number1"] = document.getElementById("number").value;
    check["address"] = document.getElementById("subject").value;
    check["location"] = document.getElementById("sub").value;
    check["password"] = document.getElementById("pass").value;
    check["confirm_password"] = document.getElementById("password").value;
    check["upload_image"] = document.getElementById("land_img").value;
    check["upload_docs"] = document.getElementById("land_docs").value;
    check["user_image"] = document.getElementById("user_img").value;

    localStorage.setItem("leaser", JSON.stringify(data))
    localStorage.setItem("leaser_modify_data", JSON.stringify(data))
    window.location.href = "leaser-profile.html?mail=" + check["email"]
})
document.getElementById("del").addEventListener("click", e => {
    e.preventDefault();
    console.log(check)
    let num = data.indexOf(check)
    data.splice(num, 1)
    localStorage.setItem("leaser", JSON.stringify(data))
    localStorage.setItem("leaser_modify_data", JSON.stringify(data))
    confirm("It's ok to delete your account")
    window.location.href = "leaser-log.html"
})