// for(var i=0;i<7;i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//        var buttonInnerHtml =this.innerHTML;

//        switch (buttonInnerHtml){
//         case 'w': var crash= new Audio("sounds/crash.mp3");
//         crash.play();
//         break;
//         case 'a':  var tom3= new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;
//         case 's':  var tom4= new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;
//         case 'd':  var tom1= new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;
//         case 'j' :  var tom2= new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//         case 'k':  var kick= new Audio("sounds/kick-bass.mp3");
//         kick.play();
//         break;
//         case 'l':  var snare= new Audio("sounds/snare.mp3");
//         snare.play();
//         break;
//         default: console.log(buttonInnerHtml);}
//     });
// }//     var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

// alert("fhnwaiof");
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
makesound(this.innerText);
buttonAnimation(this.innerText);
});
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})
function makesound(key){
    switch(key){
        case "k": var tom1= new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "a": var tom2= new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case "s": var tom3= new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case "d": var tom4= new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case "l": var snare= new Audio("sounds/snare.mp3");
        snare.play();
        break;
        case "j": var kick_bass = new Audio("sounds/kick-bass.mp3");
        kick_bass.play();
        break;
        case "w": var crash= new Audio("sounds/crash.mp3");
        crash.play();
        break;
        // default: errMsg();
        // break;
            
    }
}
buttonAnimation=(currentkey)=>{
    var sel= document.querySelector('.'+ currentkey);
    sel.classList.add("pressed");
    setTimeout(function(){
        sel.classList.remove("pressed");
        },150)}
// }
// function errMsg(){
//     var createdElement= document.createElement('p');
//         createdElement.innerHTML="Unexpected Input";
//         createdElement.classList.add("footr");
//         var as =document.querySelector("footer");
//         as.appendChild(createdElement);
//         setTimeout(function (){
//             as.removeChild()
//         },150);
// }
