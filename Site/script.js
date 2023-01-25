var content;
function OuvrirFichier() {
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();


    reader.addEventListener("load", () => {
        content = reader.result;
    }, false);

    if (file) {
        reader.readAsText(file);
    } 
}


//function Questions( clef, enonce) {
//    this.clef = clef;
//    this.enonce = enonce;
//}

//function Reponses(clef, enonce) {
//    this.clef = clef;
//    this.enonce = enonce;
//}
//let question = new Questions('questions', '', '');

//for (question of content) {
//    console.log(question);
//}

const json = '{"id": "1", "enonce": "<h1>Quel est votre nom ?</h1>", "reponse": ["",""]}';
const dico = JSON.parse(json);
console.log(dico.enonce);
