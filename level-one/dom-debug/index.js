const colors = ["","red", "blue", "green"];
const list = document.getElementById('list');

document.getElementById("add").addEventListener("click", function(e) {
    const subItem = createSubItem(e)
    list.appendChild(subItem)
});

function createDropDown() {
    const dropDown = document.createElement('select');

for (let i = 0; i < colors.length; i++) {
    const option = document.createElement('option');
    option.setAttribute('value', colors[i]);
    option.text = colors[i];
    dropDown.appendChild(option)
}
    dropDown.addEventListener('change', function(e) {
        console.log(e.target)
       e.target.parentElement.style.backgroundColor = e.target.value;
    })
    return dropDown
};

function createSubItem(e) {
    const subItem = document.createElement("div")
    const subItemContent = document.getElementById("input")
    subItem.textContent = subItemContent.value;
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


