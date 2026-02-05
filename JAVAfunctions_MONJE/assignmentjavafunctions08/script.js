var characters = [
    {
        name: "Space Beth",
        class: "Assassin / Rebel",
        health: 53,
        ability: "Advanced Laser Combat",
        trait: "Combat Veteran",
        image: "images/spacebeth.jpg"
    },
    {
        name: "Squanchy",
        class: "Berserker",
        health: 80,
        ability: "Squanch Transformation",
        trait: "Unstable Rage",
        image: "images/squanchy.jpg"
    },
    {
        name: "Mr. Poopybutthole",
        class: "Support / Survivor",
        health: 40,
        ability: "Ooo-Wee Encouragement",
        trait: "Lucky Existence",
        image: "images/mrpoppy.webp"
    },
    {
        name: "Birdperson",
        class: "Warrior / Tactician",
        health: 70,
        ability: "Flight Assault",
        trait: "Honor Bound",
        image: "images/birdperson.png"
    },
    {
        name: "Morty Smith",
        class: "Companion / Survivor",
        health: 45,
        ability: "Defensive Shield",
        trait: "Emotional Endurance",
        image: "images/morty.jpg"
    },
    {
        name: "Rick Sanchez",
        class: "Scientist",
        health: 60,
        ability: "Portal Gun",
        trait: "Genius Intellect",
        image: "images/rick.jpg"
    }
];


// Random Character Generator
function generateCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}

// Display Character
function generate() {
    var character = generateCharacter();
    var card = document.getElementById("character-card");

    card.innerHTML = `
        <img src="${character.image}">
        <div class="stat"><strong>Name:</strong> ${character.name}</div>
        <div class="stat"><strong>Class:</strong> ${character.class}</div>
        <div class="stat"><strong>Health:</strong> ${character.health}</div>
        <div class="stat"><strong>Ability:</strong> ${character.ability}</div>
        <div class="stat"><strong>Special Trait:</strong> ${character.trait}</div>
    `;

    console.dir(character);
}