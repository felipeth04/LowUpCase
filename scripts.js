const upperButton= document.getElementById("upper-button");
const lowerButton= document.getElementById("lower-button");
const resultPart = document.getElementById("result-part"); 
const textAreaPart = document.getElementById("text-area-part");

const toLowerCaseText = () => {
    resultPart.innerHTML = textAreaPart.value.toLowerCase();
}

const ToUpperCaseText = () => {
    resultPart.innerHTML = textAreaPart.value.toUpperCase();
}

upperButton.addEventListener("click", ToUpperCaseText);
lowerButton.addEventListener("click", toLowerCaseText);
