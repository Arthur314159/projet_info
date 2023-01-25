let questions =[
    {
        id:0,
        question: "Où est oumou?",
        reponse: "à droite",
        option : [
            "à gauche",
            "à droite",
            "devant",
            "derrière",
        ]
    },
    {
        id:1,
        question: "Où est alex?",
        reponse: "avec le max",
        option : [
            "à droite",
            "avec son chat",
            "avec le max",
            "elle chie",
        ]
    },
    {
        id:2,
        question: "Où est célio?",
        reponse: "à la salle",
        option : [
            "chez elle",
            "elle mange un burger",
            "elle chie",
            "à la salle",
        ]
    },
    {
        id:3,
        question: "Quelle est la couleur?",
        reponse: "blanc",
        option : [
            "blanc",
            "bleu",
            "brun",
            "bois",
        ]
    },
    {
        id:4,
        question: "ça va les chicos ?",
        reponse: "je sais pas",
        option : [
            "je sais pas",
            "tg",
            "oui",
            "non",
        ]
    },
];
let compteurScore=1;
/*let score= document.getElementById("score");*/
let compteurQuestion = 1;
num_question.textContent=compteurQuestion;


document.getElementById("nom_question").innerHTML = questions[0].question;
document.getElementById("rep1").innerHTML = questions[0].option[0];
document.getElementById("rep2").innerHTML = questions[0].option[1];
document.getElementById("rep3").innerHTML = questions[0].option[2];
document.getElementById("rep4").innerHTML = questions[0].option[3];
document.getElementsByClassName("score").innerHTML=score;

let i=0;
function haut_gauche(){   
    i++;
    compteurQuestion++;
    num_question.textContent=compteurQuestion;

    /*document.getElementById("n°question").innerHTML=num_question[i];*/
    score.textContent=compteurScore;
    compteurScore++;
    document.getElementById("nom_question").innerHTML=questions[i].question;
    document.getElementById("rep1").innerHTML=questions[i].option[0];
    document.getElementById("rep2").innerHTML=questions[i].option[1];
    document.getElementById("rep3").innerHTML=questions[i].option[2];
    document.getElementById("rep4").innerHTML=questions[i].option[3];
    return(i)
}

function haut_droit(){   
    i++;
    compteurQuestion++;
    num_question.textContent=compteurQuestion;

    /*document.getElementById("n°question").innerHTML=num_question[i];*/
    score.textContent=compteurScore;
    compteurScore++;
    document.getElementById("nom_question").innerHTML=questions[i].question;
    document.getElementById("rep1").innerHTML=questions[i].option[0];
    document.getElementById("rep2").innerHTML=questions[i].option[1];
    document.getElementById("rep3").innerHTML=questions[i].option[2];
    document.getElementById("rep4").innerHTML=questions[i].option[3];
    return(i)
}

function bas_gauche(){   
    i++;
    compteurQuestion++;
    num_question.textContent=compteurQuestion;

    /*document.getElementById("n°question").innerHTML=num_question[i];*/
    score.textContent=compteurScore;
    compteurScore++;
    document.getElementById("nom_question").innerHTML=questions[i].question;
    document.getElementById("rep1").innerHTML=questions[i].option[0];
    document.getElementById("rep2").innerHTML=questions[i].option[1];
    document.getElementById("rep3").innerHTML=questions[i].option[2];
    document.getElementById("rep4").innerHTML=questions[i].option[3];
    return(i)
}

function bas_droit(){   
    i++;
    compteurQuestion++;
    num_question.textContent=compteurQuestion;

    /*document.getElementById("n°question").innerHTML=num_question[i];*/
    score.textContent=compteurScore;
    compteurScore++;
    document.getElementById("nom_question").innerHTML=questions[i].question;
    document.getElementById("rep1").innerHTML=questions[i].option[0];
    document.getElementById("rep2").innerHTML=questions[i].option[1];
    document.getElementById("rep3").innerHTML=questions[i].option[2];
    document.getElementById("rep4").innerHTML=questions[i].option[3];
    return(i)
}
 
