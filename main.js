var WINS_MAX = 500;
$('#WINS_MAX').text(WINS_MAX);
var FADE_TIME = 20;
var WILDCARD = "LOL";

var questions = [
    "Quel grimpeur est connu pour ses ascensions en solo intégral, notamment la voie Freerider en 2017, sur le mythique big wall El Cap, au Yosemite? (prénom et nom)","Quel grimpeur américain dont il manque un doigt a donné le prénom Fitz à son fils en hommage au Fitzroy, célèbre sommet en Patagonie qu'il a grimpé en libre en 2006? Il est aussi connu pour avoir le reccord de vitesse du Nose, au yosemite, qu'il a grimpé en moins de 2h... (prénom et nom)","Quel grimeur tchèque a fait la voie la plus dure de l'histoire: Silence, 9c à Flatanger en Norvège? (prénom et nom)","Quelle grimpeuse et écrivaine faisant souvent des expéditions avec son mari Arnaud Petit est connue pour avoir écrit le livre A la verticale de soi? (prénom et nom)","Quel grimpeur français connu pour ses  ascensions en solo, a été la star des films Opéra vertical et La vie au bout des doigts? (prénom et nom)","Quel grimpeur espagnol est connu pour avoir grimpé la dura-dura, un 9b+ en Catalogne, ainsi que pour ses exploits en deep water solo à Majorque? (prénom et nom)","Quel grimpeur connu pour ses expéditions d'ouvertures de grandes voies partout dans le monde a grimpé la voie Black Bean à Céüse sur coinceurs? (prénom et nom)","Quelle jeune grimpeuse américano-japinaose a été la première grimpeuse à réussir un 8c bloc en 2016 (elle avait 14 ans)? (prénom et nom)","Quelle grimpeuse a été la première femme à réaliser la voie Biographie, à Céuse, reconnue comme étant le premier 9a+ féminin? (prénom et nom)","Quelle grimpeuse américaine est connue pour avoir été la permière personne à avoir grimpé El Cap en libre en 1994? (prénom et nom)","Quelle grimpeuse française ayant été parmi les meilleures mondiales dans les années 80, est aussi connue pour ses exploits en alpinisme et en solo intégral?","Quelle grimpeuse suisse ayant été 10 ans en couple avec Cédric Lachat et vivant à Grenoble est connue ses films Orbayu et Silbergeier? ","Quel grimpeur, guide de haute montagne et écrivain né en 1906 est connu pour ses romans Premier de cordée et La grande crevasse?","Quel médecin urgentiste à Chamonix spécialiste du secours en montagne et des pathologies du froid, mort en 2018 emporté par une avalanche, est connu pour son livre Docteur Vertical","Quel est ce noeud? (1 mot)","Quel est ce noeud? (1 mot)","Quel est ce noeud? (1 mot)","Quel est ce noeud? (2 mots)","Quel est ce noeud? (2 mots)","Quel est ce noeud? (1 mot)","Quel est ce noeud? (1 mot)","Quel est ce noeud? (1 mot)","Quel est ce noeud? (1 mot)","Quelle est cette montagne des Bauges?","Quelle est cette montagne des Bornes?","Quelle est cette montagne des Bornes?","Quelle est cette montagne des Aravis? (1 mot)","Quel est ce massif? (2 mots)","Quel est ce massif? (1 mot)","Quelle est cette montagne du Beaufortain? (2 mots)","Quelle est cette montagne de Patagonie? (1 mot)","Quelle est cette montagne Corse? (1 mot)","Quelle est cette montagne située à la frontière italo-suisse aussi appelée Matterhorn? (1 mot)","Quel est ce mont situé dans le Vercors sur la commune de Chichilianne? (1 mot)","Quel est ce sommet des alpes situé dans le massif du mont blanc duquel de détachent 6 pointes dont la Walker et la Whymper (où se trouve la voie Bonatti Vaucher)? (2 mots)","Quelle est cette aiguille du massif du mont blanc où se trouve l'arête des cosmiques? (1 mot)","Quel est le nom de l'insecte auquel est associé ce lieu dans les aravis, au sommet de la combe de Paccaly et de la combe du Grand Cret?","Quelle est cette chaine connue des Alpes? (1 mot)","Quel est ce massif italien des préalpes méridionales dont le point culminant est la Marmolada? (1 mot)","Quel est le nom de cette pointe, point culminant des Aravis? (1 mot)","Quel est ce pic des pyrénées connu pour la présence d'un observatoire astronomique à son sommet? (1 mot)","Quelle est cette montagne des Hautes-Alpes où se trouve la voie Biographie en 9a+? (1 mot)","Quelle est cette chaine montagneuse aux 3 pointes connue des grimpeurs et parapentises de Haute-Savoie? (1 mot)","Quel est ce site d'escalade mythique en France connu notamment pour les voies Pichenibule, La demande et Les enragés?","Quel est ce site d'escalade en France, lieu où a grandi l'auteur et alpiniste Gaston Rébuffat, où on peut grimper en t-shirt toute l'année si le Mistral le permet?","Quel est ce site d'escalade du Luberon, réputé pour son calcaire à trous?","Quel est ce site d'escalade en France, lieu de pelerinage de bloqueurs du monde entier?","Quel est ce site d'escalade de la Sierra de Gurara, en Espagne, qui regroupe grimpeurs et canyoneurs?","Dans quel état des Etats-Unis se trouve cette falaise?","Quel est le nom de ces gorges Aveyronaises,  où on peut grimper L'arête ouest sur la roche décollée, ou Les femmes et les grimpeurs d'abord, qui finit sous le vase de chine?","Quel est ce site proche de sisteron?","Quel est ce site situé au coeur des écrins où se rassemblent chaque année des centaines de grimpeurs ?","Quel est ce massif catalan?","Dans quel pays se situent les magnifiques Gorges de Todra?","Dans que pays se situent ces falaises?","Dans quel pays se situe ce toit mythique?","Qui au caf, en plus de grimper au club, est aussi moniteur de tennis?","Qui au caf s'occupe de l'école d'aventure?","Qui au caf a déjà oublié son enfant à la salle?","Qui au caf travaille aux caisses de la Sambuy? (1 prénom)","Quelle grimpeuse du caf est tombé dans une crevasse?","Qui au caf fait du saucisson?","Qui au caf encadre les cours du jeudi?","Qui au caf a ouvert la variante vert-marbré dans le toit?","Qui a ouvert le plus de voies dans la salle cette année?","Qui au caf ","Qui a la corde la plus vieille du club et a imprimé sa photo de licence sur une feuille quadrillée?","Qui au caf a les pantalons les plus bariolés?","Qui au caf a déjà atteri dans un arbre en parapente?","Qui au caf passe toutes ses journées de beau temps à voler à Planfait?","Qui au caf est la référence incontestée de la bière Belge?","Qui au caf a ouvert le plus de voies en extérieur?","Qui au caf ne dormira pas jusqu'à ce qu'elle réussisse la 7b beige?","Qui a ouvert des voies à la Sambuy?","Qui au caf ","Qui au caf etait père d'accueil de Roxanna, une étudiante d'Uruguay?","Qui au caf fait de la plongée en club?","Qui au club est Kiné à Giez et assure toujours avec des gants?","Qui au caf est responsable bénévole de l'école d'escalade?","Quelle famille du caf fait beaucoup de spéléo?","Qui au caf ","Qui au caf a ouvert la voie la plus dure, non libérée à ce jour?","Qui au caf est prof de sport, grimpe avec des chaussettes, et assure avec un 8?","Qui au caf était cycliste de haut niveau?","Qui au caf grimpe toujours avec ses chaussons ouverts, même dans du 6c?","Qui au caf donne les cours pratiques de nivologie?","Qui au caf est aussi accompagnateur de moyenne montagne?","Qui au caf vient d'arriver dans la région et dirige l'espace de co-working La Clé ?","Qui au caf passe plus de temps à brosser les prises qu'à grimper?","Qui au caf a une photo ronde sur sa licence?","Qui au caf anime des ateliers de playfight ?","Qui au caf se fait surnommer El Poussino ? ","Qui au caf tricote des éponges ?","Qui au caf met de l'exotisme dans les séances d'escalade ?"
    ];

