// Characters
function Character(name = "Hero") {
    this.name = name;
    this.health = 100;

    const classes = [
        "Scientist",
        "Warrior",
        "Assassin",
        "Survivor",
        "Tactician"
    ];
    this.class = classes[Math.floor(Math.random() * classes.length)];

    const abilities = [
        "Portal Gun",
        "Laser Blast",
        "Stealth Mode",
        "Mind Control",
        "Plasma Strike"
    ];
    this.specialAbility =
        abilities[Math.floor(Math.random() * abilities.length)];
}


// Randomize Health
Character.prototype.randomizeHealth = function () {
    this.health = Math.floor(Math.random() * 101) + 50;
};


//Battle Method
Character.prototype.battle = function (otherCharacter) {
    const damage = Math.floor(Math.random() * 16) + 5;
    const before = otherCharacter.health;

    otherCharacter.health = Math.max(otherCharacter.health - damage, 0);

    console.log(
        `Character ${this.name} attacked Character ${otherCharacter.name} ` +
        `with ${this.specialAbility}. ${otherCharacter.name}'s health dropped ` +
        `from ${before} to ${otherCharacter.health}.`
    );
};


//generateCharacter 
function generateCharacter(name) {
    const names = [
        "Rick Sanchez",
        "Morty Smith",
        "Birdperson",
        "Squanchy",
        "Mr. Poopybutthole",
        "Space Beth"
    ];

    const finalName = name || names[Math.floor(Math.random() * names.length)];

    const character = new Character(finalName);
    character.randomizeHealth();

    console.dir(character); // grading test
    return character;
}

//generateMultipleCharacters
function generateMultipleCharacters(x) {
    const party = [];
    for (let i = 0; i < x; i++) {
        party.push(generateCharacter());
    }
    return party;
}

function generate() {
    const character = generateCharacter();
    const card = document.getElementById("character-card");

    const images = {
        "Rick Sanchez": "images/rick.jpg",
        "Morty Smith": "images/morty.jpg",
        "Birdperson": "images/birdperson.png",
        "Squanchy": "images/squanchy.jpg",
        "Mr. Poopybutthole": "images/mrpoppy.webp",
        "Space Beth": "images/spacebeth.jpg"
    };

    const imageSrc = images[character.name] || "images/rick.jpg";

    card.innerHTML = `
        <img src="${imageSrc}">
        <div class="stat"><strong>Name:</strong> ${character.name}</div>
        <div class="stat"><strong>Class:</strong> ${character.class}</div>
        <div class="stat"><strong>Health:</strong> ${character.health}</div>
        <div class="stat"><strong>Ability:</strong> ${character.specialAbility}</div>
    `;
}

const c1 = generateCharacter("Morty Smith");
const c2 = generateCharacter("Birdperson");
c1.battle(c2);

const party = generateMultipleCharacters(5);
console.dir(party);