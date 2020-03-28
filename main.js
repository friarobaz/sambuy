
var WINS_MAX = 3;
var FADE_TIME = 15;

var questions = [
    "Qui a fait 9c",
    "Qui fait du deep water solo lorem qui fait du deep water solo qui fait du deep water solo qui fait du deep water solo qui fait du deep water solo qui fait du deep water solo",
    "Qui grimpe sans corde"];

var nb_of_questions = questions.length

var answers = [
    "ONDRA",
    "SHARMA",
    "HONNOLD"];

var categories = [  //not used yet
    "people",
    "people",
    "people"];

var picked = [];
var guess = "";
var nb_of_wins = 0;
var random_number = 0;
var the_question = "";
var the_answer = "";

function display_question(){
    document.getElementById("question_box").innerHTML = the_question;
    document.getElementById("image_box").innerHTML = "<img src=img/" + the_answer + ".jpg>";
};

function display_wins(){
    document.getElementById("nb_of_wins").innerHTML = nb_of_wins + "/" + WINS_MAX;
};

function fade_image() {
    document.getElementById("image_box").style.opacity = 0;
    $( "#image_box" ).animate({opacity: 1}, FADE_TIME * 1000,);
  };

function initialize() {
    //reset CSS
    guess = ""; //reset guess
    document.getElementById("guess_box").innerHTML = ""; //reset guess
    document.getElementById("guess_box").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reset css
    document.getElementById("next").style.display = "none"; //hide next
    document.getElementById("start_over").style.display = "none"; //hide start_over
    
    //chose unpicked random question 
    random_number = Math.floor( Math.random() * nb_of_questions);
    while (picked[random_number]){
        random_number = Math.floor( Math.random() * nb_of_questions);
    }
    the_question = questions[random_number];
    the_answer = answers[random_number];
    display_question();
    display_wins();
    document.getElementById("infos").style.display = "block";
    fade_image();
  };

function start_over() {
    nb_of_wins = 0;
    picked = new Array(nb_of_questions).fill(false); //reset picked
    //show everything
    document.getElementById("nb_of_wins_box").style.display = "block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("question_box").style.display = "block";
    document.getElementById("guess_box").style.display = "block";
    document.getElementById("image_box").style.display = "block";
    initialize();
};

function win_question(){
    $("#image_box").stop(); //stop animation
    document.getElementById("image_box").style.opacity = 1; //reveal image
    document.getElementById("guess_box").style.backgroundColor = "chartreuse"; //set CSS
    picked[random_number] = true; //mark question as picked
    nb_of_wins ++; //inscrease nb_of_wins
    display_wins();
    if (nb_of_wins < WINS_MAX){ //not done yet
        document.getElementById("next").style.display = "block";
    } else { //end game
        document.getElementById("question_box").style.display = "none";
        document.getElementById("image_box").style.display = "none";
        document.getElementById("nb_of_wins_box").style.display = "none";
        document.getElementById("guess_box").style.display = "none";
        document.getElementById("start_over").style.display = "block"; 
    };
};

start_over();

//get and display guess
$(document).keydown(function(event){ //get guess
    var letter_pressed = String.fromCharCode(event.which); //get letter
    var key_pressed = event.which; //get key
    if (guess != the_answer){ //if not right answer yet
        if (key_pressed == 8 && guess.length > 0){ //if backspace
            guess = guess.slice(0, -1); //remove last letter
        } else if (guess.length < the_answer.length && key_pressed > 64 && key_pressed < 91){  //if key is letter
            guess += letter_pressed; //add letter to guess
            document.getElementById("infos").style.display = "none"; //hide info
        };

        document.getElementById("guess_box").innerHTML = guess; //display guess
        if (guess == the_answer){
            win_question();
        };
    }else if (key_pressed == 13 && nb_of_wins < WINS_MAX){
        initialize();
    };
    
}); //end get guess





/*
let myVariable = 'Bob';

let iceCream = 'chocolat';

if (iceCream === 'chocolat') {
  alert("J'adore la glace au chocolat !");    
} else {
  alert("Ooooh, mais j'aurais préféré au chocolat.");    
}

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

  document.querySelector('html').addEventListener('click', function() {
    alert('Aïe, arrêtez de cliquer !!');
});

document.getElementById("demo").innerHTML = cars[0];

for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}

fruits.forEach(myFunction);

fruits.push("Lemon");

fruits.length;

var pos = fruits.indexOf('Banana');

vegetables.splice(pos, n); 
// n définit le nombre d'éléments à supprimer,
// à partir de la position pos

*/

