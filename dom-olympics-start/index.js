// header
const header = document.getElementById('header');
header.style.textAlign= 'center';


// h1
const h1 = document.createElement('h1');
document.getElementById('header').appendChild(h1);
h1.textContent = "JavaScript Made This!!";
h1.style.fontSize = '30px';

// subheader
const subH1 = document.createElement('subH1');
document.getElementById('header').appendChild(subH1)
subH1.innerHTML = "<span style='color: green;font-style: italic'> Aloe</span><span style='font-size: 20px'> wrote the JavaScript</span>";
subH1.style.fontSize = '20px';


const messages = document.getElementsByClassName('message')

messages[0].textContent = "I like you. What do you think of me?";
messages[1].textContent = "I don't really know, sir.";
messages[2].textContent = "Make an assessment.";
messages[3].textContent = "I think you're a nice, modern gentleman.";


const clear = document.getElementById('clear-button');
const messagesAll = document.querySelector('.messages');

clear.addEventListener('click', function() {
    messagesAll.textContent = "";
});

function selectOption() {
    const left1 = document.getElementById('note1')
    const left2 = document.getElementById('note3')
    const right1 = document.getElementById('note2')
    const right2 = document.getElementById('note4')
    const selected = document.getElementById('themeDropDown').value

    if (selected == "themeOne") {
        left1.style.backgroundColor = 'burlywood';
        right1.style.backgroundColor = 'lightblue';
        left2.style.backgroundColor = 'burlywood';
        right2.style.backgroundColor = 'lightblue';

    } else if (selected == "themeTwo") {
        left1.style.backgroundColor = 'firebrick';
        right1.style.backgroundColor = 'grey';
        left2.style.backgroundColor = 'firebrick';
        right2.style.backgroundColor = 'grey';

    } else if (selected == "themeThree") {
        left1.style.backgroundColor = 'pink';
        right1.style.backgroundColor = 'purple';
        left2.style.backgroundColor = 'pink';
        right2.style.backgroundColor = 'purple';

    } else if (selected == "themeFour") {
        left1.style.backgroundColor = 'forestgreen';
        right1.style.backgroundColor = 'gold';
        left2.style.backgroundColor = 'forestgreen';
        right2.style.backgroundColor = 'gold';
    } 

};

const form = document.messageForm;
const sendButton = document.getElementById('sendButton');
const newInput = document.getElementById('input');
const newNotes = document.getElementById('newNotes');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newMessage = document.createElement('div');
    newMessage.classList.add('newMessage')
    newMessage.innerHTML = newInput.value;
    newMessage.style.display = 'block';
    newMessage.style.backgroundColor = 'burlywood';
    newNotes.appendChild(newMessage)
});


