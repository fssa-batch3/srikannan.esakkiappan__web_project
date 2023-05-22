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

let form = document.querySelector("#btn")

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

const default_leasr = [{
    "firstname": "Raja",
    "lastname": "s",
    "email": "raja@gmail.com",
    "phone_number": "9876798782",
    "phone_number1": "8989099881",
    "address": "Mahathma Gandhi Nagar,Taramani",
    "location" : "https://maps.app.goo.gl/Mr8fd3QVjYEJHqGE9",
    "password": "Raja@2003",
    "confirm_password": "Raja@2003",
    "Lattitude": 12.9840155,
    "Longitude": 80.241471,
    "lease_start_time":"2023-05-14 04:45 PM",
    "lease_end_time": "2023-05-14 05:45 PM",
    "upload_image":"https://iili.io/H86reVI.jpg",
    "upload_docs":"https://iili.io/H8EGFI9.jpg",
    "user_image" : "https://iili.io/Hv4eazN.png"
  },
  {
    "firstname": "Suresh",
    "lastname": "B",
    "email": "suresh@gmail.com",
    "phone_number": "9876798321",
    "phone_number1": "8989399881",
    "address": "30, Kuppusamy Nayakkar St, Guduvancheri",
    "location" : "https://maps.app.goo.gl/orndAzptj1YPPHwf6",
    "password": "Raja@2003",
    "confirm_password": "Raja@2003",
    "Lattitude": 12.8443519,
    "Longitude": 80.0558179,
    "lease_start_time":"2023-05-12 04:45 PM",
    "lease_end_time": "2023-05-13 05:45 PM",
    "upload_image":"https://iili.io/Hv6nOJV.jpg",
    "upload_docs":"https://iili.io/H8EGFI9.jpg",
    "user_image" : "https://iili.io/Hv4eazN.png"
  },
  {
    "firstname": "Ramkumar",
    "lastname": "B",
    "email": "Ram@gmail.com",
    "phone_number": "8976798321",
    "phone_number1": "8989399881",
    "address": "26RQ+4V2, Parthasarathi Puram, T. Nagar, Chennai",
    "location" : "https://maps.app.goo.gl/kJ7erasDKda9D8LYA",
    "password": "Raja@2003",
    "confirm_password": "Raja@2003",
    "Lattitude": 13.0402526,
    "Longitude": 80.1696124,
    "lease_start_time":"2023-05-13 05:45 PM",
    "lease_end_time": "2023-05-13 07:45 PM",
    "upload_image":"https://iili.io/H8lRhEF.jpg",
    "upload_docs":"https://iili.io/H8EGFI9.jpg",
    "user_image" : "https://iili.io/Hv4eazN.png"
  },
  {
    "firstname": "Siva",
    "lastname": "E",
    "email": "siva@gmail.com",
    "phone_number": "6857798321",
    "phone_number1": "8789399881",
    "address": "332W+J35, Muthu Kumaran Nagar, Poonamallee, Chennai",
    "location" : "https://maps.app.goo.gl/VsbuHVFbcBhrsXks9",
    "password": "Raja@2003",
    "confirm_password": "Raja@2003",
    "Lattitude": 13.0536298,
    "Longitude": 80.0949186,
    "lease_start_time":"2023-05-13 05:45 PM",
    "lease_end_time": "2023-05-13 07:45 PM",
    "upload_image":"https://iili.io/H8vZODN.jpg",
    "upload_docs":"https://iili.io/H8EGFI9.jpg",
    "user_image" : "https://iili.io/Hv4eazN.png"
  },
  {
    "firstname": "Guru",
    "lastname": "K",
    "email": "guru@gmail.com",
    "phone_number": "6892798321",
    "phone_number1": "9979399881",
    "address": "No 89, 2nd Main Rd, Kothari Nagar, Ramapuram, Chennai",
    "location" : "https://maps.app.goo.gl/kJ7erasDKda9D8LYA",
    "password": "Raja@2003",
    "confirm_password": "Raja@2003",
    "Lattitude": 13.0342492,
    "Longitude": 80.1853266,
    "lease_start_time":"2023-05-13 05:45 PM",
    "lease_end_time": "2023-05-13 07:45 PM",
    "upload_image":"https://freeimage.host/i/HUN8VHX",
    "upload_docs":"https://iili.io/H8EGFI9.jpg",
    "user_image" : "https://iili.io/Hv4eazN.png"
  }]
  
  if(localStorage.getItem("leaser")){
    console.log(no);
  }
  else{
  localStorage.setItem("leaser_modify_data",JSON.stringify(default_leasr))
  localStorage.setItem("leaser",JSON.stringify(default_leasr))
  }