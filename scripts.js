function validateInput(inputText) {
    const specialChars = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    const uppercaseLetters = /[A-Z]/g;

    if (inputText.match(uppercaseLetters) || inputText.match(specialChars)) {
        alert("No se permiten caracteres especiales ni mayúsculas");
        return false;
    } else if (inputText.trim() === "") {
        alert("Ingrese un mensaje para encriptar");
        return false;
    } else {
        return true;
    }
}

document.getElementById("encrypt-btn").addEventListener("click", function() {
    const userInput = document.getElementById("text-input").value;
    if (validateInput(userInput)) {
        const encryptedText = encryptText(userInput);
        document.getElementById("encrypted-msg").value = encryptedText;
    }
});

const encryptionRules = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

function encryptText(inputText) {
    let resultText = inputText;
    for (const letter in encryptionRules) {
        resultText = resultText.replaceAll(letter, encryptionRules[letter]);
    }
    return resultText;
}

document.getElementById("decrypt-btn").addEventListener("click", function() {
    const userInput = document.getElementById("text-input").value;
    const decryptedText = decryptText(userInput);
    document.getElementById("encrypted-msg").value = decryptedText;
});

function decryptText(inputText) {
    let resultText = inputText;
    for (const letter in encryptionRules) {
        resultText = resultText.replaceAll(encryptionRules[letter], letter);
    }
    return resultText;
}

document.getElementById("copy-btn").addEventListener("click", function() {
    const encryptedText = document.getElementById("encrypted-msg").value;
    navigator.clipboard.writeText(encryptedText).then(() => {
        alert("Mensaje copiado al portapapeles");
    });
});
