let buttons = document.querySelectorAll(".on-b");
buttons.forEach((key) => {
  key.addEventListener("click", () => playBut(key));
});
function playBut(key) {
  let noteP = document.getElementById("type-text");
  noteP.innerText += key.innerText;
}
document.getElementById("space").addEventListener("click", function(pres) {
  let noteP = document.getElementById("type-text");
  pres.innerHTML = " &nbsp;";
  noteP.innerHTML += pres.innerHTML;
});

// Opcionalno da raboti i na tastatura

let noteP = document.querySelector("#type-text");
window.addEventListener("keyup", writeKeyboard);
function writeKeyboard(e){
    if(e.keyCode === 81){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 87){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 69){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 82){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 84){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 89){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 85){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 73){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 79){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 80){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 65){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 83){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 68){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 70){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 71){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 72){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 74){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 75){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 76){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 90){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 88){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 67){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 86){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 66){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 78){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 77){
      noteP.innerHTML += e.key;
    }else if(e.keyCode === 32){
      noteP.innerHTML += e.key;
    };
  };