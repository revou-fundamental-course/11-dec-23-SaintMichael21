function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if(name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong!");
        return false;
    }

    setSenderUI(name, birthdate, gender, messages);

    return false;
}

function setSenderUI(name,birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

// slider

let currentindex = 0;
const images = document.querySelectorAll(".img-slideshow")
const totalImages = images.length

function changeImage() {
    images[currentindex].style.display = "none"
    currentIndex = (currentindex + 1) % totalImages
    images[currentindex].style.display = "block"
}

setInterval(changeImage, 2000)