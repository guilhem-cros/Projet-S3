var data = fs.readFileSync('stockage/listeEtudiant.json');  //lecture du fichier de stockage et enregistrement de son contenu (chaine de caractere) dans data
var listEtudiant = JSON.parse(data); //traduction en js de data
var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var buttonCreer = document.getElementById("creer");
var etudiant;



buttonCreer.addEventListener('click',function(event){
    if (nom.value.length >= 2 && prenom.value.length >= 2 && nom.value.length <=10 && prenom.value.length <=10){ //les noms et prenoms rentrés doivent faire entre 2 et 10 caractères
    etudiant = new Etudiant(nom.value,prenom.value);
    listEtudiant.push(etudiant);
    data = JSON.stringify(listEtudiant);
    fs.writeFile('stockage/listeEtudiant.json',data, function (err) { //ecriture de la nouvelle liste de joueur (avec le nouveau) dans le fichier de stockage s'il n'y a pas d'erreurs
        if (err) 
            return console.log(err);
        console.log('Ok');
    });
    loadPage('selection',true,'stats');
}
else {
    alert("Veuillez remplir les champs (entre 2 et 10 caractères pas champs)");
}
})

document.getElementById('backBtn').addEventListener("click",function(){ //si appuie sur retour
    loadPage('selection',true,'stats');
});
