fetch('texte.json')
.then(response => response.json())
.then(data => {
    // utiliser les données ici
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});