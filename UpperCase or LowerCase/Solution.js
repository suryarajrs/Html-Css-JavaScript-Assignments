
let inputText = document.getElementById('inputText');
let upperCaseBtn = document.getElementById('upperCaseBtn');
let lowerCaseBtn = document.getElementById('lowerCaseBtn');
let result = document.getElementById('result');

function transformText(callback) {
    const text = inputText.value;
    const transformedText = callback(text);
    result.textContent = transformedText;
}

upperCaseBtn.addEventListener('click', function () {
    transformText(function (text) {
        return text.toUpperCase()
    });
});

lowerCaseBtn.addEventListener('click', function () {
    transformText(function (text) {
         return text.toLowerCase()
       
    });
});
