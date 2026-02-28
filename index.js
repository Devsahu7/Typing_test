let timeLeft = 60;
let timer = null;
let paragraph = document.getElementById("paragraph").innerText;
let inputText = document.getElementById("inputText");
let timeDisplay = document.getElementById("time");

function startTest() {
    if (timer !== null) return; // already running

    inputText.disabled = false;
    inputText.focus();

    timer = setInterval(function() {
        timeLeft--;
        timeDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timer = null;
            inputText.disabled = true;
            showResult();
        }
    }, 1000);
}

function pauseTest() {
    clearInterval(timer);
    timer = null;
}

function resetTest() {
    clearInterval(timer);
    timer = null;
    timeLeft = 60;
    inputText.value = "";
    inputText.disabled = true;
    timeDisplay.innerText = timeLeft;
}

function showResult() {
    let typed = inputText.value;

    let words = typed.trim().split(/\s+/).length;
    let wpm = words;

    let correct = 0;
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === paragraph[i]) {
            correct++;
        }
    }

    let accuracy = Math.round((correct / paragraph.length) * 100);

    alert("Time's Up!\n\nWPM: " + wpm + "\nAccuracy: " + accuracy + "%");
}