var answers = [
    "ALEX HONNOLD","TOMMY CALDWELL","ADAM ONDRA","STEPHANIE BODET","PATRICK EDLINGER","CHRIS SHARMA","ARNAUD PETIT","ASHIMA SHIRAISHI","MARGO HAYES","LYNN HILL","CATHERINE DESTIVELLE","NINA CAPREZ","FRISON ROCHE","EMMANUEL CAUCHY","HUIT","CHAISE","CABESTAN","DEMI CABESTAN","PECHEUR DOUBLE","PAPILLON","MACHARD","FRANÇAIS","BICÉPHALE","SAMBUY","TOURNETTE","ARCLOSAN","CHARVIN","MONT BLANC","EVEREST","PIERRA MENTA","FITZROY","BAVELLA","CERVIN","AIGUILLE","GRANDES JORASSES","MIDI","MOUCHE","ARAVIS","DOLOMITES","PERCÉE","MIDI","CEUSE","LANFON","VERDON","CALANQUES","BUOUX","FONTAINEBLEAU","RODELLAR","UTAH","JONTE","ORPIERRE","AILEFROIDE","MONTSERRAT","MAROC","MADAGASCAR","AUSTRALIE","THÉO","BENOIT","GUILLAUME","PERNELLE","CHRISTINE","VINCENT","JELENA","CLAIRE","MATTHIEU","CLAUDIUS","BENOIT","ERIC","HENRI","DENIS","LUDIVINE","RAPH","JULIE","PATRICK","PIERRE-ALEXANDRE","JEREMY","JEREMY ET BENOIT","ANNE","ERWAN","REMI","LIONEL","SEBASTIEN","PIERRE","MARYLINE","YANNICK","ROLLAND","CHRISTOPHE","CLAIRE","JULES","OLIVIER","MARGOT","FRED","NICOLAS","PABLO"
    ];

