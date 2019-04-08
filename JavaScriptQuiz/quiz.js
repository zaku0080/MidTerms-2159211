/**
 * @author Quiambao, Ryan Christopher R.
 * @author Ramirez, Jimmy Jr. C.
 */
function onSubmit(){
	/**
	 * numOfQuestions: number of questions
	 * answerArr: for the answer of the questions.
	 */
	var score = 0;
	var numOfQuestions = 15;
	var answerArr = ['b', 'a', 'd', 'b', 'e', 'c', 'a', 'b', 'c', 'd', 'a', 'c', 'b', 'd', 'c'];
	/**
	get the questions and store the answers to the question into a variable
	access the quiz and question
	*/
	var question1 = document.forms['quiz']['question1'].value;
	var question2 = document.forms['quiz']['question2'].value;
	var question3 = document.forms['quiz']['question3'].value;
	var question4 = document.forms['quiz']['question4'].value;
	var question5 = document.forms['quiz']['question5'].value;

	var question6 = document.forms['quiz']['question6'].value;
	var question7 = document.forms['quiz']['question7'].value;
	var question8 = document.forms['quiz']['question8'].value;
	var question9 = document.forms['quiz']['question9'].value;
	var question10 = document.forms['quiz']['question10'].value;

	var question11 = document.forms['quiz']['question11'].value;
	var question12 = document.forms['quiz']['question12'].value;
	var question13 = document.forms['quiz']['question13'].value;
	var question14 = document.forms['quiz']['question14'].value;
	var question15 = document.forms['quiz']['question15'].value;

	/**
	This for loop is to check if there is any questions you missed while answering
	*/
	for(var i=1; i <= numOfQuestions; i++){
		if(eval('question' + i) == ''){
			alert("You missed question number " + i);
		}
	}

	/**
	This for loop tally the correct answer
	*/
	for (var i=1; i <= numOfQuestions; i++) {
		if(eval('question' + i) == answerArr[i - 1]){
			score ++;
		}
	}

	/**
	output store the document getting the elemtent by its ID
	and displays an alert message of your score including in the header score
	*/
	alert(document.getElementById("results").innerHTML = "You got " + score + " correct answers."); 
	results.innerHTML = "<h2>You scored: " + score + " points out of " + numOfQuestions +"</h2>";
	return false;

}


