const boxImage = document.getElementById("boxImage");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

// OPEN BOX
function openBox() {
    const openImage = boxImage.getAttribute("data-open");
    boxImage.setAttribute("src", openImage);

    openBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
}

// CLOSE BOX
function closeBox() {
    const closedImage = boxImage.getAttribute("data-closed");
    boxImage.setAttribute("src", closedImage);

    closeBtn.classList.add("hidden");
    openBtn.classList.remove("hidden");
}

//OPEN&CLOSE
boxImage.addEventListener("click", openBox);
openBtn.addEventListener("click", openBox);
closeBtn.addEventListener("click", closeBox);

function openBox() {
    const openImage = boxImage.getAttribute("data-open");
    boxImage.setAttribute("src", openImage);
    openBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
    boxImage.classList.add("pop");

    setTimeout(() => {
        boxImage.classList.remove("pop");
    }, 400);
}