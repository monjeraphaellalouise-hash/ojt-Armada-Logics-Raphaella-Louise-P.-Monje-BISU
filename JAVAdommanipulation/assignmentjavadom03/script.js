// inputs
const nameInput = document.getElementById("nameInput");
const bioInput = document.getElementById("bioInput");
const imageInput = document.getElementById("imageInput");
const colorInput = document.getElementById("colorInput");

// profile card
const profileName = document.getElementById("profileName");
const profileBio = document.getElementById("profileBio");
const profileImage = document.getElementById("profileImage");
const profileCard = document.getElementById("profileCard");

// button
const updateBtn = document.getElementById("updateBtn");

// change name
function updateName() {
    profileName.textContent = nameInput.value;
}

// change bio
function updateBio() {
    profileBio.textContent = bioInput.value;
}

// change image
function updateImage() {
    profileImage.setAttribute("src", imageInput.value);
}

// change bg color
function updateBackground() {
    profileCard.style.backgroundColor = colorInput.value;
}

// update everything
function updateProfile() {
    updateName();
    updateBio();
    updateImage();
    updateBackground();
    console.log("updated");
}

// button click
updateBtn.addEventListener("click", updateProfile);