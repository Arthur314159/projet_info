function newstory2(perso) {
    var perso = document.querySelector('input[name="perso"]:checked').value;
    var questions = ["question_1", "question_2", "question_3", "question_4"]; 
    var questions2 = ["question_5", "question_6", "question_7", "question_8"];
    var questionIds = {
        "sorciere": 0,
        "guerrier": 1,
        "dragon": 2,
        "elfe": 3
    };
    var id = questionIds[perso];
   
    questions.forEach((question, index) => {
        document.getElementById(question).style.display = (index === id) ? "block" : "none";
    });

    questions2.forEach((question2, index) => {
        document.getElementById(question2).style.display = (index === id) ? "block" : "none";
    });
}

