var timer = 30;
var score = 0;
var hitrn = 0;

function inScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
};

function makeBoubble() {

    var clutter = "";

    for (var i = 1; i <= 170; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += ` <div class="boubble">${rn}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = clutter;

};

function runTimer() {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }
        else {
            clearInterval(timerInt);
            document.querySelector(".pbtm").innerHTML = `${score} <br> Game Over`;
        }

    }, 1000);
};

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#Hitter").textContent = hitrn;
};

document.querySelector(".pbtm").addEventListener("click",
    function (dets) {
        var clikedNum = Number(dets.target.textContent);
        if (clikedNum === hitrn) {
            inScore();
            makeBoubble();
            getNewHit();
        }
    })

getNewHit();
runTimer();
makeBoubble();


