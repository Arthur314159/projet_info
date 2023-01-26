function newstory(perso) {
    var perso = document.querySelector('input[name="perso"]:checked').value;
    var questions = ["question_1", "question_2", "question_3", "question_4"];
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
}


// EXPLICATIONS

// Ce code définit une fonction JavaScript appelée "newstory" qui prend en paramètre une variable "perso". La fonction commence par utiliser la méthode querySelector pour sélectionner le bouton radio coché ayant pour nom "perso", puis récupère la valeur de cet élément et l'attribue à la variable "perso".

// Ensuite, il crée un tableau appelé "questions" qui contient les quatre ID de questions dans l'ordre où ils apparaissent dans le HTML. Puis, il crée un objet appelé "questionIds" qui relie les valeurs de personnages (par exemple "sorciere", "guerrier") aux IDs de question correspondants (par exemple 0, 1).

// Il crée ensuite une variable appelée "id" et lui attribue la valeur de l'ID de question qui correspond au personnage sélectionné (par exemple si le personnage sélectionné est "sorciere", la valeur de "id" sera 0).

// Enfin, il utilise la méthode forEach pour parcourir le tableau "questions". Pour chaque question, il utilise la méthode getElementById pour sélectionner l'élément correspondant et attribue le style d'affichage de la question à "block" si son index est égal à la variable "id", sinon il le met à "none". Cela permet d'afficher uniquement la question qui correspond au personnage sélectionné, tandis que les autres sont cachées.




