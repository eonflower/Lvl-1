const form = document.getElementById('myForm')
const submit = document.getElementById('submit');

function formSubmit() {
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let age = form.age.value;
    let gender = form.gender.value;
    let destination = form.destination.value;
    const diet = [];
    for (let i = 0; i < form.dietary.length; i++) {
        if (form.dietary[i].checked === true) {
            diet.push(" " + form.dietary[i].value);
        }
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Destination: " + destination + "\nDietary Restrictions:" + diet);
};

submit.addEventListener("click", formSubmit);