
var WINS_MAX = 3;
var FADE_TIME = 10;
var WILDCARD = "PENIS";

var questions = [
    "Qui a fait 9c?",
    "Qui fait du deep water solo?",
    "Qui grimpe sans corde?"];

var nb_of_questions = questions.length

var answers = [
    "ADAM ONDRA",
    "CHRIS SHARMA",
    "ALEX HONNOLD"];

var images = [
    "ondra.jpg",
    "sharma.jpg",
    "honnold.jpg"];

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
var the_image= "";
var start;
var time = 0;

function display_question(){
    document.getElementById("question_box").innerHTML = the_question;
    document.getElementById("image_box").innerHTML = "<img src=img/" + the_image + ">";
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
    the_image = images[random_number];
    display_question();
    display_wins();
    $("#timer").innerHTML = time;
    document.getElementById("infos").style.display = "block";
    fade_image();
  };

function start_over() {
    start = new Date;
    nb_of_wins = 0;
    picked = new Array(nb_of_questions).fill(false);
    document.getElementById("top_left").style.display = "block";
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
        $('#time').text(time);
        document.getElementById("question_box").style.display = "none";
        document.getElementById("image_box").style.display = "none";
        document.getElementById("top_left").style.display = "none";
        document.getElementById("guess_box").style.display = "none";
        document.getElementById("start_over").style.display = "block"; 
    };
};



start_over();


setInterval(function() {
    time = Math.floor((new Date - start) / 1000)
    $('#timer').text(time);
}, 1000);

//get and display guess
$(document).keydown(function(event){ //get guess
    var letter_pressed = String.fromCharCode(event.which); //get letter
    var key_pressed = event.which; //get key
    if (guess != the_answer && guess != WILDCARD){ //if not right answer yet
        if (key_pressed == 8 && guess.length > 0){ //if backspace
            guess = guess.slice(0, -1); //remove last letter
        } else if (guess.length < the_answer.length && ((key_pressed > 64 && key_pressed < 91) || key_pressed == 32)){  //if key is letter
            guess += letter_pressed; //add letter to guess
            document.getElementById("infos").style.display = "none"; //hide info
        };

        document.getElementById("guess_box").innerHTML = guess; //display guess

        if (guess == the_answer || guess == WILDCARD){
            win_question();
        };
    }else if (key_pressed == 13 && nb_of_wins < WINS_MAX){ //next question on "enter"
        initialize();
    };
    
}); //end get guess
