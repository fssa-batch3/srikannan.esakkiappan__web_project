$(".tim").datetimepicker({
  format: "yyyy-mm-dd HH:ii P",
  showMeridian: "true",
  startDate: new Date(),
});
$(".tim").datetimepicker("update", new Date());

const leaser_details = JSON.parse(localStorage.getItem("leaser"));

const url = window.location.search;
const urlParams = new URLSearchParams(url);
const name = urlParams.get("name");

const urlp = window.location.search;
const urlpara = new URLSearchParams(urlp);
const ten = urlpara.get("Tenant");

const details = leaser_details.find((el) => {
  const first_name = el.firstname;

  if (name === first_name) {
    return true;
  }
  return false;
});

console.log(details);

const first_name = document.getElementById("leaser_name");
const phon_num = document.getElementById("leaser_number");
const parkin_img = document.getElementById("parking_image1");

first_name.innerText = details.firstname;
phon_num.innerText = details.phone_number;
parkin_img.innerHTML = `<img src="${details.upload_image}" alt="Hv4a2Tv.jpg" border="0" height="255px" width="430px" id="parking_image1">`;

let tenant_details;

tenant_details = JSON.parse(localStorage.getItem("Tenant_additional_det"));
console.log(tenant_details);

const sign = JSON.parse(localStorage.getItem("Tenant_sign"));

let parking_amount;
let duration_hours;
let money;
let minut;

document.getElementById("ques").addEventListener("click", (e) => {
  const star_time = document.getElementById("start-time").value;
  const end_time = document.getElementById("End-time").value;

  console.log(star_time);

  e.preventDefault();

  // time to money

  const date_start = star_time.substring(8, 10);
  const date_star = Number(date_start);
  console.log(date_star);

  const date_end = end_time.substring(8, 10);
  const date_ed = Number(date_end);

  const date_diff = date_ed - date_star;
  console.log(date_diff);

  const datdf = date_diff * 24 * 100;
  console.log(datdf);

  const stq = meridiancheck(star_time);

  const edq = meridiancheck(end_time);

  const min = edq - stq;
  console.log(min);

  const mi = datdf + min;
  console.log(mi);

  if (date_diff === 0) {
    const out = Numtomin(min);

    minut = convertH2M(out);
    console.log(minut);

    money = Math.round(minut / 7);
    parking_amount = money;
  } else if (date_diff > 0) {
    const out = Numtomin(mi);

    minut = convertH2M(out);
    console.log(minut);

    money = Math.round(minut / 9);
    parking_amount = money;
  }

  const tim = minut / 60;
  duration_hours = Math.floor(tim);

  // let money = minut / 5;
  // parking_amount = money;

  document.getElementById("rupee").innerText = money;
});

function meridiancheck(j) {
  const mer = j.substring(17, 19);

  let end = j.substring(11, 16);
  end = end.split(":");

  if (mer === "PM") {
    const d = Number(end[0]) + 12;
    const ed = Number(d + end[1]);
    return ed;
  }

  const ed = Number(end[0] + end[1]);
  return ed;
}

function Numtomin(mi) {
  let minu = String(mi);

  if (minu.length === 3) {
    minu = `0${minu}`;
  } else if (minu.length === 2) {
    minu = `00${minu}`;
  } else {
    minu = `000${minu}`;
  }
  const u = ":";
  const output = [minu.slice(0, 2), u, minu.slice(2)].join("");
  return output;
}

function convertH2M(th) {
  const thpart = th.split(":");
  return Number(thpart[0]) * 60 + Number(thpart[1]);
}

// validation of Email

let valid;
let key;

document.querySelector("form").addEventListener("submit", (l) => {
  l.preventDefault();

  // let valid;
  // let key;
  const star_time = document.getElementById("start-time").value;
  const end_time = document.getElementById("End-time").value;

  tenant_details.find((e) => {
    // let mai = e["Email"];
    if (e.Email === ten) {
      e.parking_start_time = star_time;
      e.parking_end_time = end_time;
      e.Park_duration_hours = duration_hours;
      e["Request status"] = "pending";
      e.parking_amount = parking_amount;

      const obj = {
        Request_person_email: details.email,
        status: "pending",
      };
      e.request_receive_people.push(obj);

      // tenant_details.push(e);

      return (key = e);
    }
    // return key = e;
  });

  console.log(key);

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "srikann.2003@gmail.com",
    Password: "4DB5AD9DEC3E8A5B5E3951B381AC456C5CBD",
    To: details.email,
    From: "parkinn2023.sri@gmail.com",
    Subject: "New Tenant Request",
    Body: `Hi ${details["firstname"]} <br><br>
                You got a new parking request from your nearby tenant(Vehicle user).<br> Your requested person's name is ${key["Firstname"]}. He wants to park his vehicle between the times of ${star_time} to ${end_time}. And ${parking_amount} rupees is your receiving money if you accept this request. So If you like to accept this request, Go to your Parkin profile by using this<a href="https://deploy-preview-1--parkin.netlify.app/pages/leaser-log.htm"> link</a> and accept your tenant request.
                <br><br>
                Thank you.`,
  }).then((message) => {
    alert("Request send sucessfully");
    window.location.href = `tenant-request.html?mail=${key["Email"]}`;
  });

  localStorage.setItem("Tenant_additional_det", JSON.stringify(tenant_details));
});

document.querySelector("#explo").addEventListener("click", (k) => {
  k.preventDefault();
  window.location.href = `tenant-choose-place.html?mail=${ten}`;
});
