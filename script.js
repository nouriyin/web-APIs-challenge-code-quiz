var quizStatus = true; // Know the status of the quiz. Quiz is not running = false , running = true
var questionNumber = 0; // Track the question answered.
var answerNumber = 0; // Track next answers to show
var score = 0; // Score tracker
var viewHighScoresBtnEl = document.getElementById('view-high-scores'); // View High Scores Btn El
var startQuizBtnEl = document.getElementById('start-quiz'); // Start Quiz button Btn El
var answer1BtnEl = document.getElementById('answer1'); // Start Quiz button Btn El
var answer2BtnEl = document.getElementById('answer2'); // Start Quiz button Btn El
var answer3BtnEl = document.getElementById('answer3'); // Start Quiz button Btn El
var answer4BtnEl = document.getElementById('answer4'); // Start Quiz button Btn El
var submitScoreEl = document.getElementById('submitScore'); // Start Quiz button Btn El
var questionsEl = document.getElementById('questions'); // Questions for the main Div
var mainDivEl = document.getElementById('mainDiv'); // Main div container for all elements except for header elements
var htmlTimeLeft = document.getElementById('timeLeft'); // Display counter @ the html level.
var answerCorrectWrong = document.getElementById('answerCorrectWrong'); // Display counter @ the html level.
var questionDisplayEl = document.createElement("questionDisplay"); // Display Question
var finalScoreDisplayEl = document.createElement("finalScoreDisplay"); // Display Question
var enterInitialsEl = document.createElement("enterInitials"); // Enter initials
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea"); // TextArea
var button1234 = document.createElement("button"); // Test answer 1
var timeLeft = 60; // Global time left assignment counter

answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';

answerCorrectWrong.style.display='none';
enterInitialsTextArea.style.display='none';



var questionsObject = { // Object that holds correct answers.
    correct: { 
        0 : "Commonly used datatypes DO NOT include?",
        1 : "The condition statement if/else is enclosed with the following:",
        2 : "Arrays can be used to store the following", // Button #4 for 
        3 : "A very useful tool to debug arrays is:", // Button #3
        4 : "Strings must be enclosed with:"
    }
};

var answersObject = { // Object that holds correct answers.
    answers: { 
        0 : {
            0: "Strings",
            1: "Boolean",
            2: "Alerts",
            3: "Numbers"},
        1 : {
            0: "Parentheses",
            1: "Curly Brackets",
            2: "Quotes",
            3: "Square Brackets"},
        2 : { // Button #3
            0: "Javascript",
            1: "Terminal/bash",
            2: "For loops", 
            3: "Console.log"},      
        3 : { // Answer to question 5 --> Button #2
            0: "Commas",
            1: "Curly brackets",
            2: "Quotes", 
            3: "Parentheses"},      
        4 : { // Button #4
            0: "Number of strings",
            1: "Other arrays",
            2: "Booleans",
            3: "All of the above"},  
    }
};


htmlTimeLeft.textContent = timeLeft;

viewHighScoresBtnEl.addEventListener("click", function() {

window.alert("Clicked");
});


answer1BtnEl.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

answer2BtnEl.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

answer3BtnEl.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

answer4BtnEl.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

submitScoreEl.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

