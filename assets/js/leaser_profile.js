
let leas_sign = JSON.parse(localStorage.getItem("leas_signup"));
console.log(leas_sign);
let user1 = JSON.parse(localStorage.getItem("leaser"));
let leas_log = JSON.parse(localStorage.getItem("profile_details"));
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")

console.log(user1)
console.log(leas_log);

const url = window.location.search;
const urlParams = new URLSearchParams(url)
let mail = urlParams.get('mail');

let res ;

res = user1.find(l =>{
    let e_mail = l["email"];
    if(mail===e_mail){
        return true; 
    }
})

console.log(res);

if(res==undefined){
    user1.find(e => {
    if (e["email"] === leas_log["username"]) {
        return res = e;
    }
})
}

input1.innerText = res["firstname"]
input2.innerText = res["phone_number"]
input3.innerText = res["address"]

let place = document.getElementById("park_place")
place.innerHTML = `<img src="${res["upload_image"]}" alt="parking_place" border="0" id="plac_img" height=400px width=600px>`

let user_img = document.getElementById("avatar_img");
user_img.innerHTML = `<img src="${res["user_image"]}" alt="user_img" border="0" height=130px width=120px>`

document.getElementById("edi").addEventListener("click", (e) => {
    console.log("clicked")
    window.location.href =  "leaser-edit.html?mail=" + res["email"]
})

document.getElementById("requests").addEventListener("click", (r) =>{
    window.location.href = "leaser-notification.html?mail=" + res["email"]
})
