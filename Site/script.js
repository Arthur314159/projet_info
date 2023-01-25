var content;
function OuvrirFichier() {
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();


    reader.addEventListener("load", () => {
        content = reader.result;
        lire();
    }, false);

    if (file) {
        reader.readAsText(file);
    } 
}

function lire() {
    console.log(content [10]);
}
