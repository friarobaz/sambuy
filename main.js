
var WINS_MAX = 2;

var questions = [
    "qui a fait 9c",
    "qui fait du deep water solo",
    "qui grimpe sans corde"];

var nb_of_questions = questions.length

var answers = [
    "ONDRA",
    "SHARMA",
    "HONNOLD"];

var categories = [
    "people",
    "people",
    "people"];

var picked = [];
var guess = "";
var nb_of_wins = 0;
var random_number = Math.floor( Math.random() * nb_of_questions);
var the_question = "";
var the_answer = "";

function display_question(){
    document.getElementById("question_box").innerHTML = the_question;
    document.getElementById("image_box").innerHTML = "<img src=img/" + the_answer + ".jpg>";
};

function initialize() {
    //reset CSS
    document.getElementById("guess_box").style.backgroundColor = "inherit";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("start_over").style.visibility = "hidden";
    document.getElementById("nb_of_wins_box").innerHTML = nb_of_wins;
    //pick unpicked random question 
    while (picked[random_number]){
        random_number = Math.floor( Math.random() * nb_of_questions);
    }
    the_question = questions[random_number];
    the_answer = answers[random_number];
    guess = "";
    display_question();
  }

function start_over() {
    nb_of_wins = 0;
    picked = new Array(nb_of_questions).fill(false);
    initialize();
};

function win_question(){
    document.getElementById("guess_box").style.backgroundColor = "green"; //set CSS
    picked[random_number] = true; //mark question as picked
    nb_of_wins ++; //inscrease nb_of_wins
    document.getElementById("nb_of_wins_box").innerHTML = nb_of_wins; //display nb_of_wins
    if (nb_of_wins < WINS_MAX){
        document.getElementById("next").style.visibility = "visible"; //set CSS
    } else {
        document.getElementById("start_over").style.visibility = "visible"; //set CSS
    };
};



start_over();

//get and display guess
$(document).keydown(function(event){ //get guess
    if (guess != the_answer){
        var letter_pressed = String.fromCharCode(event.which); //get letter
        var key_pressed = event.which; //get key

        if (key_pressed == 8 && guess.length > 0){ //if backspace
            guess = guess.slice(0, -1); //remove last letter
        } else if (guess.length < the_answer.length && key_pressed > 64 && key_pressed < 91){  //if key is letter
            guess += letter_pressed; //add letter to guess
        };

        document.getElementById("guess_box").innerHTML = guess; //display guess

        if (guess == the_answer){
            win_question();
        };
    }; //end if guess != answer
    
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

