const url = window.location.search;
const urlParams = new URLSearchParams(url)
let mail = urlParams.get('mail');

let request = document.getElementById("Anot_req");
request.addEventListener("click", e => {
    window.location.href = "tenant-choose-place.html?mail=" + mail;
})