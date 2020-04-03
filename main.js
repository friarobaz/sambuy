var WINS_MAX = 500;
var wins_max_adjusted = WINS_MAX;
$('#WINS_MAX').text(WINS_MAX);
var FADE_TIME = 5;
var WILDCARD = "JE SAIS PAS";

var questions = [

    "Quel grimpeur est connu pour ses ascensions en solo intégral, notamment la voie Freerider en 2017, sur le mythique big wall El Capitan, au Yosemite? (prénom et nom)","Quel grimpeur américain dont il manque un doigt a donné le prénom Fitz à son fils en hommage au Fitz Roy, célèbre sommet en Patagonie qu'il a grimpé en libre en 2006? Il est aussi connu pour avoir le reccord de vitesse du Nose, au Yosemite, qu'il a grimpé en moins de 2h... (prénom et nom)","Quel grimeur tchèque a fait la voie la plus dure de l'histoire: Silence, 9c à Flatanger en Norvège? (prénom et nom)","Quelle grimpeuse et écrivaine faisant souvent des expéditions avec son mari Arnaud Petit est connue pour avoir écrit le livre A la verticale de soi? (prénom et nom)","Quel grimpeur français connu pour ses  ascensions en solo, a été la star des films Opéra vertical et La vie au bout des doigts? (prénom et nom)","Quel grimpeur americain est connu pour avoir grimpé la dura-dura, un 9b+ en Catalogne, ainsi que pour ses exploits en deep water solo à Majorque? (prénom et nom)","Quel grimpeur connu pour ses expéditions d'ouvertures de grandes voies partout dans le monde a grimpé la voie Black Bean à Céüse sur coinceurs? (prénom et nom)","Quelle jeune grimpeuse américano-japonaise a été la première grimpeuse à réussir un 8c bloc en 2016 (elle avait 14 ans)? (prénom et nom)","Quelle grimpeuse a été la première femme à réaliser la voie Biographie, à Céüse, reconnue comme étant le premier 9a+ féminin? (prénom et nom)","Quelle grimpeuse américaine, légende vivante haute de 1m57, est la permière personne à avoir libéré la voie mythique du Nose sur le big wall d'El Capitan en 1994? (prénom et nom)","Quelle grimpeuse française ayant été parmi les meilleures mondiales dans les années 80, est aussi connue pour ses exploits en alpinisme et en solo intégral?","Quelle grimpeuse suisse ayant été 10 ans en couple avec Cédric Lachat et vivant à Grenoble est connue ses films Orbayu et Silbergeier? ","Quel grimpeur, guide de haute montagne et écrivain né en 1906 est connu pour ses romans Premier de cordée et La grande crevasse?","Quel médecin urgentiste à Chamonix spécialiste du secours en montagne et des pathologies du froid, mort en 2018 emporté par une avalanche, est connu pour son livre Docteur Vertical?","Quel grimpeur et alpiniste français, né en 1957, ami de Patrick Edlinger, est connu pour avoir libéré la voie Pichenibule dans le Verdon? En 1985 il signe le Manifeste des 19, qui s'oppose au développement de compétitions d'escalade.","Quel grimpeur suisse est un des ouvreurs les plus prolifiques avec plus de 1500 voies dans le monde et plus d'une centaine dans le massif du Mont-Blanc. Ses topos sont reconaissables à leur croquis caractéristiques. (Calcaire en folie, Les aiguilles rouges, L'envers des aiguilles, etc...)","Quel grimpeur allemand a inventé un outil d'entrainement (un pan qui porte son nom) qui lui a permis d'enchainer le premier 9a de l'histoire: Action directe?","Quel est ce noeud, pratique car très facile à défaire? (1 mot)","Quel est ce noeud, qui peut être utilisé pour se vacher en grande voie? (1 mot)","Quel est ce noeud, avec lequel on peut assurer? (2 mots)","Quel est ce noeud qui permet de réaliser un anneau de cordelette? (1 mot)","Quel est ce noeud, plus facile à défaire qu'une queue de vache? (1 mot)","Quel est ce noeud, indispensable quand on descend en rappel? (1 mot)","Quel est ce noeud, qui bloque plus qu'un machard? (1 mot)","Quel est ce noeud étrange à deux têtes? Il sert à remplacer son descendeur pour descendre en rappel. (1 mot)","Comment s'appelle ce mouvement, surtout utilisé en fissure et inventé par un alpiniste allemand qui lui a donné son nom?","Quelle est cette technique qui consiste à verouiller son pouce sur son index pour mieux tenir une petite prise? (C'est un verbe)","Comment s'appelle cette technique qui consite à baisser son genou pour rapprocher son bassin de la paroie?","Comment s'appelle cette technique qui consite à passer un pied derrière l'autre pour s'équilibrer?","Quelle est cette technique de secours qui permet de demultiplier sa force (ici par 3) pour aider un grimpeur bloqué (en grande voie ou crevasse par exemple)?","Comment appelle-t-on ce type de materiel qui permet de faire de l'escalade en terrain d'aventure? On peut voir sur cette photos des cablés et des friends.","Comment s'appelle ce type d'ancrage que les ouvreurs fixent au rocher avec de la colle? Aussi appelé scellement chimique, c'est le type d'ancrage le plus sûr à nos jour.","Coment s'appelle ce type d'ancrage? On le trouve en salle d'escalade mais aussi en exterieur, généralement utilisé avec des goujons à expansion?","Quel nom d'animal est utilisé pour paler d'une longe, ce bout de corde dynamique qui permet de se sécuriser au relais?","Comment s'appelle ce type d'escalade? Contrairement à l'escalade en libre, on utilise ici du matériel (crochets, étriers, etc...) pour progresser sur le rocher. Jusqu'aux années 1960, c'était la pratique normale de l'escalade. Elle est maintenant tombée en désuétude.","Quels sont ces ancrages, beaucoup utilisés en montagne avant l'arrivée de matériel plus récent? Ils sont plantés par le grimpeur à l'aide d'un marteau.","Coment s'appellent ses trous dans le rocher, veritables cadeaux de la nature, à travers lesquels on peut faire passer des sangles pour se proteger en escalade?","Comment appelle-t-on cette structure anatomique des doigts sujette aux blessures chez le grimpeur? Elle peut être soulagée par la pose d'un strap.","Ce grimpeur étourdit a oublié un équipement indispensable en grande voie, sauras-tu le retrouver?","Quelle est ce type de roche magmatique, très répandue dans la vallée de Chamonix ou au Yosemite? Ses fissures rectilignes sont souvent adaptées au terrain d'aventure.","Quel est cette roche sédmentaire souvent grise, orange ou bleutée? Sculptée par l'eau, elle prend des formes caractéristiques comme les cannelures, les gouttes d'eau ou les lapiaz. On la trouve dans beaucoup de falaises en France, dont le Verdon, le Sapey, la Sambuy...","Quels sont ces 2 pics du massif du Mont blanc qui ont vu des ascensions en solitaire notables par Walter Bonatti ou encore Catherine Destivelle? On peut y grimper la légendaire Directe Americaine et son dièdre parfait de 90 mètres. (1 mot)","Quelle est cette montagne des Bauges?","Quelle est cette montagne des Bornes?","Quelle est cette montagne des Aravis? (1 mot)","Quel est ce sommet des alpes? (2 mots)","Quel est cette grande montagne? (1 mot)","Quel est cet éperon monolithique du Beaufortain, connu pour sa course de ski alpinisme? (2 mots)","Quelle est cette montagne de Patagonie? (2 mots)","Quel est ce massif corse où l'on peut grimper des voies comme Le dos d'éléphant ou L'arête de Zonza? (1 mot)","Quelle est cette montagne située à la frontière italo-suisse aussi appelée Matterhorn? (1 mot)","Quelle est cette montagne caracteristique du Vercors? Sa première ascension en 1492 est la première officiellement reconnue de l'histoire de l'alpinisme (2 mots)","Quel est ce sommet des alpes situé dans le massif du mont blanc duquel se détachent 6 pointes dont la Walker et la Whymper (où se trouve la voie Bonatti Vaucher)? (2 mots)","Quelle est ce sommet du massif du mont blanc où se trouve l'arête des cosmiques? (3 mots)","Quel est le nom de l'insecte auquel est associé ce lieu dans les aravis, au sommet de la combe de Paccaly et de la combe du Grand Cret?","Quelle est cette chaine connue des Alpes? (1 mot)","Quel est ce massif italien des préalpes méridionales dont le point culminant est la Marmolada? (1 mot)","Quel est le nom de cette pointe, point culminant des Aravis? (2 mots)","Quel est ce pic des pyrénées connu pour la présence d'un observatoire astronomique à son sommet? (3 mots)","Quelle est cette falaise des Hautes-Alpes, connue entre autre pour la photogénique veine bleue de Biographie, 9a+? (1 mot)","Quelle est cette chaine montagneuse aux 3 pointes connue des grimpeurs et parapentises de Haute-Savoie? (3 mots)","Quel est ce site d'escalade mythique en France connu notamment pour les voies Pichenibule, La demande et Les enragés?","Quel est ce site d'escalade francais, lieu où a grandi l'auteur et alpiniste Gaston Rébuffat, où on peut grimper en t-shirt toute l'année si le Mistral le permet?","Quel est ce site historique du Luberon, réputé pour son calcaire à trous?","Quel est ce site d'escalade en France, lieu de pelerinage de bloqueurs du monde entier?","Quel est ce site d'escalade de la Sierra de Gurara, en Espagne, qui regroupe grimpeurs et canyoneurs?","Dans quel état des Etats-Unis se trouve cette falaise?","Quel est le nom de ces gorges Aveyronaises,  où on peut grimper L'arête ouest sur la roche décollée, ou Les femmes et les grimpeurs d'abord, qui finit sous le Vase de chine? (1 mot)","Quel est ce site provençal proche de sisteron, idéal pour l'initiation de part ses broches rapprochées et relais doublés?","Quel est ce site situé au coeur des écrins où se rassemblent chaque année des centaines de grimpeurs ? C'est aussi le titre d'une BD.","Quel est ce massif catalan, veritable forêt d'aiguilles de conglomérat proche de Barcelone?","Dans quel pays se situent les magnifiques Gorges de Todra?","Dans quel pays insulaire se situent ces falaises?","Dans quel pays se situe ce toit mythique?","Dans quel pays se situe le massif des Pics d'Europe?","Quel est ce site d'escalade situé sur une île grecque?","Dans quel pays se trouve ce big wall? Alex Honnold y a grimpé la voie El Sendero Luminoso (450m, 15 longeurs dans le 7) en solo intégral en 2014.","Dans quel pays se trouvent la falaise de Waterval Boven (photo) et le site de bloc Rocklands?","Quelle est cette vallée mythique?","Dans quel pays peut on grimper aux Lofoten ou dans la grotte de Flatanger?","Dans quel pays se trouvent les falaises de Wadi Rum?","Dans quel pays se trouvent les falaises de Tonsai et Railay?","Dans quel pays peut on grimper sur cette arche?",
    "Qui au CAF est aussi moniteur de tennis et lance sa marque de t-shirt M.LECHENVRE?","Qui au CAF s'occupe de l'école d'aventure?","Qui au CAF a déjà oublié son enfant à la salle? (Mais on l'aime quand même)","Qui au CAF travaille aux caisses de la Sambuy et lance sa marque de t-shirt M.LECHENVRE?","Quelle grimpeuse du CAF est dèjà tombée dans une crevasse?","Qui au caf fait du saucisson?","Qui au caf encadre les cours du jeudi?","Qui au CAF a ouvert la variante vert-marbré dans le toit?","Qui au CAF a ouvert le plus de voies dans la salle cette année?","Qui au caf ","Qui au CAF a la corde la plus vieille du club et a imprimé sa photo de licence sur une feuille quadrillée?","Qui au CAF a les pantalons les plus bariolés?","Qui au CAF a déjà atteri dans un arbre en parapente?","Qui au CAF passe toutes ses journées de beau temps à voler à Planfait?","Qui au CAF est la référence incontestée de la bière Belge?","Qui au caf a ouvert le plus de voies en extérieur?","Qui au CAF ne dormira pas jusqu'à ce qu'elle réussisse la 7b beige?","Qui au CAF a ouvert des voies d'escalade à la Sambuy?","Qui au caf ","Qui au CAF était père d'accueil de Roxanna, une étudiante d'Uruguay?","Qui au caf fait de la plongée en club?","Qui au CAF est Kiné à Giez et assure toujours avec des gants?","Qui au CAF est responsable bénévole de l'école d'escalade?","Quelle famille du caf fait beaucoup de spéléo?","Qui au caf ","Qui au CAF a ouvert la voie la plus dure de la salle, non libérée à ce jour?","Qui au CAF est prof de sport, grimpe avec des chaussettes, et assure avec un 8?","Quelle grimpeuse du CAF était cycliste de haut niveau?","Qui au CAF grimpe toujours avec ses chaussons ouverts, même dans du 6c?","Qui au CAF donne les cours pratiques de nivologie?","Qui au CAF est aussi accompagnateur de moyenne montagne?","Qui au CAF vient d'arriver dans la région et dirige l'espace de co-working La Clé ?","Qui au CAF passe plus de temps à brosser les prises qu'à grimper?","Qui au CAF a une photo découpée en ovale sur sa licence?","Qui au CAF anime des ateliers de playfight ?","Qui au CAF se fait surnommer El Poussino ? ","Qui au CAF tricote des éponges ?","Qui au CAF met de l'exotisme dans les séances d'escalade ?"

];

