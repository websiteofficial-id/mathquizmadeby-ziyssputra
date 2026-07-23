// ========================================
// MATH QUIZ UN CBT
// ========================================

// =========================
// Data
// =========================

let currentQuestion = 0;
let score = 0;
let correct = 0;
let wrong = 0;
let answered = false;

// 60 menit
let totalTime = 60 * 60;
let timer;

// =========================
// Element
// =========================

const menu = document.getElementById("menu");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");

const timerText = document.getElementById("timer");
const scoreText = document.getElementById("score");

const progress = document.getElementById("progress");

const current = document.getElementById("current");
const total = document.getElementById("total");

const question = document.getElementById("question");

const message = document.getElementById("message");

const buttons = document.querySelectorAll(".answer");

// Result

const nilai = document.getElementById("nilai");
const benar = document.getElementById("benar");
const salah = document.getElementById("salah");
const kosong = document.getElementById("kosong");
const grade = document.getElementById("grade");
const highscore = document.getElementById("highscore");

total.textContent = TOTAL_QUESTION;

// =========================
// START
// =========================

startBtn.onclick = function(){

    menu.classList.add("hidden");

    quiz.classList.remove("hidden");

    loadQuestion();

    startTimer();

}

// =========================
// TIMER
// =========================

function startTimer(){

    timer = setInterval(function(){

        totalTime--;

        let minute = Math.floor(totalTime/60);

        let second = totalTime%60;

        timerText.textContent =
        String(minute).padStart(2,"0")
        + ":"
        +
        String(second).padStart(2,"0");

        if(totalTime<=0){

            clearInterval(timer);

            finishQuiz();

        }

    },1000);

}

// =========================
// LOAD QUESTION
// =========================

function loadQuestion(){

    answered = false;

    message.innerHTML = "";

    const q = questions[currentQuestion];

    current.textContent = currentQuestion+1;

    question.innerHTML = q.question;

    buttons.forEach(function(btn,index){

        btn.disabled = false;

        btn.classList.remove("correct");

        btn.classList.remove("wrong");

        btn.innerHTML =
        String.fromCharCode(65+index)
        +
        ". "
        +
        q.options[index];

    });

    progress.style.width =
    ((currentQuestion+1)/TOTAL_QUESTION)*100+"%";

}

// =========================
// PILIH JAWABAN
// =========================

function chooseAnswer(index){

    if(answered) return;

    answered = true;

    buttons.forEach(btn=>btn.disabled=true);

    const q = questions[currentQuestion];

    const benarIndex = q.answer;

if(index===benarIndex){

    correct++;

    score += 2.5;

    scoreText.textContent = score;

    buttons[index].classList.add("correct");

    message.innerHTML = "✅ Jawaban Benar!";

    setTimeout(nextQuestion,1000);

}else{

    wrong++;

    buttons[index].classList.add("wrong");

    buttons[benarIndex].classList.add("correct");

    message.innerHTML =
    "❌ Salah<br><br>Jawaban yang benar adalah <b>"
    + q.options[benarIndex]
    + "</b>";

    setTimeout(nextQuestion,2000);

}

}

// =========================
// NEXT QUESTION
// =========================

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion>=TOTAL_QUESTION){

        finishQuiz();

        return;

    }

    loadQuestion();

}

// =========================
// FINISH QUIZ
// =========================

function finishQuiz(){

    clearInterval(timer);

    quiz.classList.add("hidden");

    result.classList.remove("hidden");

    let empty =
    TOTAL_QUESTION-correct-wrong;

    let finalScore =
    Math.round((correct/TOTAL_QUESTION)*100);

    nilai.innerHTML = finalScore;

    benar.innerHTML = correct;

    salah.innerHTML = wrong;

    kosong.innerHTML = empty;

    let huruf="E";

    if(finalScore>=90){

        huruf="A";

    }else if(finalScore>=80){

        huruf="B";

    }else if(finalScore>=70){

        huruf="C";

    }else if(finalScore>=60){

        huruf="D";

    }

    grade.innerHTML = huruf;

    let high =
    Number(localStorage.getItem("mathHighScore")||0);

    if(finalScore>high){

        high=finalScore;

        localStorage.setItem("mathHighScore",high);

    }

    highscore.innerHTML = high;

}