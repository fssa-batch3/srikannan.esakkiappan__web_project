let form = document.querySelector("form")
    form.addEventListener("submit", e => {
      e.preventDefault()
      const email = document.getElementById("email").value
      const password = document.getElementById("password_").value

      const User_details = JSON.parse(localStorage.getItem("Tenant"))
      let datas = {
        "Email": email,
        "password": password
      }
      let check;
      if (User_details == null) {
        check = 0;
      }
      else {
        User_details.find(element => {

          if (element["Email"] === email && element["password"] === password) {
            localStorage.setItem("Tenant_details", JSON.stringify(datas))

            return check = 1
          }
          else {
            return check = 0
          }
        })
      }

      if (check === 1) {
        window.location.href = "tenant-profile.html"
      }
      else {
        alert("Invalid")
      }
    }
    )