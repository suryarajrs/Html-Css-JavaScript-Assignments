document.getElementById("submitAnswers").addEventListener("click", function (e) {
    e.preventDefault()
    const userAnswers = [
        Number(document.getElementById("answerInput1").value),
        Number(document.getElementById("answerInput2").value),
        Number(document.getElementById("answerInput3").value),
    ];

    const correctAnswers = [9, 15, 6];


    const allCorrect = userAnswers.every((answer, index) => answer === correctAnswers[index]);

    const resultDiv = document.getElementById("feedback");
    if (allCorrect) {
        resultDiv.textContent = "All answers are correct!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "Some answers are incorrect. Try again!";
        resultDiv.style.color = "red";
    }
});
