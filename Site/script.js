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
        display_doc(doc);
    }, false);

    if (file) {
        reader.readAsText(file);
    }
}

function display_html_div(id_div, buffer_html) {
    document.getElementById(id_div).innerHTML = buffer_html;
}

function add_html_div(id_div, buffer_html) {
    document.getElementById(id_div).insertAdjacentHTML('afterend', buffer_html);
}

function display_doc(doc)
{
    for (var [pos,id_bloc] of Object.entries(doc)) {
        let buffer_html = "<div id='" + id_bloc +"'></div>";
        add_html_div("doc", buffer_html);
        display_bloc(id_bloc);
    }
}
function display_bloc(id_bloc)
{
    var buffer_html = "";
    var liste_sb = bloc[id_bloc];
    //console.log("liste_sb", liste_sb);
    for (var [pos, id_sbloc] of Object.entries(liste_sb)) {
        console.log("ici",pos, id_sbloc, buffer_html);
        buffer_html = display_sbloc(id_bloc, id_sbloc, buffer_html);
    }
    console.log(buffer_html);
    display_html_div(id_bloc, buffer_html);
}

function display_sbloc(id_bloc,id_sbloc,buffer_html)
{
   // console.log(id_bloc, id_sbloc, buffer_html);
    var type = sb[id_sbloc].type;
    var content = sb[id_sbloc].content; // ou sb[idsb]
    switch (type) {
        case "texte":
            buffer_html = display_texte(id_bloc, id_sbloc, content, buffer_html);
            break;
        case "titre":
            buffer_html = display_titre(id_bloc, id_sbloc, content, buffer_html);
            break;
        case "QCM_1":
            buffer_html = display_QCM_1(id_bloc, id_sbloc, content, buffer_html);
            break;
        case "QCM_M":
            buffer_html = display_QCM_M(id_bloc, id_sbloc, content, buffer_html);
            break;

    }
    return buffer_html;

}
function display_texte(id_bloc, id_sbloc, content, buffer_html)
{
    let texte = content.texte;
    buffer_html += "<p> " + texte + "</p>";
    return buffer_html;

}

function display_titre(id_bloc, id_sbloc, content, buffer_html)
{
    let titre = content.titre;
    buffer_html += "<h1> " + titre + "</h1>";
    return buffer_html;
}

function display_QCM_1(id_bloc, id_sbloc, content, buffer_html)
{
    let question = content.question;
    let rep = content.reponse;
    let FB = content.FB;
    buffer_html += "<h3> " + question + "</h3>";
    return buffer_html;
}
function display_QCM_M(id_bloc, id_sbloc, content, buffer_html)
{
    let question = content.question;
    let rep = content.reponse;
    let FB = content.FB;
    buffer_html += "<h3> " + question + "</h3>";
    return buffer_html;
}
