const box = document.getElementById('square');
const title = document.getElementById('h1');

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 

document.addEventListener("mousedown", function(){
  document.body.style.backgroundColor = randomColor();
});

document.getElementById('title').addEventListener("mouseover", (e) => {
  e.target.style.color = randomColor();
});



box.addEventListener('mouseover', () => {
    box.style.backgroundColor = "dodgerblue";
});

box.addEventListener('mousedown', () => {
    box.style.backgroundColor = "firebrick";
});

box.addEventListener('mouseup', () => {
    box.style.backgroundColor = "gold";
});

box.addEventListener('dblclick', () => {
    box.style.backgroundColor = "olivedrab";
});

document.addEventListener('wheel', () => {
    box.style.backgroundColor = "orange";
});

window.addEventListener('keydown', changeBg);

function changeBg(e) {
    if (e.keyCode === 66) {
        box.style.backgroundColor = 'dodgerblue';
      }
      else if (e.keyCode === 82) {
        box.style.backgroundColor ='firebrick';
      }
      else if (e.keyCode === 89) {
        box.style.backgroundColor = 'gold';
        }
      else if (e.keyCode === 71) {
        box.style.backgroundColor = 'olivedrab';
      }
      else if (e.keyCode === 79) {
        box.style.backgroundColor = 'orange';
        }

};



