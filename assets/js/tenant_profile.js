const tenan_sign = JSON.parse(localStorage.getItem("Tenant_sign"));
const user = JSON.parse(localStorage.getItem("Tenant"));
const tenan_log = JSON.parse(localStorage.getItem("Tenant_details"));
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

console.log(user);
console.log(tenan_log);

const url = window.location.search;
const urlParams = new URLSearchParams(url);
const mail = urlParams.get("mail");

let res;
res = user.find((e) => {
  const E_mail = e.Email;
  if (mail === E_mail) {
    return true;
  }
});

if (res == undefined) {
  user.find((el) => {
    if (el.Email === tenan_log.Email) {
      return (res = el);
    }
  });
}
console.log(res);

input1.innerText = res.Firstname;
input2.innerText = res.phone_number;
input3.innerText = res.Address;

const vehicle = document.getElementById("bike1");
vehicle.innerHTML = `<img src="${res.upload_image}" border="0" id="prof_bike" alt="vehicle_img" height=500px width=350px>`;

const user_img = document.getElementById("avatar_img");
user_img.innerHTML = `<br><img src="${res.user_image}" id="user_im" border="0" alt="user_img" height=130px width=120px>`;

document.getElementById("edi").addEventListener("click", (e) => {
  console.log("clicked");
  window.location.href = `Tenant-edit.html?mail=${res.Email}`;
});

document.getElementById("park_pl").addEventListener("click", (j) => {
  window.location.href = `tenant-choose-place.html?mail=${res.Email}`;
});

document.getElementById("paym").addEventListener("click", (b) => {
  window.location.href = `tenant-payment.html?name=${res.Firstname}`;
});
