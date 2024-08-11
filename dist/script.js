const quoteTextElement = document.querySelector("#quoteText span");
const quoteAuthorElement = document.querySelector(".italic");
const quoteBtn = document.querySelector("#quotebutton");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");

function randomQuote() {
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(result => {
            quoteTextElement.textContent = result.content;
            quoteAuthorElement.textContent = `~ ${result.author}`;
        })
        .catch(error => console.log("Error fetching quote:", error));
}

quoteBtn.addEventListener("click", randomQuote);

function playSound() {
    const utterance = new SpeechSynthesisUtterance(quoteTextElement.textContent);
    speechSynthesis.speak(utterance);
}

soundBtn.addEventListener("click", playSound);

function copyToClipboard() {
    const textToCopy = `${quoteTextElement.textContent} ${quoteAuthorElement.textContent}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
    }).catch(error => console.log("Error copying text:", error));
}

copyBtn.addEventListener("click", copyToClipboard);

// Fetch a quote on initial load
randomQuote();
