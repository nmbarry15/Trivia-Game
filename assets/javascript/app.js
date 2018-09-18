
var questionNum;
var correct = 0;
var incorrect = 0;
var unAnswered = 0;
var time = 10;
var intervalId;

var gameinfo = {
    questions: ["1: Who won the 2010 Stanley Cup?", "2: What is Tiger Woods real name?",
        "3: Where is Rugby originally from?", "4: What team has won the most Super Bowls?",
        "5: Whos was the youngest swimmer in the 2012 Olympics?", "6: Who was the first MLB player to get his number retired?"],
    answer1: ["The Minnesota Wild", "Adam Woods",
        "New Zealand", "New York Giants",
        "Nastia Lukin", "Lou Gehrig"],
    answer2: ["The Calgary Flames", "Eldrick Woods",
        "USA", "Dallas Cowboys",
        "Rebecca Soni", "Babe Ruth"],
    answer3: ["the Chicago Blackhawks", "Charlie Woods",
        "Polynesia", "Pittsburgh Steelers",
        "Michael Phelps", "Hank Aaron"],
    answer4: ["The L.A. Kings", "San Juan Woods",
        "England", "Green Bay Packers",
        "Missy Franklin", "Sandy Koufax"],
    correctAns: [3, 2, 4, 3, 4, 1],
    correctGifs: ["assets/images/chicago-blackhawks.gif", "assets/images/tiger-woods-yes.gif",
        "assets/images/rugby-yes.gif", "assets/images/steelers-yes.gif",
        "assets/images/missy-yes.gif", "assets/images/lou-yes.gif"],
    incorrectGifs: ["assets/images/chicago-blackhawks-no.gif", "assets/images/tiger-woods-no.gif",
        "assets/images/rugby-no.gif", "assets/images/steelers-no.gif",
        "assets/images/missy-no.gif", "assets/images/lou-no.gif"]
}

function start() {
    questionNum = 0;
    correct = 0;
    incorrect = 0;
    unAnswered = 0;
    time = 10;

    $("#start").hide();
    $("#playAgain").hide();
    $(".abtn").show();
    $("#time-left").show();
    $("#question-num").show();
    $(".correct").html("");
    $(".incorrect").html("");
    $(".unanswered").html("");
    nextQuestion();
}

function timeStart() {
    stop();
    intervalId = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(intervalId);
}

function decrement() {
    time--;
    $(".timer").html(time);
    if (time === 0) {
        stop();
        unAnswered++;
        time = 10;
        unanswered();
        setTimeout(nextQuestion, 3000);
        questionNum++;
    }
}

function playGame() {
    stop();
    time = 10;
    var userAnswer = parseInt($(this).attr("value"));
    console.log(userAnswer);
    if (userAnswer === gameinfo.correctAns[questionNum]) {
        correct++;
        correctAns();
        setTimeout(nextQuestion, 3000);
        questionNum++;
    }
    else {
        incorrect++;
        incorrectAns();
        setTimeout(nextQuestion, 3000);
        questionNum++;
    }
}

function nextQuestion() {
    if (questionNum == gameinfo.questions.length) {
        stop();
        endGame();
    }
    else {
        $(".abtn").show();
        $("#time-left").show();
        $(".correct").html("");
        $(".incorrect").html("");
        $(".timer").html(time);
        $(".question").html(gameinfo.questions[questionNum]);
        $("#answer1").html(gameinfo.answer1[questionNum]);
        $("#answer2").html(gameinfo.answer2[questionNum]);
        $("#answer3").html(gameinfo.answer3[questionNum]);
        $("#answer4").html(gameinfo.answer4[questionNum]);

        timeStart();
    }
}

function correctAns() {
    $(".abtn").hide();
    $("#time-left").hide();
    switch (gameinfo.correctAns[questionNum]) {
        case 1:
            $(".correct").html("Correct! The answer is " + gameinfo.answer1[questionNum] + ".");
            break;
        case 2:
            $(".correct").html("Correct! The answer is " + gameinfo.answer2[questionNum] + ".");
            break;
        case 3:
            $(".correct").html("Correct! The answer is " + gameinfo.answer3[questionNum] + ".");
            break;
        case 4:
            $(".correct").html("Correct! The answer is " + gameinfo.answer4[questionNum] + ".");
            break;
    }
    $(".incorrect").html('<img src="' + gameinfo.correctGifs[questionNum] + '">');
}

function incorrectAns(userNum) {
    $(".abtn").hide();
    $("#time-left").hide();
    switch (gameinfo.correctAns[questionNum]) {
        case 1:
            $(".correct").html("Incorrect! The answer is " + gameinfo.answer1[questionNum] + ".");
            break;
        case 2:
            $(".correct").html("Incorrect! The answer is " + gameinfo.answer2[questionNum] + ".");
            break;
        case 3:
            $(".correct").html("Incorrect! The answer is " + gameinfo.answer3[questionNum] + ".");
            break;
        case 4:
            $(".correct").html("Incorrect! The answer is " + gameinfo.answer4[questionNum] + ".");
            break;
    }
    $(".incorrect").html('<img src="' + gameinfo.incorrectGifs[questionNum] + '">');
}

function unanswered(userNum) {
    $(".abtn").hide();
    $("#time-left").hide();
    switch (gameinfo.correctAns[questionNum]) {
        case 1:
            $(".correct").html("You ran out of time! The answer is " + gameinfo.answer1[questionNum] + ".");
            break;
        case 2:
            $(".correct").html("You ran out of time! The answer is " + gameinfo.answer2[questionNum] + ".");
            break;
        case 3:
            $(".correct").html("You ran out of time! The answer is " + gameinfo.answer3[questionNum] + ".");
            break;
        case 4:
            $(".correct").html("You ran out of time! The answer is " + gameinfo.answer4[questionNum] + ".");
            break;
    }
    $(".incorrect").html('<img src="' + gameinfo.incorrectGifs[questionNum] + '">');
}

function endGame() {
    $(".abtn").hide();
    $("#time-left").hide();
    $("#question-num").hide();
    $("#playAgain").show();
    $(".correct").html("Correct Answers: " + correct);
    $(".incorrect").html("Incorrect Answers: " + incorrect);
    $(".unanswered").html("Unanswered: " + unAnswered);
}

$("#start").click(start);
$("#playAgain").click(start);
$(".abtn").click(playGame);

$("#playAgain").hide();
$(".abtn").hide();
$("#time-left").hide();
$("#question-num").hide();
