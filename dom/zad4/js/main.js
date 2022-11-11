console.log("Test");

const submitForm = (event) => {

    event.preventDefault();

let firstname = document.querySelector('[name="fname"]');
let lastname = document.querySelector('[name="lname"]');

    console.log(`Imię: ${firstname.value}, Nazwisko: ${lastname.value}`);

}


let form = document.getElementById(`form`);

form.addEventListener(`submit`, submitForm);