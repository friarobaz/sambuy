var WINS_MAX = 2;
var FADE_TIME = 9;
var WILDCARD = "LOL";

var questions = [
    "Qui a fait 9c?",
    "Quel grimpeur est connu pour ses ascensions en solo intégral, notamment la voie Freerider en 2017, sur le mythique big wall El Cap, au Yosemite? (prénom et nom)",
    "Quel grimpeur américain dont il manque un doigt a donné le prénom Fitz à son fils en hommage au Fitzroy, célèbre sommet en Patagonie qu'il a grimpé en libre en 2006? Il est aussi connu pour avoir le reccord de vitesse du Nose, au yosemite, qu'il a grimpé en moins de 2h... (prénom et nom)",
    "qui est la plus belle",
    "Qui a fait 9c?",
    "Quel grimpeur est connu pour ses ascensions en solo intégral, notamment la voie Freerider en 2017, sur le mythique big wall El Cap, au Yosemite? (prénom et nom)",
    "Quel grimpeur américain dont il manque un doigt a donné le prénom Fitz à son fils en hommage au Fitzroy, célèbre sommet en Patagonie qu'il a grimpé en libre en 2006? Il est aussi connu pour avoir le reccord de vitesse du Nose, au yosemite, qu'il a grimpé en moins de 2h... (prénom et nom)",
    "qui est la plus belle"];

var answers = [
    "ADAM ONDRA",
    "CHRIS SHARMA",
    "ALEX HONNOLD",
    "JULIE",
    "ADAM ONDRA",
    "CHRIS SHARMA",
    "ALEX HONNOLD",
    "JULIE"];

var images = [
    "julie.jpg",
    "sharma.jpg",
    "honnold.jpg",
    "ondra.jpg",
    "julie.jpg",
    "sharma.jpg",
    "honnold.jpg",
    "ondra.jpg"];

var categories = [
    "Les amis du CAF",
    "People",
    "Sites et montagnes",
    "Noeuds",
    "Les amis du CAF",
    "People",
    "Sites et montagnes",
    "Noeuds"];

var ALL_QUESTIONS = [[]];

for (i = 0; i < questions.length; i++) {
    ALL_QUESTIONS[i] = [];
    ALL_QUESTIONS[i][0] = questions[i];
    ALL_QUESTIONS[i][1] = answers[i];
    ALL_QUESTIONS[i][2] = images[i];
    ALL_QUESTIONS[i][3] = categories[i];
};
var question = 0;
var answer = 1;
var image = 2;
var category = 3;

var picked = [];
var guess = "";
var nb_of_wins = 0;
var random_number = 0;
var the_question = "";
var the_answer = "";
var the_image= "";
var start_time;
var time = 0;
var chosen_category = "";
var win = false;

function test(){
    alert(ALL_QUESTIONS[0]);
};

function clear(){ //hide everything
    $('#start').hide();
    $('#game').hide();
};

function start(){
    clear();
    $('#start').show();
};

function display_question(){ //show question + image
    $('#question').text(the_question);
    document.getElementById("image").innerHTML = "<img src=img/" + the_image + ">";
};

function update_wins(){ //update number of wins
    $('#nb_of_wins').text(nb_of_wins + "/" + WINS_MAX);
};

function fade_image() { //image animation
    $("#image").fadeTo(0, 0); //hide image
    $("#image").fadeTo(FADE_TIME * 1000, 1); //slowly reveal image
  };

function pick_question(chosen_category){
    random_number = Math.floor( Math.random() * questions.length); //pick random number
    while (picked[random_number] || categories[random_number] != chosen_category){ ; //check if unpicked and right category
        random_number = Math.floor( Math.random() * questions.length) //reroll
    } //end while
    the_question = questions[random_number];
    the_answer = answers[random_number];
    the_image = images[random_number];
};

function reset_game() {
    clear();
    start_time = new Date;
    nb_of_wins = 0;
    picked = new Array(questions.length).fill(false); //reset "picked" array
    //show game elements
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
    $("#guess").text(guess); //clear guess
    document.getElementById("guess").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reset css
    $("#next").hide(); //hide "appuyez sur entrer"
    $("#infos").show(); //show "ecrivez qqchose"
    pick_question(chosen_category);
    display_question();
    fade_image();
};

function win_question(){ //trigered when you win a question
    $("#image").finish(); //stop animation
    document.getElementById("guess").style.backgroundColor = "chartreuse"; //set CSS
    picked[random_number] = true; //mark question as picked
    update_wins();
    $('#next').show(); //show "appuyez sur entrer"
};

function win_game(){ //trigered when you win last question
    $("#image").finish(); //stop animation
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
    time = Math.floor((new Date - start_time) / 1000)
    $('#timer').text(time);
}, 1000);
//##################################################################################################
//##################################################################################################
//##################################################################################################

$(".category").click(function(){
    chosen_category = $(this).text();
    reset_game();
  });

//listen to keyboard input
$(document).keydown(function(event){
    var letter_pressed = String.fromCharCode(event.which); //get letter
    var key_pressed = event.which; //get key

    if (!win){ //if player hasnt won yet
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

    }else{ //if won
        if(key_pressed == 13 && nb_of_wins < WINS_MAX){
            reset_question()}
        ;
    };
    
}); //end listen to keyboard


