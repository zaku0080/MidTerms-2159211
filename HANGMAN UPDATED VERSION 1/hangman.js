window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         // Array of topics
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;             // Number of spaces in word '-'
  var list;             

  // Get elements
  var showLives = document.getElementById("mylives");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.setAttribute('id', 'alphabet');
      list = document.createElement('li');
      list.setAttribute('class', 'letter');
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryname.innerHTML = "";
    }
  }

  // Create geusses ul
   result = function () {
    var wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;

      } else {
        guess.innerHTML = "_";
      }
      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "Moves:" + lives;
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      var unclick = document.getElementById('alphabet');
      unclick.classList.add("unclick");

    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        var unclick = document.getElementById('alphabet');
        unclick.classList.add("unclick");
        showLives.innerHTML = "You Win!";
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  
   // Hangman
  canvas =  function(){

    var myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#FFA500";
    context.lineWidth = 2;
  };
  
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
    context.lineWidth = 3;
}
   frame1 = function() {
     //draw (0, 150, 150, 150);
     platform.classList.remove("hide");
      platform.classList.add("show");
   };
   
   frame2 = function() {
     //draw (10, 0, 10, 600);
     post.classList.remove("hide");
      post.classList.add("show");
   };
  
   frame3 = function() {
     hang.classList.remove("hide");
     hang.classList.add("show");
   };
  
   frame4 = function() {
     rope.classList.remove("hide");
     rope.classList.add("show");
   };

    frame5 = function(){
      head.classList.remove("hide");
      head.classList.add("show");
    };

   torso = function() {
     body.classList.remove("hide");
     body.classList.add("show");
   };
  
   leftArm = function() {
     leftarm.classList.remove("hide");
     leftarm.classList.add("show");
   };
  
   rightArm = function() {
     rightarm.classList.remove("hide");
     rightarm.classList.add("show");
   };
  
   rightLeg = function() {
     rightleg.classList.remove("hide");
     rightleg.classList.add("show");
   };
  
   leftLeg = function() {
     leftleg.classList.remove("hide");
     leftleg.classList.add("show");
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  frame5, frame4, frame3, frame2, frame1]; 

  // OnClick Function
   var check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      //this.addClass('class', 'green');
      //this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
          this.classList.remove("active");
          this.classList.add("white");
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  
    
  // Play
  play = function () {
    categories = [
        ["attribute-selector", "universal-selector", "pseudo-element", "sibling-combinator", "descendant-combinator", "class-selector","id-selector","cascading-stylesheet","type-selector"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();
  
  // Hint


      hints = [
        ["a", "b", "c", "e", "f", "g","h","i","j"]
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Hint:  " +  hints [catagoryIndex][hintIndex];
  
// Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);

    platform.classList.remove("show");
    platform.classList.add("hide");
    post.classList.remove("show");
    post.classList.add("hide");
    hang.classList.remove("show");
    hang.classList.add("hide");
    rope.classList.remove("show");
    rope.classList.add("hide");
    head.classList.remove("show");
    head.classList.add("hide");
    body.classList.remove("show");
    body.classList.add("hide");
    rightarm.classList.remove("show");
    rightarm.classList.add("hide");
    leftarm.classList.remove("show");
    leftarm.classList.add("hide");
    leftleg.classList.remove("show");
    leftleg.classList.add("hide");
    rightleg.classList.remove("show");
    rightleg.classList.add("hide");

    play();
  }
}