const { text } = require("express");

let xp =0;
let health = 100;
let gold = 50;
let currentweapon = 0;
let fighting;
let monterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("button1");
const button2 = document.querySelector("button2");
const button3 = document.querySelector("button3");

 // initialize buttons
 button1.onclick =goStore;
 button1.onclick =goCave;
 button1.onclick =fightdrag;
 function goTown() {
    button1.innerText = "Go to store";
    button2.innerText = "Go to Cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says  \"store\" .";


}

 function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick =buyHealth;
    button2.onclick =buyWeapon;
    button3.onclick =goTown;
    text.innerText = "You enter the store.";


 }
  function goCave() {
    console.log("Going to cave.")
 }
  function goStore() {
    console.log("Fighting dragon.")
 }
 function buyHealth() {
}
function buyWeapon() {

}
function goTown() {

}
 
 function update(location) {
 button1
 }