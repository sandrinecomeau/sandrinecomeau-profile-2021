//page d'acceuil
let buttonAcceuil= document.getElementById("boutton_acceuil")
let body= document.getElementById("body")
let acceuil=document.getElementById("acceuil")

    buttonAcceuil.onclick = function(){AcceuilDisparait()};
    function AcceuilDisparait(){
        acceuil.classList.add("acceuil2");
        acceuil.classList.remove("acceuil1");
        body.classList.remove("scrollbar_cachee");
    }
