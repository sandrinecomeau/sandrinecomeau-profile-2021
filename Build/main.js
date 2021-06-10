//page d'acceuil
let boutonAcceuil= document.getElementById("boutton_accueil")
let body= document.getElementById("body")
let accueil=document.getElementById("accueil")

boutonAcceuil.onclick = function(){AcceuilDisparait()};
    function AcceuilDisparait(){
        accueil.classList.add("accueil2");
        accueil.classList.remove("accueil1");
        body.classList.remove("scrollbar_cachee");
    }
