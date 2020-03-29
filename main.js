
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
    $( "#image" ).fadeTo(0, 0); //hide image
    $( "#image" ).fadeTo(FADE_TIME * 1000, 1); //slowly reveal image
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
    $("#question").show();
    $("#guess").show();
    $("#bravo").hide(); //hide "bravo"
    update_wins();
    reset_question();
};


function reset_question() {
    guess = ""; //reset guess
    win = false;
    $("#guess").text(guess);
    document.getElementById("guess").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reset css
    $("#next").hide(); //hide "appuyez sur entrer"
    $("#infos").show(); //show "ecrivez qqchose"
    pick_question(chosen_caterogy);
    display_question();
    fade_image();
};


function win_question(){
    $("#image").stop(); //stop animation
    $( "#image" ).fadeTo(0, 1);//reveal image
    document.getElementById("guess").style.backgroundColor = "chartreuse"; //set CSS
    picked[random_number] = true; //mark question as picked
    update_wins();
    $('#next').show(); //show "appuyez sur entrer"
};

function win_game(){
    //hide question etc
    $('#question').hide(); 
    $('#image').hide();
    $('#top_left').hide();
    $('#guess').hide();
    //show bravo
    $('#bravo').show();
    $('#time').text(time); //write time
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
    //alert("fin du while");

};

play();
    



//listen to keyboard input
$(document).keydown(function(event){
    var letter_pressed = String.fromCharCode(event.which); //get letter
    var key_pressed = event.which; //get key

    if (!win){
        if (key_pressed == 8 && guess.length > 0){ //if backspace
            guess = guess.slice(0, -1); //remove last letter
        } else if ((key_pressed > 64 && key_pressed < 91) || key_pressed == 32 || key_pressed == 189){  //if key is letter
            guess += letter_pressed; //add letter to guess
            $('#infos').hide(); //hide "ecrivez qqchose"
        };
        $("#guess").text(guess); //update guess
    
        if (guess == the_answer || guess == WILDCARD){
            win = true;
        };

        if (win){
            nb_of_wins++;
            if (nb_of_wins < WINS_MAX){
                win_question();
            }else{
                win_game();
            };
        }; //if win (only first time)

    }else{ //if win
        if(key_pressed == 13 && nb_of_wins < WINS_MAX){
            reset_question()}
        ;
    };
    
}); //end listen to keyboard


