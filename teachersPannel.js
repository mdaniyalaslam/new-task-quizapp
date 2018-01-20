var database = firebase.database().ref('/');
var teachersGreeting = document.getElementById("teachersGreeting");
var teacher = localStorage.getItem("loggedInteacher");
JSON.parse(teacher);
var uid = localStorage.getItem("UID")
// console.log(uid)
database.child("teacher/" + uid).on("value", function (snapshot) {
    // console.log(snapshot.val().teacherFirstName)
    teachersGreeting.innerHTML = "Welcome" + "<br>" + snapshot.val().teacherFirstName +" "+ snapshot.val().teacherLastName;
})


function makeQuiz() {
    // alert("a")
    location = "quizDetails.html"
}
