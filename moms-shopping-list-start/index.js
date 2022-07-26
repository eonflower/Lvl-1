// window.localStorage.setItem('newInput', 'value');

const form = document.myForm;
    const input = document.getElementById('input');
    const items = document.getElementById('items');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newItem = document.createElement('div');
        newItem.classList.add('newItem');
        const item = input.value;

        const newContent = document.createElement('div');
        newContent.classList.add('newContent');

        newItem.appendChild(newContent);

        const newInput = document.createElement('Input');
        newInput.classList.add('newInput');
        newInput.type = "text";
        newInput.value = item;
        newInput.setAttribute("readonly", "readonly");

        newContent.appendChild(newInput);
        
        const buttonDiv = document.createElement('div')
        buttonDiv.classList.add('buttons')

        newItem.appendChild(buttonDiv);

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerHTML = "Edit";

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = "Delete";
       
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton);

        items.appendChild(newItem);

        input.value = "";

        editButton.addEventListener('click', () => {
            if (editButton.innerText.toLowerCase() == 'edit') {
                newInput.removeAttribute('readonly');
                newInput.focus();
                editButton.innerText = 'Save';
            } else {
                newInput.setAttribute('readonly', 'readonly');
                editButton.innerText = 'Edit';
            }
        });
        
        deleteButton.addEventListener('click', () => {
            items.removeChild(newItem);
        });
    
    });



