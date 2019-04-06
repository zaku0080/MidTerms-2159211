function done() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value;
	var question12 = document.quiz.question12.value;
	var question13 = document.quiz.question13.value;
	var question14 = document.quiz.question14.value;
	var question15 = document.quiz.question15.value;
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

	if (question8 == "adoptNode()") {
		correct++;
	}

	if (question9 == "Nodes") {
		correct++;
	}

	if (question10 == "Storage") {
		correct++;
	}

	if (question11 == "normalize()") {
		correct++;
	}

	if (question12 == "dispatchStyle") {
		correct++;
	}

	if (question13 == "removeAttribute()") {
		correct++;
	}

	if (question14 == "adoptNode()") {
		correct++;
	}

	if (question15 == "appendChild") {
		correct++;
	}
	document.getElementById("after_submit").style.visibility = "visible";
	alert(document.getElementById("numberOfCorrect").innerHTML = "You got " + correct + " correct answers.");
}