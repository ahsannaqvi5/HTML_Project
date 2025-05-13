let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const text = document.getElementById("text");
const locations = [
    {
name: "town square",
"button text": ["Go to Store", "Go to Cave", "Fight Dragon"]
}
]

// initialize buttons
goTown();

function goTown() {
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says 'store'.";
}

function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store.";
}

function goCave() {
    text.innerText = "You enter the cave. It's dark and spooky.";
}

function fightDragon() {
    text.innerText = "You approach the dragon with bravery!";
}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        text.innerText = "You bought 10 health.";
    } else {
        text.innerText = "Not enough gold.";
    }
}

function buyWeapon() {
    if (gold >= 30) {
        gold -= 30;
        inventory.push("sword");
        text.innerText = "You bought a new weapon.";
    } else {
        text.innerText = "Not enough gold.";
    }
}
