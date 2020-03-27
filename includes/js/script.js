
function barmove(start,end) {

  var elem = document.getElementById("myBar");   
  var width = start;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= end) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}



function next_question(values) {

    if (values == '1') {


        document.getElementById("survey-intro-page").style.display = "none";

        document.getElementById("survey-first-five-questions").style.display = "unset";

        document.getElementById("next-question-button").innerHTML = 'Next 5 Questions';
        document.getElementById("next-question-button").setAttribute("onclick", "next_question(2)");

        barmove(0,30);

    

    }
    if (values == '2') {


        document.getElementById("survey-first-five-questions").style.display = "none";

        document.getElementById("survey-second-five-questions").style.display = "unset";


        document.getElementById("next-question-button").innerHTML = 'Last 5 Questions';
        document.getElementById("next-question-button").setAttribute("onclick", "next_question(3)");


        barmove(30,60);





    } else if (values == '3') {
        document.getElementById("survey-second-five-questions").style.display = "none";
        document.getElementById("survey-second-five-questions").style.display = "none";
        document.getElementById("survey-third-five-questions").style.display = "unset";

        document.getElementById("next-question-button").innerHTML = 'Submit Survey';
        document.getElementById("next-question-button").setAttribute("onclick", "finish()");

       barmove(60,100);


}
}

function finish() {


    document.getElementById("survey-exit-page").style.display = "unset";
    document.getElementById("survey-third-five-questions").style.display = "none";
    document.getElementById("next-question-button").style.display = "none";
    document.getElementById("progress-bar").style.display = "none";
    

}

function confirmpassword()
{
    var display;
    if(confirm('Your given password will be reset once you confirm your email.'))
    {
        alert('Congratulations! Your password has been changed');
    }
    else
    {   
        alert('Re-directing to Login Page');
    }
}

function confirmuser()
{
  alert('Your User-Id is sent to your E-mail');
}


