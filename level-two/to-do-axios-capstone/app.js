const form = document["taskForm"]
const submit = document.getElementById('submit')
const inputs = document.querySelectorAll('input[class="input"]').value

const todoTable = document.getElementById("todoTable")
const taskText = document.getElementById("taskText")
const taskTitle = document.getElementById("taskTitle")
const taskDescription = document.getElementById("taskDescription")
const taskPrice = document.getElementById("taskPrice")


// checkbox / buttons
const priorityCheck = document.getElementById("important")


// input values
const titleInput = form.title.value;
const descriptionInput = form.description.value;
const priceInput = form.price.value;
const imgInput = form.imgUrl.value;

// console.log(checkbox)

// new Sortable(todoTable, {
//     group: 'sorting', 
//     animation: 150
// });

// new Sortable(doingTable, {
//     group: 'sorting',
//     animation: 150
// });

// new Sortable(completedTasks, {
//     group: 'sorting',
//     animation: 150
// });

// Clear form
const clearInputs = () => {
    title.value = "";
    description.value = "";
    price.value = "";
    imgUrl.value = "";

    priorityCheck.checked = false;
    
}

// Get data from server
const getData = () => {
    axios.get("https://api.vschool.io/aloe/todo")
    .then(res => {
        let todos = res.data;
        for (let i = 0; i < todos.length; i++) {
            createTodo(todos[i])
        }
        console.log(todos)})
    .catch(err => console.log(err))
}

// Create a Todo
const createTodo = (todo) => {
    const taskTable = todoTasks.getElementsByTagName('tbody')[0];
    const newTask = taskTable.insertRow(taskTable.length)
    const checkbox = document.createElement("input")
    const editBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")

    newTask.id = "newTask"
    checkbox.type = "checkbox"
    checkbox.id = todo._id
    checkbox.className = "checkbox"

    const taskImg = newTask.insertCell(0);
        taskImg.innerHTML = `<img src="${todo.imgUrl}"/>`
        taskImg.id = "taskImg"

    const taskText = newTask.insertCell(1);
        taskText.id = "taskText"
    if(todo.description == null) {
        todo.description = ""
    }
    if(todo.price == null) {
        todo.price = ""
    }
    taskText.innerHTML = 
        `<input disabled="true" id="taskTitle" value="${todo.title}">
        <input disabled="true" id="taskDescription" value="${todo.description}">
        <input disabled="true" id="taskPrice" value="${todo.price}">`
        
    const buttons = newTask.insertCell(2);
    editBtn.innerHTML = 
        `<button id="edit" value="edit">
        <i class="fa-solid fa-pen"></i>`
    deleteBtn.innerHTML =
        `<button id="delete" value="delete">
        <i class="fa-solid fa-trash"></i></button>`

    buttons.className = "buttons"
    editBtn.id = todo._id;       
    deleteBtn.id = todo._id;

    editBtn.className = "buttons"       
    deleteBtn.className = "buttons"

    buttons.appendChild(editBtn)
    buttons.appendChild(deleteBtn)
    buttons.appendChild(checkbox)

    if (todo.completed === true) {
        taskText.style.textDecoration = "line-through wavy skyblue";
        checkbox.checked = true;
    } else {
        taskText.style.textDecoration = "none"
    }

    // Dynamically created checkbox - must live within todo element
    checkbox.addEventListener("click", (e) => {
        if (taskText.style.textDecoration === "line-through wavy skyblue"){
            taskText.style.textDecoration = "none";
            todo.completed = false;
        } else {
            taskText.style.textDecoration = "line-through wavy skyblue";
            todo.completed = true;
        }
        const updates = {
            completed: todo.completed
        }
        axios.put("https://api.vschool.io/aloe/todo/" + checkbox.id, updates)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    })

    deleteBtn.addEventListener("click", (e) => {
        deleteTodo(deleteBtn.id)
        e.path[4].remove();
            
    })

    editBtn.addEventListener("click", (e) => {
        const inputToggle = taskText.children
        if (editBtn.firstChild.value === "edit") {
            for (i = 0; i < inputToggle.length; i++) {
                inputToggle[i].disabled = false
                editBtn.firstChild.value = "save"
                editBtn.firstChild.innerHTML =
                `<button id="edit" value="save">
                <i class="fa-solid fa-floppy-disk"></i>`
            }
        } else {
            for (i = 0; i < inputToggle.length; i++) {
                editBtn.firstChild.value = "edit"
                editBtn.firstChild.innerHTML = 
                `<button id="edit" value="edit">
                <i class="fa-solid fa-pen"></i>`
                inputToggle[i].disabled = true
            }
            
        } 
        const edits = {
            title: taskText.children[0].value,
            description: taskText.children[1].value,
            price: taskText.children[2].value
        }
        axios.put("https://api.vschool.io/aloe/todo/" + editBtn.id, edits)
            .then(res => console.log(res.data))
            .catch(err => console.log(err)) 
    })

        
}

getData()



const deleteTodo = (check) => {
    // console.log(check)
    axios.delete("https://api.vschool.io/aloe/todo/" + check)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

// Form submit
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const userInputs = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value,
        completed: false
    }
    
    axios.post("https://api.vschool.io/aloe/todo", userInputs)
        .then(res => createTodo(res.data))
        .catch(err => console.log(err))

    clearInputs()
    
})

