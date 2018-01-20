var database = firebase.database().ref("/")
var quizTempData = localStorage.getItem("quizTempData")
quizTempData = JSON.parse(quizTempData)
var teacher = localStorage.getItem('loggedInTeacher');
teacher = JSON.parse(teacher)
var teacherId = teacher.uid;
var quizKey = quizTempData.key;
var i = 0;

console.log(teacherId)



var question = document.getElementById("question")
var option1 = document.getElementById('option1');
var option1corr = document.getElementById('option1corr');
var option2 = document.getElementById('option2');
var option2corr = document.getElementById('option2corr');
var option3 = document.getElementById('option3');
var option3corr = document.getElementById('option3corr');
var marks = document.getElementById('marks');
// var questionsArray = [];
// database.child('quizData').child(user.id).child('quiz1').child("questions").on('child_added',snap=>{
//     questionsArray.push(snap.val());
// });

function addMore() {

    var addQuestions = {
        question: question.value,
        option1: option1.value,
        option1corr: option1corr.value,
        option2: option2.value,
        option2corr: option2corr.value,
        option3: option3.value,
        option3corr: option3corr.value,
        marks : marks.value

    }
    // questionsArray.push(addQuestions);
    question.value = ""
    option1.value = ""
    option1corr.value = ""
    option2.value = ""
    option2corr.value = ""
    option3.value = ""
    option3corr.value = ""
    marks.value = ""
    database.child("quizData").child(teacherId).child(quizKey).child('questions').child(i++).set(addQuestions);
    // database.child("quizData").child(user.id).child('quiz1').child('question').push(questionsArray);
    
}
function save() {

    localStorage.removeItem("quizTempData");
    alert("saved!")
    location = "renderQuiz.html"
}