startQuizBtnEl.addEventListener("click", function() {

//debugger;
    startQuizBtnEl.style.display = 'none';
    questionDisplay.style.display='none';
    finalScoreDisplay.style.display = 'none';
    enterInitials.style.display='none';
    
    

    score = 0; // Score is 0 again.
    
    timeLeft=60;
    htmlTimeLeft.textContent = timeLeft;

 //debugger;
    
    
    var timeInterval = setInterval(function() {
        if(timeLeft >= 1) {
            //questionDisplayEl.textContent = questionsObject.correct[0];
            //mainDivEl.appendChild(questionDisplayEl);
            //mainDivEl.appendChild(button1234);
            //questionDisplay.style.display= "";
            questionDisplay.textContent = questionsObject.correct[questionNumber];
            questionDisplay.style.display= "";
            answer1BtnEl.style.display = "";
            answer2BtnEl.style.display = "";
            answer3BtnEl.style.display = "";
            answer4BtnEl.style.display = "";

            //Check if game is over.

            
         
            answer1BtnEl.textContent = answersObject.answers[answerNumber][0];
            answer2BtnEl.textContent = answersObject.answers[answerNumber][1];
            answer3BtnEl.textContent = answersObject.answers[answerNumber][2];
            answer4BtnEl.textContent = answersObject.answers[answerNumber][3];
           
            gridContainer.appendChild(questionDisplayEl);
            gridContainer.appendChild(answer1BtnEl);
            gridContainer.appendChild(finalScoreDisplayEl);
            timeLeft -= 1;
            htmlTimeLeft.textContent = timeLeft;
            console.log("time left:" + timeLeft)
            

            answer1BtnEl.addEventListener("click", function() {

                if (questionDisplay.textContent === "The condition statement if/else is enclosed with the following:" && answer1BtnEl.textContent === "Parentheses") {
                    console.log("Correct");
                   // timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
                    score = 20; // Give user a 10+ score
                    questionNumber = 2; // Move to the next question which is the third questions
                    answerNumber = 4;
                    answerCorrectWrong.style.display="";
                    answerCorrectWrong.textContent = "Correct!";
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                } else {
                    answerCorrectWrong.style.display="";
                    answerCorrectWrong.textContent = "Wrong!";
                    answerCorrectWrong.style.borderTop = "solid #800080";
                }
      

            });

            answer2BtnEl.addEventListener("click", function() {

                if (questionDisplay.textContent === "Strings must be enclosed with:" && answer2BtnEl.textContent === "Curly brackets") {
                    console.log("Correct");
                    //timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
                    score = 50; // Give user a 10+ score
                    //questionNumber = 2; // Move to the next question
                    //game over
                    answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                    answerCorrectWrong.textContent = "Correct!";
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                    //window.alert("Game Over"); Game is over at this point.
                    questionNumber = 0; // Game is over, no more questions to show.
                    answerNumber = 0; // Game is over, no more answers to show.
                    console.log("I'm here" + timeInterval);
                    answer1BtnEl.style.display = 'none';
                    answer2BtnEl.style.display = 'none';
                    answer3BtnEl.style.display = 'none';
                    answer4BtnEl.style.display = 'none';
                    answerCorrectWrong.style.display='none'; // When time is over correct or wrong will go away.
                    startQuizBtnEl.style.display = 'none'; // Remove Start Quiz button.
                    //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                    questionDisplay.textContent = "You have finished the quiz!";
                    finalScoreDisplay.style.display = ""; // Allow display for final score
                    enterInitials.style.display = ""; // Display Message Enter initials
                    enterInitialsTextArea.style.display="";  // Capture user score once submitted is clicked.
                    finalScoreDisplay.textContent = "Your final score is: " + score;
                    enterInitials.textContent = "Enter initials: "
                    submitScoreEl.style.display = "";
                    submitScoreEl.textContent = "Submit";

                    
                    //Exit the quiz/timer.
                    clearInterval(timeInterval);
                }

                
            });

            answer3BtnEl.addEventListener("click", function() {

                if (questionDisplay.textContent === "Commonly used datatypes DO NOT include?" && answer3BtnEl.textContent === "Alerts") {
                    console.log("Correct");
                    //timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
                    score = 10; // Give user a 10+ score
                    questionNumber = 1; // Move to the next question which is the second question
                    answerNumber = 1;
                    answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                    answerCorrectWrong.textContent = "Correct!";
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                }

                else if (questionDisplay.textContent === "A very useful tool to debug arrays is:" && answer3BtnEl.textContent === "For loops") {
                    console.log("Correct");
                    //timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
                    score = 40; // Give user a 10+ score
                    questionNumber = 4; // Move to the next question which  is the fifth question
                    answerNumber =3;
                    answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                    answerCorrectWrong.textContent = "Correct!";
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                }


                
            });

            answer4BtnEl.addEventListener("click", function() {

                if (questionDisplay.textContent === "Arrays can be used to store the following" && answer4BtnEl.textContent === "All of the above") {
                    console.log("Correct");
                   // timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
                    score = 30; // Give user a 10+ score
                    //Game is overquestionNumber = 4; // Move to the next question
                    questionNumber = 3; // Move to the next question which is the fourth question
                    answerNumber = 2;
                    answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                    answerCorrectWrong.textContent = "Correct!"
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);

                }
                
            });

        }
        else if(timeLeft === 0){
          //timerEl.textContent = "";
          clearInterval(timeInterval);
          console.log("I'm here" + timeInterval);
          answer1BtnEl.style.display = 'none';
          answer2BtnEl.style.display = 'none';
          answer3BtnEl.style.display = 'none';
          answer4BtnEl.style.display = 'none';
          answerCorrectWrong.style.display='none'; // When time is over correct or wrong will go away.
          //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
          questionDisplay.textContent = "Game Over!. Try again by clicking on \"Click Start Quiz\"";
          startQuizBtnEl.style.display = "";
          
          //gridContainer.appendChild(questionDisplayEl);
    
          //displayMessage();
        }
      }, 1000)

    


/*

   var countdown = function() {
        console.log(counter);
        counter--;
        if(counter === 0) {
            quizStatus = false; 
            console.log("blastoff");
            clearInterval(startCountDown);
            return quizStatus        
        }
    } 
    // When button is cliecked we will start the countdown
    var startCountDown = setInterval(countdown, 1000);
    */

});