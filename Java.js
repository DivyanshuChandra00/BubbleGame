function makebubble(){
var clutter = "";
let hitrn = 0;
for(var i = 1; i<=160 ;i++){
    var Random = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${Random}</div>`;//pichla save rah do and save the next    
}

document.querySelector(".pbot").innerHTML = clutter;
}
var timer = 61;
function runtimer (){
    var timevalue = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }else{
            clearInterval(timer);
            document.querySelector("#timer").style.color = "red";
            document.querySelector(".pbot").innerHTML = `<div><h1>Time Over </h1> <br>
            Score:${score}</div>`;
            document.querySelector("#hit").style.color = "red";
            document.querySelector("#hit").style.border = "2px solid red";
            document.querySelector("#timer").style.border = "2px solid red";
            document.querySelector("#hit").textContent = "?";
            }
},1000)

}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitrn;
}
var score = 0;
function scoreInc(){
    score += 10;
    document.querySelector("#score").textContent = score;
}
//Now event Bubbling Starts


// Jispr click karo ge woh elementpr event chalega,aur eventListner na mile pr event element k parebt pr dhundhega , waha bhi naa milne par event parent ke parent ke parentpr listner dhundega
document.querySelector(".pbot").addEventListener("click",
function btnb(details){
    let bubbleValue = details.target.textContent
    bubbleValue =   Math.floor(Number(bubbleValue));
    if (bubbleValue === hitrn ) {
        scoreInc();
        makebubble();
        getNewHit();
    }
}

)
















getNewHit();
runtimer();
makebubble();




