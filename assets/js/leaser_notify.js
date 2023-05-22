let main_box = document.querySelector(".present_box")

let histo = document.querySelector(".history_box")

let nava;

let image;
let img;
let detail;
let p1;
let p2;
let rqdate;
let parkdur;
let amont;
let htag;
let but;

let req_feed;

let history;
let him;
let hi;
let det;
let hp;
let hp1;
let acp;


const url = window.location.search;
const urlParams = new URLSearchParams(url)
let mail = urlParams.get('mail');

// const leaserr = JSON.parse(localStorage.getItem("leaser"))    
const tenan = JSON.parse(localStorage.getItem("Tenant_additional_det"))
const leaser_log = JSON.parse(localStorage.getItem("profile_details"))
const lease = JSON.parse(localStorage.getItem("leaser_modify_data"))

console.log(tenan);
let res = 0;

if (tenan == null) {
    res = 0;
}
else {
    tenan.find(e => {
        e["request_receive_people"].find(j => {

            if (j["Request_person_email"] != mail) {

                main_box.style.display = 'flex';
            }
            else {
                return res = 1;
            }
        })
    })
}

console.log(res);
if (res === 1) {
    htag = document.createElement("h2");
    htag.setAttribute("id", "headi");
    htag.innerHTML = `New Request`;
    main_box.append(htag);

    image = document.createElement("div");
    image.setAttribute("class", "image");
    main_box.append(image)

    img = document.createElement("div")
    img.setAttribute("id", "imge")
    image.append(img)

    detail = document.createElement("div")
    detail.setAttribute("class", "detail")
    main_box.append(detail)

    p1 = document.createElement("p")
    p1.setAttribute("id", "nam")
    detail.append(p1)

    p2 = document.createElement("p")
    p2.setAttribute("id", "phon")
    detail.append(p2)

    rqdate = document.createElement("p")
    rqdate.setAttribute("id", "redatm")
    detail.append(rqdate)

    parkdur = document.createElement("p")
    parkdur.setAttribute("id", "dur")
    detail.append(parkdur)

    amont = document.createElement("p")
    amont.setAttribute("id", "money")
    detail.append(amont)

    but = document.createElement("button")
    but.setAttribute("id", "accept-html")
    but.innerText = "Accept";
    detail.append(but)
}
else {
    req_feed = document.createElement("h2")
    req_feed.innerText = "You dont have any request !"
    main_box.append(req_feed)
}

let ans;
console.log(tenan);

tenan.find(e => {
    console.log(e);
    e["request_receive_people"].find(m => {
        console.log(e);
        if (m["Request_person_email"] === mail) {
            console.log(m);
            return ans = e;

        }
    })
})

console.log(ans);

let sttime = ans["parking_start_time"];
let d = sttime.substring(0, 10)
let h = sttime.substring(11, 16)

let edtime = ans["parking_end_time"]
let ed = edtime.substring(0, 10)
let eh = edtime.substring(11, 16)

p1.innerHTML = `<p> Name : ${ans["Firstname"]} </p>`
p2.innerHTML = `<p> Phone number : ${ans["phone_number"]} </p>`
img.innerHTML = `<img src="${ans["upload_image"]}" border="0" height=300px width=200px>`
rqdate.innerHTML = `<p> Starting Date and Time : ${ans["parking_start_time"]} </p>`
parkdur.innerHTML = `<p> Ending Date and Time : ${ans["parking_end_time"]}</p>`
amont.innerHTML = `<p> Your Receiving money : ${ans["parking_amount"]} </p>`

// console.log(act);
let act;

let tenan_emil = ans["Email"];

act = JSON.parse(localStorage.getItem("Accepted_Tenant")) ?? [];

nava = document.createElement("a");
nava.setAttribute("id", "nav");
nava.setAttribute("href", "tenant-payment.html?mail=" + tenan_emil);
console.log(nava);

but.addEventListener("click", e => {
    e.preventDefault()
    // alert("hi")
    ans["Accepted_leaser"] = mail;
    ans["Request status"] = "accepted";
    tenan.find(s => {
        s["request_receive_people"].find(m => {
            if (m["status"] === "pending") {
                m["status"] = "completed"
            }
        })
    })
    console.log(ans);
    act.push(ans)
    localStorage.setItem("Accepted_Tenant", JSON.stringify(act));
    console.log(lease);
    lease.find(q => {
        if (q["email"] === ans["Accepted_leaser"]) {
            q["lease_start_time"] = ans["parking_start_time"];
            q["lease_end_time"] = ans["parking_end_time"]
        }
    })

    localStorage.setItem("leaser_modify_data", JSON.stringify(lease));

    localStorage.setItem("Tenant_additional_det", JSON.stringify(tenan));

    res = 0;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "srikann.2003@gmail.com",
        Password: "4DB5AD9DEC3E8A5B5E3951B381AC456C5CBD",
        To: tenan_emil,
        From: "parkinn2023.sri@gmail.com",
        Subject: "Accepting Request",
        Body: `Hi ${ans["Firstname"]},<br>Congrats!, You Request was accepted. Lets ready to park and If you want to pay the parking amount via online click <a href=${nava}>this </a> link.`

    }).then((message) => {
        alert("Accepted sucessfully")


        window.location.href = "leaser-accept.html"
    }
    )

});
let accept = JSON.parse(localStorage.getItem("Accepted_Tenant"));

accept.find(k => {
    let accept_leas = k["Accepted_leaser"];
    console.log(accept_leas);
    if (mail === accept_leas ) {
        history = document.createElement("div")
        history.setAttribute("class", "history")
        histo.append(history)

        him = document.createElement("div")
        him.setAttribute("class", "image")
        history.append(him)

        hi = document.createElement("div")
        hi.setAttribute("id", "imag")
        hi.innerHTML = `<img src=${k["upload_image"]} height=180px width=110px>`
        him.append(hi)

        det = document.createElement("div")
        det.setAttribute("class", "detail")
        history.append(det)

        hp = document.createElement("p")
        hp.setAttribute("id", "hname")
        hp.innerHTML = `<p> ${k["Firstname"]}</p>`
        det.append(hp)

        hp1 = document.createElement("p")
        hp1.setAttribute("id", "hnum")
        hp1.innerHTML = `<p> ${k["phone_number"]} </p>`
        det.append(hp1)

        acp = document.createElement("p")
        acp.setAttribute("id", "acp")
        acp.innerHTML = `<p> ${k["parking_start_time"]}`
        det.append(acp)

        histo.append(history);
    }

}) 