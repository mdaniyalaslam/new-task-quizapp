var database = firebase.database().ref('/');


var studentEmail = document.getElementById("studentEmail");
var studentPass = document.getElementById("studentPass");

document.getElementById("stop").addEventListener("submit",
    function submit() {
        event.preventDefault()
        
        var student = {
            email: studentEmail.value,
            pass: studentPass.value 
        }
    firebase.auth().signInWithEmailAndPassword(student.email, student.pass)
    .then(
        function (success) {
            // console.log(success.uid);
            database.child("student/" + success.uid)
            .once("value",function(snapshot) {

                var convert = JSON.stringify(snapshot.val())
                localStorage.setItem('loggedInstudent', convert)
                console.log(convert)
                location = "AttemptQuiz.html"

                // console.log(snapshot.val())
                // localStorage.setItem("student",JSON.stringify(snapshot.val))
            })

        }
    )
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
        
    })