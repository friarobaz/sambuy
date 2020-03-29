
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
var chosen_caterogy = "people";
var win = false;

function clear(){ //hide everything
    $('#start').hide();
    $('#game').hide();
};

function display_question(){
    $('#question').text(the_question);
    document.getElementById("image").innerHTML = "<img src=img/" + the_image + ">";
};

function update_wins(){
    $('#nb_of_wins').text(nb_of_wins + "/" + WINS_MAX);
};

function fade_image() {
    $( "#image" ).fadeTo(0, 0);
    $( "#image" ).fadeTo(FADE_TIME * 1000, 1);
  };

function pick_question(chosen_caterogy){
    random_number = Math.floor( Math.random() * nb_of_questions); //pick random number
    while (picked[random_number] || categories[random_number] != chosen_caterogy){ ; //check if unpicked and right category
        random_number = Math.floor( Math.random() * nb_of_questions) //reroll
    } //end while
    the_question = questions[random_number];
    the_answer = answers[random_number];
    the_image = images[random_number];
};

function reset_game() {
    start = new Date;
    nb_of_wins = 0;
    picked = new Array(nb_of_questions).fill(false); //reset "picked" array
    $("#game").show();
    $("#top_left").show();
    update_wins();
};


function reset_question() {
    guess = ""; //reset guess
    $("#guess").text(guess);
    document.getElementById("guess").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reset css
    $("#next").hide(); //hide "appuyez sur entrer"
    $("#bravo").hide(); //hide "bravo"
    $("#infos").show(); //show "ecrivez qqchose"
    pick_question(chosen_caterogy);
    display_question();
    fade_image();
};


function win_question(){
    $("#image").stop(); //stop animation
    document.getElementById("image").style.opacity = 1; //reveal image
    document.getElementById("guess").style.backgroundColor = "chartreuse"; //set CSS
    picked[random_number] = true; //mark question as picked
    nb_of_wins ++; //inscrease nb_of_wins
    update_wins();
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

setInterval(function() {
    time = Math.floor((new Date - start) / 1000)
    $('#timer').text(time);
}, 1000);
//##################################################################################################
//##################################################################################################
//##################################################################################################

function play(){
    clear();
    //get_team_name_and_category(); //fonction a creer!!
    reset_game();
    reset_question();
    //alert("fin du while");

};

play();
    



//get and display guess 
$(document).keydown(function(event){ //get guess
    var letter_pressed = String.fromCharCode(event.which); //get letter
    var key_pressed = event.which; //get key

    if (guess == the_answer || guess == WILDCARD){
        win = true;
    };

    if (!win){ //if not right answer yet
        if (key_pressed == 8 && guess.length > 0){ //if backspace
            guess = guess.slice(0, -1); //remove last letter
        } else if (guess.length < the_answer.length && ((key_pressed > 64 && key_pressed < 91) || key_pressed == 32)){  //if key is letter
            guess += letter_pressed; //add letter to guess
            document.getElementById("infos").style.display = "none"; //hide info
        };

        document.getElementById("guess").innerHTML = guess; //display guess

        if (win){
            win_question();
        };
    }else if (key_pressed == 13 && nb_of_wins < WINS_MAX){ //next question on "enter"
        reset_question();
    };
    
}); //end get guess
