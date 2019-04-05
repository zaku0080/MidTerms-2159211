function done() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var correct = 0;

	if (question1 == "JavaScript") {
		correct++;
	}

	if (question1 == "Java Script") {
		correct++;
	}

	if (question1 == "java script") {
		correct++;
	}

	if (question1 == "javascript") {
		correct++;
	}

	if (question2 == "Document Object Model") {
		correct++;
	}

	if (question2 == "document object model") {
		correct++;
	}
	
	if (question3 == "is an application programming interface") {
		correct++;
	}
	
	if (question4 == "the document as nodes and objects") {
		correct++;
	  }
	
	
	if (question5 == "It can add/modify/remove") {
		correct++;
	}

	if (question6 == "DOM tree") {
		correct++;
	}		
	
	if (question7 == "Document Object Model") {
		correct++;
	}
	document.getElementById("after_submit").style.visibility = "visible";
	alert(document.getElementById("numberOfCorrect").innerHTML = "You got " + correct + " correct answers.");
}