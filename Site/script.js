
function OuvrirFichier() {
    const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();


    reader.addEventListener("load", () => {
           
     }, false);

    if (file) {
        reader.readAsText(file);
     }
}