var images = [
    "honnold.jpg","caldwell.jpg","ondra.jpg","bodet.jpg","edlinger.jpg","sharma.jpg","petit.jpg","ashima.jpg","hayes.jpg","hill.jpg","destivelle.jpg","caprez.jpg","","","","chaise.jpg","cabestan.jpg","","","","","","","sambuy.jpg","tournette.jpg","arclosan.jpg","charvin.jpg","blanc.jpg","everest.jpg","pierramenta.jpg","fitzroy.jpg","bavella.jpg","cervin.jpg","montaiguille.jpg","jorasses.jpg","aiguille.jpg","mouche.jpg","aravis.jpg","dolomites.jpg","percee.jpg","midi.jpg","ceuse.jpg","lanfon.jpg","verdon.jpg","calanques.jpg","buoux.jpg","fontainebleau.jpg","rodellar.jpg","utah.jpg","jonte.jpg","orpierre.jpg","utah.jpg","montserrat.jpg","maroc.jpg","madagascar.jpg","australie.jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""
    ];

var categories = [
    "People","People","People","People","People","People","People","People","People","People","People","People","People","People","Noeuds","Noeuds","Noeuds","Noeuds","Noeuds","Noeuds","Noeuds","Noeuds","Noeuds","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF"
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
    console.log();
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

    if (WINS_MAX > available_questions.length){
        WINS_MAX = available_questions.length;
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
    guess_ratio = 0;
    $("#guess").text(""); //clear guess
    $("#guess").removeClass("crazy");
    $("#guess").hide(); //hide guess
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
            }else { //if not the answer yet
                var guess_ratio = 0;
                var previous_letter = true;
                var win_ratio = 0;
                var lose_ratio = 0;
                for (i = 0; i < input.length; i++) {  //check all input letters
                    if (previous_letter && input.charAt(i) == the_answer.charAt(i)){ //if good letter and good previous letter
                        win_ratio += 100 / the_answer.length;
                    } //end if right letter
                    else if (input.charAt(i)){
                        win_ratio = 0;
                        lose_ratio += 10;
                        previous_letter = false;
                    }; //end if wrong letter
                }; //end for
                guess_ratio = win_ratio - lose_ratio;
                
                if (guess_ratio>0){
                    document.getElementById("guess").style.backgroundColor = "rgba(0, 150, 0, " + guess_ratio/100 + ")";
                } else {
                    document.getElementById("guess").style.backgroundColor = "rgba(255, 0, 0, " + Math.abs(guess_ratio)/100 + ")";
                };
                
                console.log(guess_ratio);
            }; // end if not the answer yet

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


