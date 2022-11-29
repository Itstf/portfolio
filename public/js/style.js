var img;
var controle = 3;
window.onload = function(e){
    document.getElementById("img"+1)
  
};


function passaSlide(){
   
    if(controle < 1){
        controle = 3;
    }
    document.getElementById("img"+controle).style.left = "0vw";
    document.getElementById("img"+controle).style.zIndex = "998";
    aux = controle - 1;
    if(aux == 0){
        aux = 3
    }
    document.getElementById("img"+aux).style.left = "-100vw";
    document.getElementById("img"+aux).style.zIndex = "1";
    aux2 = aux - 1
    if(aux2 < 1){
        aux2 = 3;
    }
    console.log(aux2);
    document.getElementById("img"+aux2).style.left = "100vw";
    document.getElementById("img"+aux2).style.zIndex = "2";
    
    controle = controle - 1;
   

}

setInterval(passaSlide  , 3000);
