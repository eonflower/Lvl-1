const collect = document.getElementById('total');

function calc() {
    let bob = document.getElementById('bobTotal').value || 0;
    let goomba = document.getElementById('goombaTotal').value || 0;
    let cheep = document.getElementById('cheepTotal').value || 0;
    document.getElementById('calculated').value = (bob * 7) + (goomba * 5) + (cheep * 11) + " Coins"
};
