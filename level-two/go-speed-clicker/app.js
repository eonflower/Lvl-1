const button = document.getElementById("button");

let clicks = 0;
let timer;

const countdown = () => {
  let timer = 10;
  setInterval(function () {
    timer--;
    if (timer >=0) {
      span = document.getElementById('time');
      span.innerHTML = timer + " seconds";
    }
    if (timer === 0) {
      clearInterval(timer);
      button.disabled = true;
      span.innerHTML = "10 seconds";
      return;
    }

  }, 1000)
}

const initialCounter= () => {
  let clickStr = localStorage.getItem('clicks')
    if (clickStr == undefined) {
        localStorage.setItem('clicks', 0)
        clicks = 0;
      } else {
        clicks = parseInt(clickStr)
      }
    document.getElementById("clicks").innerHTML = clicks + " clicks";
};

const counter = () => {
  if (clicks === 0) {
    countdown();
  }
  clicks += 1;
  localStorage.setItem('clicks', clicks);
  document.getElementById("clicks").innerHTML = clicks + " clicks";
}; 

const reset = () => {
  clicks = 0;
  localStorage.setItem('clicks', clicks);
  document.getElementById("clicks").innerHTML = clicks + " clicks";
  button.disabled = false;
}



button.onclick = counter;
initialCounter();


