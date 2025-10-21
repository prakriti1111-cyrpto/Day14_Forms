let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");

    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. You are a sugar addict!";
    } 
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. That's a fishy answer!";
    } 
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are Correct!!!!";
    } 
    else {
        triviaAnswer.innerHTML = "Please select an answer first, " + fname + "!";
    }
}

function truthLie() {
    let answerParagraph = document.getElementById("truthlie-answer");

    let skydiving = document.getElementById("option1").checked;
    let languages = document.getElementById("option2").checked;
    let dogs = document.getElementById("option3").checked;

    if (skydiving) {
        answerParagraph.innerHTML = fname + ", correct! That's the lie!";
    } 
    else if (languages) {
        answerParagraph.innerHTML = fname + ", nope! That one’s true I am";
    } 
    else if (dogs) {
        answerParagraph.innerHTML = fname + ", nope! That one's true I am";
    } 
    else {
        answerParagraph.innerHTML = "Please choose an option first, " + fname + "!";
    }
}