var answers = [

    "ALEX HONNOLD","TOMMY CALDWELL","ADAM ONDRA","STEPHANIE BODET","PATRICK EDLINGER","CHRIS SHARMA","ARNAUD PETIT","ASHIMA SHIRAISHI","MARGO HAYES","LYNN HILL","CATHERINE DESTIVELLE","NINA CAPREZ","FRISON ROCHE","EMMANUEL CAUCHY","PATRICK BERHAULT","MICHEL PIOLA","WOLFGANG GULLICH","CHAISE","CABESTAN","DEMI CABESTAN","PECHEUR","PAPILLON","MACHARD","FRANCAIS","BICEPHALE","DULFER","ARQUER","LOLOTTE","DRAPEAU","MOUFLAGE","COINCEUR","BROCHE","PLAQUETTE","VACHE","ARTIF","PITON","LUNULE","POULIE","CASQUE","GRANITE","CALCAIRE","DRUS","SAMBUY","TOURNETTE","CHARVIN","MONT BLANC","EVEREST","PIERRA MENTA","FITZ ROY","BAVELLA","CERVIN","MONT AIGUILLE","GRANDES JORASSES","AIGUILLE DU MIDI","MOUCHE","ARAVIS","DOLOMITES","POINTE PERCEE","PIC DU MIDI","CEUSE","DENTS DE LANFON","VERDON","CALANQUES","BUOUX","FONTAINEBLEAU","RODELLAR","UTAH","JONTE","ORPIERRE","AILEFROIDE","MONTSERRAT","MAROC","MADAGASCAR","AUSTRALIE","ESPAGNE","KALYMNOS","MEXIQUE","AFRIQUE DU SUD","YOSEMITE","NORVEGE","JORDANIE","THAILANDE","CHINE","THEO","BENOIT","GUILLAUME","PERNELLE","CHRISTINE","VINCENT","JELENA","CLAIRE","MATHIEU","CLAUDIUS","BENOIT","ERIC","HENRI","DENIS","LUDIVINE","RAPH","JULIE","PATRICK","PIERRE-ALEXANDRE","JEREMY","JEREMY ET BENOIT","ANNE","ERWAN","REMI","LIONEL","SEBASTIEN","PIERRE","MARYLINE","YANNICK","ROLLAND","CHRISTOPHE","CLAIRE","JULES","OLIVIER","MARGOT","FRED","NICOLAS","PABLO"
];

