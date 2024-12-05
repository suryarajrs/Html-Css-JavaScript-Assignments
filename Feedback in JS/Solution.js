
const ageInput = document.getElementById("ageInput");
const submitBtn = document.getElementById("submitBtn");
const feedback = document.getElementById("feedback");


submitBtn.addEventListener("click", function () {

    const age = Number(ageInput.value);


    if (age < 13) {
        feedback.innerText = "You're a kid!";
    } else if (age >= 13 && age <= 19) {
        feedback.innerText = "You're a teenager!";
    } else if (age >= 20 && age <= 59) {
        feedback.innerText = "You're an adult!";
    } else if (age >= 60) {
        feedback.innerText = "You're a senior citizen!";
    } else {
        feedback.innerText = "Please enter a valid age.";
    }
});
