let balance = 12500;

function updateBalance(){
document.getElementById("balance").innerText = balance;
document.getElementById("profileBalance").innerText = balance;
}

function showScreen(screenId){

document.querySelectorAll(".screen")
.forEach(screen=>{
screen.classList.remove("active");
});

document.getElementById(screenId)
.classList.add("active");
}

const slotItems = [
"🍒",
"💎",
"⭐",
"7️⃣",
"🍀"
];

function spinSlots(){

let a = slotItems[
Math.floor(Math.random()*slotItems.length)
];

let b = slotItems[
Math.floor(Math.random()*slotItems.length)
];

let c = slotItems[
Math.floor(Math.random()*slotItems.length)
];

document.getElementById("slot1").innerText = a;
document.getElementById("slot2").innerText = b;
document.getElementById("slot3").innerText = c;

if(a===b && b===c){

balance += 1000;

document.getElementById("slotResult")
.innerText =
"🎉 JACKPOT +1000";

}else{

balance -= 100;

document.getElementById("slotResult")
.innerText =
"😢 -100";
}

updateBalance();
}

function playRoulette(color){

const result =
Math.random() > 0.5
? "red"
: "black";

if(result === color){

balance += 500;

document.getElementById("rouletteResult")
.innerText =
"🎉 WIN +500";

}else{

balance -= 200;

document.getElementById("rouletteResult")
.innerText =
"😢 LOSE -200";
}

updateBalance();
}

function playBlackjack(){

let player =
Math.floor(Math.random()*11)+11;

let dealer =
Math.floor(Math.random()*11)+11;

document.getElementById("playerCard")
.innerText = player;

document.getElementById("dealerCard")
.innerText = dealer;

if(player > dealer){

balance += 700;

document.getElementById("blackjackResult")
.innerText =
"🎉 YOU WIN +700";

}else{

balance -= 250;

document.getElementById("blackjackResult")
.innerText =
"😢 DEALER WINS";
}

updateBalance();
}

updateBalance();