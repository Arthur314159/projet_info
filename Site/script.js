
function OuvrirFichier() {
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();


    reader.addEventListener("load", () => {
           
     }, false);

    if (file) {
        reader.readAsText(file);
     }
}

