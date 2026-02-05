// Battle of the Warriors
// Rick vs Rick Prime (Weapon-Based)

// Output area
var output = document.getElementById("output");
// Print helper
function print(text) {
    output.textContent += text + "\n";
}


// Weapon Lists (Lore-Based)
var rickWeapons = [
    { name: "Portal Gun", maxDamage: 18 },
    { name: "Laser Pistol", maxDamage: 14 },
    { name: "Arm Cannon", maxDamage: 16 },
    { name: "Particle Beam Watch", maxDamage: 20 },
    { name: "Force Field Shock", maxDamage: 12 },
    { name: "Morty (Human Shield Throw)", maxDamage: 10 }
];

var primeWeapons = [
    { name: "Omega Device Fragment", maxDamage: 22 },
    { name: "Killbot Swarm", maxDamage: 16 },
    { name: "Black Goo Trap", maxDamage: 14 },
    { name: "Prime Laser Blaster", maxDamage: 18 },
    { name: "Drone Strike", maxDamage: 15 }
];


// Warrior Objects
var rick = {
    name: "Rick Sanchez",
    hp: 100,
    weapons: rickWeapons,

    attack: function () {
        var weapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
        var damage = Math.floor(Math.random() * (weapon.maxDamage + 1));

        // ✅ Rick genius bonus (small, logical)
        if (Math.random() < 0.4) {
            damage += 5;
        }

        return { weapon: weapon.name, damage: damage };
    }
};

var rickPrime = {
    name: "Rick Prime",
    hp: 100,
    weapons: primeWeapons,

    attack: function () {
        var weapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
        var damage = Math.floor(Math.random() * (weapon.maxDamage + 1));

        // ✅ Slight cap to keep balance
        if (damage > 15) {
            damage = 15;
        }

        return { weapon: weapon.name, damage: damage };
    }
};

// Battle Function (10 Rounds)
function startBattle() {
    output.textContent = "";
    rick.hp = 100;
    rickPrime.hp = 100;

    for (var round = 1; round <= 10; round++) {
        print("=== Round " + round + " ===");

        // Rick attacks
        var rickAttack = rick.attack();
        rickPrime.hp -= rickAttack.damage;
        if (rickPrime.hp < 0) rickPrime.hp = 0;

        print(
            rick.name + " uses " + rickAttack.weapon +
            " and deals " + rickAttack.damage + " damage!"
        );
        print("Rick HP: " + rick.hp + " | Rick Prime HP: " + rickPrime.hp);

        // Rick Prime attacks
        var primeAttack = rickPrime.attack();
        rick.hp -= primeAttack.damage;
        if (rick.hp < 0) rick.hp = 0;

        print(
            rickPrime.name + " uses " + primeAttack.weapon +
            " and deals " + primeAttack.damage + " damage!"
        );
        print("Rick HP: " + rick.hp + " | Rick Prime HP: " + rickPrime.hp);
        print("");
    }

    // Winner Determination
    print("=== Battle Result ===");

    if (rick.hp > rickPrime.hp) {
        print(rick.name + " WINS the battle!");
    } else if (rickPrime.hp > rick.hp) {
        print(rickPrime.name + " WINS the battle!");
    } else {
        print("It's a DRAW!");
    }
}