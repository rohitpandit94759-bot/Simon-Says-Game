let level = 0;
let started = false;
let userSeq = [];
let gameSeq = [];
let btnColor = ["red", "green", "yellow", "blue"];
let h2 = document.querySelector('h2');

document.addEventListener("keydown", function () {
    if (started === false) {
        console.log("game started ");
        started = true;

        levelUp();




    }




});
// ------------------------------------------------------------------------------------------------------------------------
// function for flashing the button 


function gameFlash(btn) {
    btn.classList.add("gameFlash");

    setTimeout(function () {
        btn.classList.remove("gameFlash");
    }, 600)
}
//------------------------------------------------------------------------------------------------------------------------

function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200)
}

// --------------------------------------------------------------------------------------------------------------------------
// function for leveling up the levels 


function levelUp() {
    level++;
    userSeq = [];
    console.log(`level ${level} started`);
    h2.innerText = `level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomcolr = btnColor[randomIdx];
    gameSeq.push(randomcolr);

    console.log(gameSeq);

    let randombtn = document.querySelector(`.${randomcolr}`);
    gameFlash(randombtn);

}
// --------------------------------------------------------------------------------------------------------------------------
// function to detect the button press from the user 


function btnPress(){

    let btn = this;
    let userColor  = btn.getAttribute("id");
    userSeq.push(userColor);

    userFlash(btn);
     checkAns(userSeq.length - 1 );

}
let allBtns = document.querySelectorAll(".btn");

for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

   

// ---------------------------------------------------------------------------------------------------------------------
// function to check ans 


function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerText = `Game Over! Your score was ${level - 1 } Press any key to restart`;

        document.body.style.backgroundColor = "red";

        setTimeout(function(){
            document.body.style.backgroundColor = "white";
        },200);

        reset();
    }
}

// ------------------------------------------------------------------------------------------------------------------------
// function for reset 


function reset (){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}










