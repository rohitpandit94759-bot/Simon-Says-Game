let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");

let btns = ["redD", "greenD", "orangeD", "blueD"];

let started = false;
let level = 0;


document.addEventListener("keypress", function (){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }

    
});


// ---------------------------------------------------------------------------------------------------------------------------

// for flashing the button function 

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },500)
}
// -----------------------------------------------------------------------------------------------------------------------------

// for level up function
function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() *4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);


    btnFlash(randBtn);
}

// -------------------------------------------------------------------------------------------------------------------------------

fun

















