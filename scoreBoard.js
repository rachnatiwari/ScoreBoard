alert("Connected");
var score1 = document.getElementById("playOne");
var score2 = document.getElementById("playTwo");
var P1 = document.getElementById("P1");
var P2 = document.getElementById("P2");
var s1=0;
var s2=0;
var max = document.getElementById("max");
var reset = document.getElementById("reset");
var num = document.querySelector("input[type=number]")
m=5;
var gameOver=false;

P1.addEventListener("click" , function(){
    if(!gameOver){
        s1++;
        if(s1===m){
            gameOver = true;
            score1.classList.add("winner");
        }
    }
    score1.textContent = s1;    
})

P2.addEventListener("click" , function(){
    if(!gameOver){
        s2++;
        if(s2===m){
            gameOver = true;
            score2.classList.add("winner");
        }
    }
    score2.textContent = s2;    
})

function newfunc(){
    s1=0;
    s2=0;
    gameOver = false;
    score1.textContent = s1;
    score2.textContent = s2;
    score1.classList.remove("winner");
    score2.classList.remove("winner");
}
reset.addEventListener("click", function(){
    newfunc();
})

num.addEventListener("change", function(){
    max.textContent = num.value;
    m = Number(num.value);
    newfunc();
})