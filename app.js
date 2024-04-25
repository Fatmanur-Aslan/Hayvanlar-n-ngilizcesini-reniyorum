
var rastgeleHayvan=document.querySelectorAll(".animal").length;
for(var i=0;i<rastgeleHayvan;i++){


document.querySelectorAll(".animal")[i].addEventListener("click",function(){
var buttonInnerHTML=this.innerHTML;

switch(buttonInnerHTML){

case "Sincap" :
this.innerHTML="Squirrel";
break;

case "Baykuş":
this.innerHTML="Owl";
break;

case "Tilki":
this.innerHTML="Fox";
break;

case "Kedi":
this.innerHTML="Cat";
break;

case "Maymun":
this.innerHTML="Monkey";
break;

case "Aslan":
this.innerHTML="Lion";
break;

case "Fil":
this.innerHTML="Elephant";
break;

case "Rakun":
this.innerHTML="Raccoon";
break;

case "Köpek":
this.innerHTML="Dog";
break;

case "Kuş":
this.innerHTML="Bird";   
break; 

default:
console.log(buttonInnerHTML);
    break;

}

});

}


document.addEventListener("keypress",rastgeleSes);

 function rastgeleSes(event){
    switch(event.key){

     case "s":
    var sincap=new Audio("sounds/sincap.mp3");
    sincap.play();
    break;

    case "o":
    var baykuş=new Audio("sounds/baykuş.mp3");
    baykuş.play();
    break;

    case "f":
    var tilki=new Audio("sounds/tilki.mp4");
    tilki.play();
    break;

    case "c":
    var kedi=new Audio("sounds/kedi.mp3");
    kedi.play();
    break;

    case "m":
    var maymun=new Audio("sounds/maymun.mp3");
    maymun.play();
    break;

    case "l":
    var aslan=new Audio("sounds/aslan.mp4");
    aslan.play();
    break;

    case "e":
    var fil=new Audio("sounds/fil.mp4");
    fil.play();
    break;

    case "r":
     var rakun=new Audio ("sounds/rakun.mp4");
     rakun.play();  
     break;

    case "d":
    var köpek=new Audio("sounds/köpek.mp4");
    köpek.play();
    break;
    
    case "b":
    var kuş=new Audio("sounds/kuş.mp3");
    kuş.play();
    break;    

    default:
     alert("Doğru harfi tuşlayınız");
     break;   
    }
 }

