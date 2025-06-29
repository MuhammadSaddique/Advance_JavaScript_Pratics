let  gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"]

let started = false;
let level = 0;
let h2 = document.querySelector("h2")


document.addEventListener("keypress", function(){
   if(started === false){
    console.log("Game is started!");
    started = true;
    levelUp()
   }

})

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            levelUp()
        } 

    } else{
        h2.innerText = `Game Over! Press any key to Start.`
        
    }
}


function levelUp(){
    level++
    h2.innerText = `Level ${level}`
    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIdx);
    gameSeq.push(randColor)
    console.log(gameSeq);

    gameFlash(randBtn);
}


function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn)
    userColor = btn.getAttribute("id");
    userSeq.push(userColor)
    checkAns(userSeq.length-1)
    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