var images = [

    "honnold.jpg","caldwell.jpg","ondra.jpg","bodet.jpg","edlinger.jpg","sharma.jpg","petit.jpg","ashima.jpg","hayes.jpg","hill.jpg","destivelle.jpg","caprez.jpg","roche.jpg","cauchy.jpg","berhault.jpg","piola.jpg","gullich.jpg","chaise.jpg","cabestan.jpg","demi_cab.jpg","pecheur.jpg","papillon.jpg","machard.jpg","francais.jpg","bicephale.jpg","dulfer.jpg","arquer.jpg","lolotte.jpg","drapeau.jpg","mouflage.jpg","coinceur.jpg","broche.jpg","plaquette.jpg","vache.jpg","artif.jpg","piton.jpg","lunule.jpg","poulie.jpg","casque.gif","granite.jpg","calcaire.jpg","drus.jpg","sambuy.jpg","tournette.jpg","charvin.jpg","blanc.jpg","everest.jpg","pierramenta.jpg","fitzroy.jpg","bavella.jpg","cervin.jpg","montaiguille.jpg","jorasses.jpg","aiguille.jpg","mouche.jpg","aravis.jpg","dolomites.jpg","percee.jpg","midi.jpg","ceuse.jpg","lanfon.jpg","verdon.jpg","calanques.jpg","buoux.jpg","fontainebleau.jpg","rodellar.jpg","utah.jpg","jonte.jpg","orpierre.jpg","ailefroide.jpg","montserrat.jpg","maroc.jpg","madagascar.jpg","australie.jpg","europa.jpg","kalymnos.jpg","mexique.jpg","afrique.jpg","yosemite.jpg","norvege.jpg","jordanie.jpg","tonsai.jpg","chine.jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""
];

