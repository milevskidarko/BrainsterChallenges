let span = document.querySelector("#colorDisplay");
let spanMessage = document.querySelector("#message");
let btnNewColor = document.querySelector("#reset");
let btnEasy = document.querySelector("#easy");
let btnHard = document.querySelector("#hard");
let divSquare = document.querySelectorAll(".square");
let header = document.querySelector('h1');
let difficulty = 'hard';
let correctColor;
let colors;

function random_color(squares) {
  let arr = [];
  for (let i = 0; i < squares; i++) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    arr[i] = "rgb(" + x + ", " + y + ", " + z + ")";
  }
  return arr;
}

divSquare.forEach(function(el, i) {
  el.addEventListener("click", function() {
    if ( el.style.backgroundColor != colors[correctColor-1] ) {
      spanMessage.innerHTML = "Try again";
      el.style.display = 'none';
    } else {
      spanMessage.innerHTML = 'You won';
      btnNewColor.innerHTML = 'Play again ..'
      header.style.backgroundColor = el.style.backgroundColor;
      for (i = 0; i < divSquare.length; i++) {
        divSquare[i].style.backgroundColor = el.style.backgroundColor;
      }
    }
  });
});

btnNewColor.addEventListener('click', function() {
  if (btnNewColor.innerHTML = 'Play again ..') {
    btnNewColor.innerHTML = 'New colors'
    spanMessage.innerHTML = '';
    header.style.backgroundColor = '';
    newGame();
  }
});

btnNewColor.addEventListener("click", random_color);

btnEasy.addEventListener("click", function() {
  btnHard.classList.remove("selected");
  btnEasy.classList.add("selected");
  if (difficulty == "hard") {
    difficulty = "easy";
    newGame();
  }
  if (btnNewColor.innerHTML = 'Play again ..') {
    btnNewColor.innerHTML = 'New colors'
    spanMessage.innerHTML = '';
    header.style.backgroundColor = '';
    newGame();
  }
});

btnHard.addEventListener("click", function() {
  btnEasy.classList.remove("selected");
  btnHard.classList.add("selected");
  if (difficulty == "easy") {
    difficulty = "hard";
    newGame();
  }
  if (btnNewColor.innerHTML = 'Play again ..') {
    btnNewColor.innerHTML = 'New colors'
    spanMessage.innerHTML = '';
    header.style.backgroundColor = '';
    newGame();
  }
});

function newGame() {
  if (difficulty == "easy") {
    colors = random_color(2);
  } else {
    colors = random_color(6);
  }
  correctColor = 0;

  if (difficulty == "easy") {
    correctColor = Math.floor(Math.random() * 2 + 1);
  } else {
    correctColor = Math.floor(Math.random() * 6 + 1);
  }

  span.textContent = colors[correctColor - 1].toUpperCase();
  divSquare.forEach(function(e) {
    e.style.display = "none";
  });

  for (i = 0; i < colors.length; i++) {
    divSquare[i].style.backgroundColor = colors[i];
    divSquare[i].style.display = "block";
  }

}
newGame();




