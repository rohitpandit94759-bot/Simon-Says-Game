let para = document.querySelector("p");
let orangeD = document.querySelector(".orangeD");

document.addEventListener("keydown", function(){
    para.innerText = "Level 1";
    if(para.innerText == "Level 1"){
        orangeD.addEventListener("click",flashBox);
     console.log("you reached this level 1 ");
}


});


function flashBox(){
    orangeD.classList.add("flash");

    setTimeout(function(){
        orangeD.classList.remove("flash");
    },1000);
}






