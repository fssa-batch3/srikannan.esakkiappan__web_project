var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

let form = document.querySelectorAll("#btn")

form.addEventListener("click", function () {

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "srikann.2003@gmail.com",
        Password: "4DB5AD9DEC3E8A5B5E3951B381AC456C5CBD",
        To: 'parkinn2023.sri@gmail.com',
        From: "srikann.2003@gmail.com",
        Subject: "User Feedback",
        Body: "My name is" + document.getElementById("feedname").value + "my Email is" + document.getElementById("fedname").value + document.getElementById("feedemail").value
    }).then(
        message => alert('Email send sucessfully') ? "" : location.reload()


    );

})