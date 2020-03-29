
var WINS_MAX = 3;
var FADE_TIME = 10;
var WILDCARD = "LOL";

var questions = [
    "Qui a fait 9c?",
    "Quel grimpeur est connu pour ses ascensions en solo intégral, notamment la voie Freerider en 2017, sur le mythique big wall El Cap, au Yosemite? (prénom et nom)",
    "Quel grimpeur américain dont il manque un doigt a donné le prénom Fitz à son fils en hommage au Fitzroy, célèbre sommet en Patagonie qu'il a grimpé en libre en 2006? Il est aussi connu pour avoir le reccord de vitesse du Nose, au yosemite, qu'il a grimpé en moins de 2h... (prénom et nom)"];

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

function clear(){ //hide everything
    
    $('#start').hide();
    $('#game').hide();
    //$('#top_left').hide();
    //$('#question').hide();
    //$('#image').hide();
    //$('#guess').hide();
    //$('#bravo').hide();
    //$('footer').hide();
};

function display_question(){
    $('#question').text(the_question);
    document.getElementById("image").innerHTML = "<img src=img/" + the_image + ">";
};

function display_wins(){
    $('#nb_of_wins').text(nb_of_wins + "/" + WINS_MAX);
};

function fade_image() {
    document.getElementById("image").style.opacity = 0;
    $( "#image" ).animate({opacity: 1}, FADE_TIME * 1000,);
  };

function initialize() {
    //reset CSS
    guess = ""; //reset guess
    document.getElementById("guess").innerHTML = ""; //reset guess
    document.getElementById("guess").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reset css
    document.getElementById("next").style.display = "none"; //hide next
    document.getElementById("bravo").style.display = "none"; //hide bravo
    
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
    document.getElementById("question").style.display = "block";
    document.getElementById("guess").style.display = "block";
    document.getElementById("image").style.display = "block";
    initialize();
};

function win_question(){
    $("#image").stop(); //stop animation
    document.getElementById("image").style.opacity = 1; //reveal image
    document.getElementById("guess").style.backgroundColor = "chartreuse"; //set CSS
    picked[random_number] = true; //mark question as picked
    nb_of_wins ++; //inscrease nb_of_wins
    display_wins();
    if (nb_of_wins < WINS_MAX){ //not done yet
        $('#next').show();
    } else { //end game
        $('#time').text(time);
        $('#question').hide();
        $('#image').hide();
        $('#top_left').hide();
        $('#guess').hide();
        $('#bravo').show();
    };
};
//##################################################################################################
//##################################################################################################
//##################################################################################################

clear();
$('#start').show();

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

        document.getElementById("guess").innerHTML = guess; //display guess

        if (guess == the_answer || guess == WILDCARD){
            win_question();
        };
    }else if (key_pressed == 13 && nb_of_wins < WINS_MAX){ //next question on "enter"
        initialize();
    };
    
}); //end get guess
