var WINS_MAX = 3;
var FADE_TIME = 3;
var WILDCARD = "LOL";

var questions = [
    "Qui a fait 9c?",
    "Quel grimpeur est connu pour ses ascensions en solo intégral, notamment la voie Freerider en 2017, sur le mythique big wall El Cap, au Yosemite? (prénom et nom)",
    "qui fait du deep water solo?",
    "qui est la plus belle",
    "Quel neoud est super bien pour s'encorder?",
    "Quel neoud sert a rien?",
    "Quel neoud est trop utile?",
    "C'est une BD",
    "C'est en Corse",
    "C'est en france et tres haut",
    "Qui au CAF 1",
    "Qui au CAF 2",
    "Qui au CAF 3",
    ];

var answers = [
    "ADAM ONDRA",
    "ALEX HONNOLD",
    "CHRIS SHARMA",
    "JULIE",
    "CHAISE",
    "CHAISE DOUBLE",
    "CABESTAN",
    "AILEFROIDE",
    "BAVELLA",
    "MONT BLANC",
    "CAF",
    "CAF",
    "CAF",
    ];

var images = [
    "ondra.jpg",
    "honnold.jpg",
    "sharma.jpg",
    "julie.jpg",
    "chaise.jpg",
    "chaise_double.jpg",
    "cabestan.jpg",
    "ailefroide.jpg",
    "bavella.jpg",
    "blanc.jpg",
    "",
    "",
    "",
    ];

var categories = [
    "People",
    "People",
    "People",
    "People",
    "Noeuds",
    "Noeuds",
    "Noeuds",
    "Sites et montagnes",
    "Sites et montagnes",
    "Sites et montagnes",
    "Les amis du CAF",
    "Les amis du CAF",
    "Les amis du CAF",
    ];

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
var available_questions = [];

function test(){
    alert("test");
};

function clear(){ //hide everything
    $('#start').hide();
    $('#game').hide();
};

function start(){
    clear();
    chosen_category = "";
    $('#start').show();
};

function display_question(){ //show question + image
    $('#question').text(the_question);
    if (the_image){
        document.getElementById("image").innerHTML = "<img src=img/" + the_image + ">";
        fade_image();
    }else {
        $('#image').hide();
    };
    
};

function update_wins(){ //update number of wins
    $('#nb_of_wins').text(nb_of_wins + "/" + WINS_MAX);
};

function fade_image() { //image animation
    $("#image").fadeTo(0, 0); //hide image
    $("#image").fadeTo(FADE_TIME * 1000, 1); //slowly reveal image
  };

function pick_question(chosen_category){
    random_number = Math.floor( Math.random() * available_questions.length); 
    the_question = available_questions[random_number][question];
    the_answer = available_questions[random_number][answer];
    the_image = available_questions[random_number][image];
};

function reset_game(chosen_category) {
    clear();
    start_time = new Date;
    nb_of_wins = 0;
    available_questions = []; //empty available questions

    //pick all questions from chosen category
    for (i = 0; i < ALL_QUESTIONS.length; i++) {
        if (ALL_QUESTIONS[i][category] == chosen_category){
            available_questions.push(ALL_QUESTIONS[i]);
        };
    };
    
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
};

function win_question(){ //trigered when you win a question
    $("#image").finish(); //stop animation
    document.getElementById("guess").style.backgroundColor = "chartreuse"; //set CSS
    available_questions.splice(random_number, 1); //remove question from list
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
    reset_game(chosen_category);
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


