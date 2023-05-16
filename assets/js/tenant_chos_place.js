const url = window.location.search;
const urlParams = new URLSearchParams(url);
const mail = urlParams.get("mail");

let i;
let div_list;
let div_profile_box;
let available;
let div_image;
let imag;
let div_detail;
let parag;
let parag1;

const tenant = JSON.parse(localStorage.getItem("Tenant"));

const accept = JSON.parse(localStorage.getItem("Accepted_Tenant"));

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

function datetonum(a) {
  let endd = a.substring(8, 10);
  endd = Number(endd);

  return endd;
}

const c = new Date();

const time = c.toLocaleTimeString();

function todaytim(j) {
  const mer = j.substring(8, 10);

  let end = j.substring(0, 5);
  end = end.split(":");

  if (mer === "PM") {
    const d = Number(end[0]) + 12;
    const ed = Number(d + end[1]);
    return ed;
  }

  const ed = Number(end[0] + end[1]);
  return ed;
}

function todaydat(c) {
  let todate = c.toLocaleDateString();
  todate = todate.substring(0, 2);
  const todte = Number(todate);

  return todte;
}

let result;

tenant.find((e) => {
  const Emai = e.Email;
  if (mail === Emai) {
    result = e;
  }
});

const lease = JSON.parse(localStorage.getItem("leaser_modify_data"));

const main_lists = document.querySelector(".main_list");

let non_avil;
let hr;
let cont;

for (i = 0; i < lease.length; i++) {
  const a = document.createElement("a");
  a.setAttribute("id", "link");
  a.setAttribute(
    "href",
    `tenant-chooseduration.html?name=${lease[i].firstname}&Tenant=${result.Email}`
  );
  // console.log(a)

  div_profile_box = document.createElement("div");
  div_profile_box.setAttribute("class", "profile_box");
  a.append(div_profile_box);

  non_avil = document.createElement("div");
  non_avil.setAttribute("class", "avail");
  div_profile_box.append(non_avil);

  cont = document.createElement("p");
  cont.setAttribute("id", "availa");
  cont.innerHTML = `This place is Not Available till :${lease[i].lease_end_time} `;
  non_avil.append(cont);

  const { lease_start_time } = lease[i];
  console.log(lease_start_time);
  const { lease_end_time } = lease[i];

  const st_time = meridiancheck(lease_start_time);
  console.log(st_time);
  const st_date = datetonum(lease_start_time);
  // console.log(st_date);

  const ed_time = meridiancheck(lease_end_time);
  console.log(ed_time);
  const ed_date = datetonum(lease_end_time);
  // console.log(ed_date);

  const cur_date = todaydat(c);
  // console.log(cur_date);
  const cur_time = todaytim(time);
  // console.log(cur_time);

  const dif_st_date = cur_date - st_date;
  // console.log(dif_st_date);
  const dif_ed_date = ed_date - cur_date;
  // console.log(dif_ed_date);

  if (dif_st_date === 0 && dif_ed_date === 0) {
    if (cur_time >= st_time && cur_time <= ed_time) {
      console.log("not available");
      non_avil.style.display = "block";
    } else {
      console.log("available");
      non_avil.style.display = "none";
    }
  } else if (dif_st_date === 0 && dif_ed_date >= 1) {
    if (cur_time >= st_time || cur_time <= ed_time) {
      console.log("not available");
      non_avil.style.display = "block";
    } else {
      console.log("available");
      non_avil.style.display = "none";
    }
  } else {
    console.log("available");
    non_avil.style.display = "none";
  }

  div_image = document.createElement("div");
  div_image.setAttribute("class", "image");
  div_profile_box.append(div_image);

  imag = document.createElement("img");
  imag.setAttribute("id", "imag");
  imag.setAttribute("src", lease[i].upload_image);
  div_image.append(imag);

  div_detail = document.createElement("div");
  div_detail.setAttribute("class", "detail");
  div_profile_box.append(div_detail);

  parag = document.createElement("p");
  parag.setAttribute("id", "nam");
  parag.innerHTML = `<p>Name : ${lease[i].firstname}</p>`;
  div_detail.append(parag);

  parag1 = document.createElement("p");
  parag1.setAttribute("id", "addr");
  parag1.innerHTML = `<p>Address : ${lease[i].address}</p>`;
  div_detail.append(parag1);

  phon_num = document.createElement("p");
  phon_num.setAttribute("id", "phon");
  phon_num.innerHTML = `<p>Phone number : ${lease[i].phone_number}</p>`;
  div_detail.append(phon_num);

  // available = document.createElement("p");
  // available.setAttribute("id","")

  main_lists.prepend(a);
}

const search = document.getElementById("search");
search.addEventListener("keyup", (e) => {
  const search_value = e.target.value.toLowerCase();
  const places = document.querySelectorAll(".profile_box");

  places.forEach((element) => {
    const details = element.children[2].textContent.toLowerCase();
    // console.log(details);

    if (details.includes(search_value)) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
});

const locat = document.getElementById("locat");
locat.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
  function showPosition(position) {
    const latitud = position.coords.latitude;
    const longitud = position.coords.longitude;
    const accur = position.coords.accuracy;
    console.log(latitud, longitud); // 13.0963045  80.2865916
    // console.log(Math.round(accur));

    let near = "";
    for (let s = 0; s < lease.length; s++) {
      const lat2 = lease[s].Lattitude;
      // console.log(lat2);
      const lon2 = lease[s].Longitude;

      const distan_km = distance(latitud, longitud, lat2, lon2);
      if (distan_km <= 15) {
        console.log(distan_km);
        near += `<a id="link" href="tenant-chooseduration.html?name=${lease[s].firstname}">
                    <div class="profile_box">
                      <div class="image">
                        <img id="imag" src="${lease[s].upload_image}">
                      </div>
                     <div class="detail">
                        <p>Name : ${lease[s].firstname}</p>
                        <p>Address : ${lease[s].address}</p>
                        <p>Phone number : ${lease[s].phone_number}</p>
                     </div>
                    </div>
                        </a>`;
        main_lists.innerHTML = near;
        console.log(distan_km);
      }
    }
  }
});

function distance(lat1, lon1, lat2, lon2) {
  const R = 6371; // radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
