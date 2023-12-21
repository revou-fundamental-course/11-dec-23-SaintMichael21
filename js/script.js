// Change Name

function gantiNama() {
    let nama = prompt("Masukkan nama anda", "");
    document.getElementById("halo-nama").innerHTML = nama;
  }
  
  gantiNama();
  
  let navbar = document.getElementById("navbar");
  let icon = document.getElementById("hamburger-menu");
  
  // when hamburger menu got clicked

  icon.addEventListener("click", function () {
    navbar.classList.toggle("hidden");
  });
  
  let homebtn = document.getElementById("home");
  let profilebtn = document.getElementById("ourProfile");
  let visionbtn = document.getElementById("visionMission");
  let messagebtn = document.getElementById("message");
  
  navbar.addEventListener("click", function (e) {
    if (
      !homebtn.contains(e.target) &&
      !profilebtn.contains(e.target) &&
      !visionbtn.contains(e.target) &&
      !messagebtn.contains(e.target)
    ) {
      navbar.classList.toggle("hidden");
    }
  });
  
  // Validation Form

  function validateForm() {
    let name = document.forms["message-form"]["name"].value;
    let birthDate = document.forms["message-form"]["tanggal"].value;
    let gender = document.forms["message-form"]["gender"].value;
    let messages = document.forms["message-form"]["message-from"].value;
    let timeNow = new Date();
  
    let messageReturn = document.getElementById("returnText");
  
    if (messageReturn.classList == "returnText") {
      messageReturn.classList.toggle("returnText");
    }
  
    document.getElementById("time-api").innerHTML = timeNow;
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = messages;
  
    return false;
  }