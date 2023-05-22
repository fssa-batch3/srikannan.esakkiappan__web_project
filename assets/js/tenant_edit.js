let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let email = document.getElementById("email")
let numb = document.getElementById("numb")
let number = document.getElementById("number")
let address = document.getElementById("subject")
let pass = document.getElementById("pass")
let password = document.getElementById("password")
let bike_img = document.getElementById("bike_img")
let bike_docs = document.getElementById("bike_docs")
let user_img = document.getElementById("user_img")
let tenant = JSON.parse(localStorage.getItem("Tenant_additional_det"))
let tenan_sign = JSON.parse(localStorage.getItem("Tenant_sign"));
let datas = JSON.parse(localStorage.getItem("Tenant"))
let profile = JSON.parse(localStorage.getItem("Tenant_details"));
console.log(datas)
console.log(profile)

const url = window.location.search;
const urlParams = new URLSearchParams(url)
let mail = urlParams.get('mail');
let check;
check = datas.find(e => {
    let e_mai = e["Email"]
    if (mail === e_mai) {
        return true;
    }

})

console.log(check)

if (check == undefined) {
    datas.find(l => {
        if (l["Email"] === profile["Email"]) {
            return check = l;
        }
    })
}
console.log(check);

fname.value = check["Firstname"]
lname.value = check["Lastname"]
email.value = check["Email"]
numb.value = check["phone_number"]
number.value = check["phone_number1"]
address.value = check["Address"]
pass.value = check["password"]
password.value = check["confirm_password"]
bike_img.value = check["upload_image"]
bike_docs.value = check["upload_docs"]
user_img.value = check["user_image"]



// upload land image..........................................


document.getElementById("bike_prev").addEventListener("click", e => {
    e.preventDefault();
    const upload_img = document.getElementById("bike_img").value;

    check["upload_image"] = upload_img;

    localStorage.setItem("Tenant", JSON.stringify(datas))

    preview1()
})

// upload land docs..........................................

document.getElementById("bike_doc_prev").addEventListener("click", e => {
    e.preventDefault();
    const upload_docs = document.getElementById("bike_docs").value;

    check["upload_docs"] = upload_docs;

    localStorage.setItem("Tenant", JSON.stringify(datas))

    preview2()
})

// upload user image..........................................

document.getElementById("user_prev").addEventListener("click", e => {
    e.preventDefault();
    const user_image = document.getElementById("user_img").value;

    check["user_image"] = user_image;

    localStorage.setItem("Tenant", JSON.stringify(datas))

    preview3()
})


let bikepic = document.getElementById("display_image")
function preview1() {
    bikepic.innerHTML = `<br><img src="${check["upload_image"]}" alt="Hv4a2Tv.jpg" border="0" height="260px" width="200px" >`
}

let bikedoc = document.getElementById("display_docs")
function preview2() {
    bikedoc.innerHTML = `<br><img src="${check["upload_docs"]}" alt="Hv4a2Tv.jpg" border="0" height="260px" width="200px" >`
}

let userimg = document.getElementById("display_photo")
function preview3() {
    userimg.innerHTML = `<br><img src="${check["user_image"]}" alt="Hv4a2Tv.jpg" border="0" height="260px" width="200px" >`
}

let sav = document.querySelectorAll(".save");
sav.forEach(s=>{
  s.addEventListener("click", e => {
    e.preventDefault();
    check["Firstname"] = document.getElementById("fname").value;
    check["Lastname"] = document.getElementById("lname").value;
    check["Email"] = document.getElementById("email").value;
    check["phone_number"] = document.getElementById("numb").value;
    check["phone_number1"] = document.getElementById("number").value;
    check["Address"] = document.getElementById("subject").value;
    check["password"] = document.getElementById("pass").value;
    check["confirm_password"] = document.getElementById("password").value;
    check["upload_image"] = document.getElementById("bike_img").value;
    check["upload_docs"] = document.getElementById("bike_docs").value;
    check["user_image"] = document.getElementById("user_img").value;

    localStorage.setItem("Tenant_additional_det", JSON.stringify(datas))
    localStorage.setItem("Tenant", JSON.stringify(datas))
    window.location.href = "tenant-profile.html?mail=" + check["Email"]
})
})

let delet = document.querySelectorAll(".del");
delet.forEach(d=>{
d.addEventListener("click", e => {
    e.preventDefault();
    console.log(check)
    let num = datas.indexOf(check)
    datas.splice(num, 1)
    alert("It's ok to delete your account")
    localStorage.setItem("Tenant", JSON.stringify(datas))

})
})