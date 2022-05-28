let body = document.querySelector("body");
let input = document.querySelector("input");

document.title = 5;

var siren = new Audio("media/siren.mp3");
var type = new Audio("media/type.mp3");
var reset = new Audio("media/reset.mp3");
var tick = new Audio("media/tick.mp3");

//Keyboard sounds

function typeSound() {
    let randomNumber = Math.floor(Math.random() * 8);
    switch (randomNumber) {
        case 0:
            new Audio("media/typing_sounds/button1.mp3").play();
            break;
        case 1:
            new Audio("media/typing_sounds/button2.mp3").play();
            break;
        case 2:
            new Audio("media/typing_sounds/button3.mp3").play();
            break;
        case 3:
            new Audio("media/typing_sounds/button4.mp3").play();
            break;
        case 4:
            new Audio("media/typing_sounds/button5.mp3").play();
            break;
        case 5:
            new Audio("media/typing_sounds/button6.mp3").play();
            break;
        case 6:
            new Audio("media/typing_sounds/button7.mp3").play();
            break;
        case 7:
            new Audio("media/typing_sounds/button8.mp3").play();
    }
}

body.onkeydown = function (event) {
    typeSound();
    if (event.key == "Enter") {
        input.value.trim();
        if (input.value == "4 8 15 16 23 42") {
            document.title = 108;
            input.value = "";

            siren.pause()
            siren.currentTime = 0;

            reset.play();
        } else if (input.value == "start") {
            document.title = 4;
            input.value = "";
            siren.play();
        } else {
            input.value = "";
        }
    }
};

setInterval(function () {
    document.title--;
    console.log(document.title);
    

    if (document.title == 4 && document.title > 0) {
        siren.play();
    }

    tick.play()
}, 60000);

setInterval(function () {
    input.focus();
}, 1);
