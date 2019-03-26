function done() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var correct = 0;

	if (question1 == "Java Script") {
		correct++;
	}

	if (question2 == "Document Object Model") {
		correct++;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("numberOfCorrect").innerHTML = "Your got " + correct + " correct.";
}