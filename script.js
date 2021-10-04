function resultat(){
    let poids = document.getElementById("poids").value;
    let taille = document.getElementById("taille").value;
    document.getElementById("resultat").innerHTML = poids/(taille*taille);
    
    couleur();
}

function couleur(){
    let poids = document.getElementById("poids").value;
    let taille = document.getElementById("taille").value;
    let calcul = poids/(taille*taille);
    let color = document.getElementById("resultat");

    if (calcul < 18.5) {
        color.style.backgroundColor = "yellow";
    }
    else if (calcul > 18.5 && calcul <25 ){
        color.style.backgroundColor = "green"
    }
    else if(calcul > 25 && calcul < 30) {
        color.style.backgroundColor = "orange"
    }
    else if(calcul > 30) {
        color.style.backgroundColor = "red"
    }

}