var categories = [

    "People","People","People","People","People","People","People","People","People","People","People","People","People","People","People","People","People","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Divers","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Sites et montagnes","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF","Les amis du CAF"
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
    high_scores[i][2] = undefined; //team time 
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
        if (high_scores[i][0] == chosen_category && (recorded_time < high_scores[i][2] || high_scores[i][2] == undefined)){
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

function seconds_to_HMS(s) {
    var h = Math.floor(s/3600); //Get whole hours
    s -= h*3600;
    var m = Math.floor(s/60); //Get remaining minutes
    s -= m*60;
    return (m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
}

function display_scores(){ //show high scores
    clear();
    $('#score_page').show();
    input = "";
    $('#scores').text(""); //clear score div
    $('#scores').append("<ul>");
    for (i = 0; i < unique(categories).length; i++) { 
        if (high_scores[i][2]){ // if highscore exists for this category
            $('#scores').append("<li><strong>" + high_scores[i][0] + ":</strong> " + seconds_to_HMS(high_scores[i][2]) + " par l'équipe " + high_scores[i][1]);
        }; //end if
    }; //end for
    $('#scores').append("</ul>");
};

function update_wins(){ //update number of wins
    $('#nb_of_wins').text(nb_of_wins + "/" + wins_max_adjusted);
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
        wins_max_adjusted = available_questions.length;
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
    document.getElementById("myAudio").play();
    $("#image").finish(); //stop animation
    $("#guess").addClass("crazy"); //set CSS
    available_questions.splice(random_number, 1); //remove question from list
    update_wins();
    $('#next').show(); //show "appuyez sur entrer"
};

function win_game(){ //trigered when you win last question
    document.getElementById("myAudio2").play();
    $("#image").finish(); //stop animation
    //hide question etc
    $('#question').hide(); 
    $('#image').hide();
    $('#top_left').hide();
    $('#guess').hide();
    $('#next').hide();
    //show bravo
    $('#bravo').show();
    $('#time').text(seconds_to_HMS(recorded_time)); //write time
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
        } else if ((key_pressed > 64 && key_pressed < 91) || key_pressed == 32){  //if key is letter or space
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
                display_scores();
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
            if (nb_of_wins < wins_max_adjusted){
                win_question();
            }else{ //game won
                win_question();
                recorded_time = time;

            };
        }; //if win (only first time)

    }else{ //if won
        if(key_pressed == 13 && nb_of_wins < wins_max_adjusted){
            reset_question()
        }else if (key_pressed == 13 && nb_of_wins == wins_max_adjusted){
            win_game();
        };
    };
    
}); //end listen to keyboard


