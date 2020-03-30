var WINS_MAX = 3;
$('#WINS_MAX').text(WINS_MAX);
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



var ALL_QUESTIONS = [];

for (i = 0; i < questions.length; i++) { //fill ALL_QUESTIONS with everything
    ALL_QUESTIONS[i] = [];
    ALL_QUESTIONS[i][0] = questions[i];
    ALL_QUESTIONS[i][1] = answers[i];
    ALL_QUESTIONS[i][2] = images[i];
    ALL_QUESTIONS[i][3] = categories[i];
};

function unique(list) { //create unique function to sort categories
    var result = [];
    $.each(list, function(i, e) {
      if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
};

var high_scores =[];

for (i = 0; i < unique(categories).length; i++) { //fill high_scores with categories
    high_scores[i] = [];
    high_scores[i][0] = unique(categories)[i]; //category name
    high_scores[i][1] = ""; //team name
    high_scores[i][2] = 99999999999999; //team time (oui oui je sais...)
};

var input = "";
var nb_of_wins = 0;
var random_number = 0;
var the_question = "";
var the_answer = "";
var the_image= "";
var start_time;
var time = 0;
var recorded_time = 0;
var chosen_category = "";
var win = false;
var available_questions = [];
var team_name = "";


function test(){
    console.log(input);
    alert(ALL_QUESTIONS);
};

function write_scores(){
    for (i = 0; i < unique(categories).length; i++) { //fill high_scores with categories
        if (high_scores[i][0] == chosen_category && recorded_time < high_scores[i][2]){
            high_scores[i][1] = team_name; //team name
            high_scores[i][2] = recorded_time; //team time
        };
    }; //end for
};

function clear(){ //hide everything
    $('#start').hide();
    $('#game').hide();
};

function start(){
    clear();
    $(".category").addClass("disabled");
    team_name = "";
    input = "";
    win = false;
    $('#team').text("Ecrivez quelque chose!");
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

function displayScores(){ //show high scores
    clear();
    $('#score_page').show();
    input = "";
    $('#scores').text(""); //clear score page
    $('#scores').append("<ul>");
    for (i = 0; i < unique(categories).length; i++) { 
        $('#scores').append("<li><strong>" + high_scores[i][0] + ":</strong> " + high_scores[i][2] + " secondes par l'équipe " + high_scores[i][1]);
    }; //end for
    $('#scores').append("</ul>");
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
    the_question = available_questions[random_number][0];
    the_answer = available_questions[random_number][1];
    the_image = available_questions[random_number][2];
};

function reset_game(chosen_category) {
    clear();
    start_time = new Date;
    nb_of_wins = 0;
    available_questions = []; //empty available questions

    //pick all questions from chosen category
    for (i = 0; i < ALL_QUESTIONS.length; i++) {
        if (ALL_QUESTIONS[i][3] == chosen_category){
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
    input = ""; //reset input
    win = false;
    $("#guess").text(""); //clear guess
    $("#guess").removeClass("crazy");
    $("#guess").hide(); //hide guess
    document.getElementById("guess").style.backgroundColor = "rgba(0, 0, 0, 0.3)"; //reset css
    $("#next").hide(); //hide "appuyez sur entrer"
    $("#infos").show(); //show "ecrivez qqchose"
    pick_question(chosen_category);
    display_question();
};

function win_question(){ //trigered when you win a question
    $("#image").finish(); //stop animation
    $("#guess").addClass("crazy"); //set CSS
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
    $('#next').hide();
    //show bravo
    $('#bravo').show();
    $('#time').text(recorded_time); //write time
    write_scores();
};

//############################################################################################################################
//############################################################################################################################
//############################################################################################################################

//these functions are always running

$(".category").click(function(){ //start game if category is clicked
    chosen_category = $(this).text();
    team_name = input;
    if (team_name){
        reset_game(chosen_category);
    }else {
        $("#choose").css("text-decoration", "underline");
        $("#choose").css("font-weight", "bold");
        $("#choose").css("font-size", "1.1rem");
    };
});

setInterval( //update timer every second
    function() {
        time = Math.floor((new Date - start_time) / 1000)
        if (!isNaN(time)){
            $('#timer').text(time);
        };
    }, 1000 //refresh time
);

//listen to keyboard input
$(document).keydown(function(event){
    var letter_pressed = String.fromCharCode(event.which); //get letter
    var key_pressed = event.which; //get key

    if (!win){ //if player hasnt won yet
        if (key_pressed == 8 && input.length > 0){ //if backspace and input not empty
            input = input.slice(0, -1); //remove last letter
        } else if ((key_pressed > 64 && key_pressed < 91) || key_pressed == 32 || key_pressed == 189){  //if key is letter or space or dash
            input += letter_pressed; //add letter to input
            $('#infos').hide(); //hide "ecrivez qqchose"
        };
        $("#guess").text(input); //update guess
        $("#team").text(input); //update team name

        if($("#game").css('display') == 'block') { //if playing
            if (!input){
                $('#guess').hide();
            }else{
                $('#guess').show();
            };
            if (input == the_answer || input == WILDCARD){
                win = true;
            };
        }else if($("#start").css('display') == 'block') { //if menu
            if (input == "VOIR LES SCORES"){
                displayScores();
            }else if (input){
                $(".category").removeClass("disabled");
                $("#choose").css("text-decoration", "none");
                $("#choose").css("font-weight", "normal");
                $("#choose").css("font-size", "1rem");
            }else{
                $(".category").addClass("disabled");
            };
        }else{
            start();
        };

        if (win){
            nb_of_wins++;
            if (nb_of_wins < WINS_MAX){
                win_question();
            }else{ //game won
                win_question();
                recorded_time = time;

            };
        }; //if win (only first time)

    }else{ //if won
        if(key_pressed == 13 && nb_of_wins < WINS_MAX){
            reset_question()
        }else if (key_pressed == 13 && nb_of_wins == WINS_MAX){
            win_game();
        };
    };
    
}); //end listen to keyboard


