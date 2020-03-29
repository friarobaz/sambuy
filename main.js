
var WINS_MAX = 1;
var FADE_TIME = 10;
var WILDCARD = "LOL";

var questions = [
    "Qui a fait 9c?",
    "Quel grimpeur est connu pour ses ascensions en solo intégral, notamment la voie Freerider en 2017, sur le mythique big wall El Cap, au Yosemite? (prénom et nom)",
    "Quel grimpeur américain dont il manque un doigt a donné le prénom Fitz à son fils en hommage au Fitzroy, célèbre sommet en Patagonie qu'il a grimpé en libre en 2006? Il est aussi connu pour avoir le reccord de vitesse du Nose, au yosemite, qu'il a grimpé en moins de 2h... (prénom et nom)",
    "qui est la plus belle"];

var nb_of_questions = questions.length

var answers = [
    "ADAM ONDRA",
    "CHRIS SHARMA",
    "ALEX HONNOLD",
    "JULIE"];

var images = [
    "ondra.jpg",
    "sharma.jpg",
    "honnold.jpg",
    "julie.jpg"];

var categories = [
    "Les amis du CAF",
    "People",
    "Sites et montagnes",
    "Noeuds"];

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

function get_team_name_and_category(){
    clear();
    $('#start').show();
    $(".category").click(function(){
        chosen_category = $(this).text();
        play();
      });
};

function clear(){ //hide everything
    $('#start').hide();
    $('#game').hide();
};

function display_question(){ //show question + image
    $('#question').text(the_question);
    document.getElementById("image").innerHTML = "<img src=img/" + the_image + ">";
};

function update_wins(){ //update number of wins
    $('#nb_of_wins').text(nb_of_wins + "/" + WINS_MAX);
};

function fade_image() { //image animation
    $( "#image" ).fadeTo(0, 0); //hide image
    $( "#image" ).fadeTo(FADE_TIME * 1000, 1); //slowly reveal image
  };

function pick_question(chosen_category){
    random_number = Math.floor( Math.random() * nb_of_questions); //pick random number
    while (picked[random_number] || categories[random_number] != chosen_category){ ; //check if unpicked and right category
        random_number = Math.floor( Math.random() * nb_of_questions) //reroll
    } //end while
    the_question = questions[random_number];
    the_answer = answers[random_number];
    the_image = images[random_number];
};

function reset_game() {
    start_time = new Date;
    nb_of_wins = 0;
    picked = new Array(nb_of_questions).fill(false); //reset "picked" array
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
    $("#image").stop(); //stop animation
    $( "#image" ).fadeTo(0, 1);//reveal image
    document.getElementById("guess").style.backgroundColor = "chartreuse"; //set CSS
    picked[random_number] = true; //mark question as picked
    update_wins();
    $('#next').show(); //show "appuyez sur entrer"
};

function win_game(){ //trigered when you win last question
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

clear();
get_team_name_and_category();

function play(){
    clear();
    $('#game').show();
    reset_game();
    //alert("fin du while");

};
    

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

    }else{ //if win
        if(key_pressed == 13 && nb_of_wins < WINS_MAX){
            reset_question()}
        ;
    };
    
}); //end listen to keyboard


