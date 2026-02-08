// Select all characters and the display elements
const characters = document.querySelectorAll(".character");
const mainImage = document.getElementById("mainImage");
const characterName = document.getElementById("characterName");
const characterDesc = document.getElementById("characterDesc");

// Add click event to each character
characters.forEach(character => {
    character.addEventListener("click", () => {

        // Remove highlight from all characters
        characters.forEach(c => c.classList.remove("selected"));

        // Highlight the selected character
        character.classList.add("selected");

        // Update the displayed image, name, and description
        mainImage.src = character.getAttribute("data-image");
        characterName.textContent = character.getAttribute("data-name");
        characterDesc.textContent = character.getAttribute("data-desc");

    });
});