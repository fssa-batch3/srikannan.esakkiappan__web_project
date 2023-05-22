const url = window.location.search;
const urlParams = new URLSearchParams(url)
let mail = urlParams.get('mail');

let request = document.querySelectorAll(".Anot_req");
request.forEach(r=>{
    r.addEventListener("click", e => {
        window.location.href = "tenant-choose-place.html?mail=" + mail;
    })
})