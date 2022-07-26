const form = document.info;
const submit = document.getElementById('submit');


function formAlert() {
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let age = form.age.value;
    let gender = form.gender.value;
    let location = form.travelLocation.value;
    const diet = [];
    for (let i = 0; i < form.check.length; i++) {
        if (form.check[i].checked === true) {
            diet.push(form.check[i].value);
        }
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);