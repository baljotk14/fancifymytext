function enlargeText() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyles() {
    const textInput = document.getElementById("textInput");
    const fancyRadio = document.getElementById("fancyRadio");
    const boringRadio = document.getElementById("boringRadio");

    if (fancyRadio.checked) {
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
        alert("FancyShmancy selected!");
    } else if (boringRadio.checked) {
        textInput.style.fontWeight = "normal";
        textInput.style.color = "initial"; // Reset color
        textInput.style.textDecoration = "none"; // Reset text decoration
        alert("BoringBetty selected!");
    }
}

function mooifyText() {
    const textInput = document.getElementById("textInput");
    let text = textInput.value;

    // Uppercase the text
    text = text.toUpperCase();

    // Add a suffix of "-Moo" to the last word of each sentence
    const sentences = text.split(".");
    const modifiedSentences = sentences.map(sentence => {
        const words = sentence.trim().split(" ");
        words[words.length - 1] += "-Moo"; // Add "-Moo" to the last word
        return words.join(" ");
    });
    text = modifiedSentences.join(".");
    
    textInput.value = text;
}
