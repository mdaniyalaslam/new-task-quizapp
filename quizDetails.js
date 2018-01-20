var database = firebase.database().ref("/")

var quizName = document.getElementById("quizName")
var marks = document.getElementById("marks")
var time = document.getElementById("time")
var instructions = document.getElementById("instructions")
var syllabus = document.getElementById("syllabus")
var teacher = JSON.parse(localStorage.getItem('loggedInTeacher'));

function submitQuizData(){
    var quizDataObj = {
        quizName:quizName.value,
        marks:marks.value,
        time:time.value,
        instructions:instructions.value,
        syllabus:syllabus.value
    }
    database.child("quizData/" + teacher.uid).push(quizDataObj).then((snap,sd)=>{
        console.log(snap.key);
        quizDataObj.key = snap.key;
        
        localStorage.setItem("quizTempData", JSON.stringify(quizDataObj));
        location = "makeQuiz.html";
    })
}
