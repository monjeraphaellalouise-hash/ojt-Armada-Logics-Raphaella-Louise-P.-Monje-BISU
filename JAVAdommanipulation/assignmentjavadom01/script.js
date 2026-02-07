// Get the elements we need from the page
const profileName = document.getElementById("profileName");
const profileBio = document.querySelector("#profileBio");
const profileImage = document.getElementById("profileImage");
const profileCard = document.getElementById("profileCard");

// Inputs and message text
const nameInput = document.getElementById("nameInput");
const bioInput = document.getElementById("bioInput");
const imageInput = document.getElementById("imageInput");
const message = document.getElementById("message");

// Change the name 
function updateName() {
    profileName.innerText = nameInput.value;
    message.innerText = "Name updated successfully!";
    console.log("Name updated");
}

// Change the bio 
function updateBio() {
    profileBio.textContent = bioInput.value;
    message.innerText = "Bio updated successfully!";
    console.log("Bio updated");
}

// Update the profile picture 
function updateImage() {
    profileImage.setAttribute("src", imageInput.value);
    message.innerText = "Profile picture updated!";
    console.log("Image updated");
}

// Change the background color 
function changeBackground() {
    const selectedColor = document.getElementById("bgColorSelect").value;
    profileCard.style.backgroundColor = selectedColor;
    message.innerText = "Background color changed!";
    console.log("Background color changed");
}