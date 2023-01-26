var dico;
var doc; 
var bloc; 
var sb; 
function OuvrirFichier() {
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();


    reader.addEventListener("load", () => {
        var content = reader.result;
        dico = JSON.parse(content); //ouvre le fichier JSON
        doc = dico.doc;
        bloc = dico.bloc;
        sb = dico.sb;
    }, false);

    if (file) {
        reader.readAsText(file);
    }
}



function display_doc(doc)
{
    //Pour chaque bloc dans doc
    call(display_bloc(idb));
}
function display_bloc(idb)
{
    var liste_sb = bloc[idb];
    //Pour chaque sous-bloc dans liste_sb
    call(display_sbloc(idsb));
}
function display_sbloc(idsb)
{
    var dic_sb_content = sb.idsb; // ou sb[idsb]
    switch (type_sb) {
        case texte:
            call(display_texte);
        case titre:
            call(display_titre);
        case QCM_1:
            call(display_QCM_1);
        case QCM_M:
            call(display_QCM_M);
    }


}
function display_texte(id2)
{

}
function display_titre(texte)
{

}
function display_QCM_1(question, reponse, FB, bonne_reponse)
{

}
function display_QCM_M(question, reponse, FB, bonne_reponse)
{

}

