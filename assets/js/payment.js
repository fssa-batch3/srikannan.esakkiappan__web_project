const ur = window.location.search

let container = document.querySelector(".main-container");

let alt_container = document.querySelector(".alter_main");

let htag;
let back;
let prof_nam;
let prof_mail;
let dat;


let user = JSON.parse(localStorage.getItem("Tenant_additional_det"));
console.log(user);

let tenan_log = JSON.parse(localStorage.getItem("Tenant_details"))
console.log(tenan_log);

const ul = window.location.search;
const upara = new URLSearchParams(ul)
let name = upara.get('name');

dat = user.find((a) => {
    let Name = a["Firstname"]

    if (Name == name) {
        return true
    }
    else {
        return false
    }
});
console.log(dat);


htag = document.createElement("h1");
htag.setAttribute("id", "hdd");
htag.innerHTML = `(Now you dont have pending amount to pay)<br><br>`
alt_container.append(htag);

back = document.createElement("a")
back.setAttribute("id", "prof");
if (dat == undefined) {
    back.setAttribute("href", "#")
}
else {
    back.setAttribute("href", "tenant-profile.html?mail=" + dat["Email"])
}

back.innerHTML = `Back to profile`;
htag.append(back);


const url = window.location.search;
const urlParams = new URLSearchParams(url)
let mail = urlParams.get('mail');

data = user.find((e) => {
    let email = e["Email"]

    if (mail === email) {
        return true
    }
    else {
        return false
    }
});

console.log(data);

if (data == undefined) {
    container.style.display = "none";
    // prof_nam.style.display = "none";
    alt_container.style.display = "flex";
}
else {
    // if (dat == undefined) {
    container.style.display = "flex";
    alt_container.style.display = "none";
    back.style.display = "flex";
    // }

}

prof_nam = document.getElementById("prof_nam")
prof_nam.innerHTML = `<p> Name : ${data["Firstname"]} </p>`
console.log(prof_nam);

prof_mail = document.getElementById("prof_mail")
prof_mail.innerHTML = `<p> Email : ${data["Email"]} </p>`

let duration = document.getElementById("time");
let amount = document.getElementById("rupee");

duration.innerHTML = `<p> ${data["Park_duration_hours"]} Hour</p>`
amount.innerHTML = `<p> &#8377;${data["parking_amount"]}</p>`

proceed = document.getElementById("btn");

proceed.addEventListener("click", e => {
    e.preventDefault()


})

