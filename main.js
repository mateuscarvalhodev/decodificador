const button = document.getElementById('buttonEncrypt');
const textArea = document.getElementById('textArea');
const notFoundImg = document.getElementById('notFound');
const copyButton = document.getElementById('copy-button');
const resultsText = document.getElementById("resultsText");

// const buttonEncrypt = document.getElementById('buttonEncrypt');
// const buttonDecrypt = document.getElementById('buttonDecrypt');
// const results = document.getElementById("results")


function encrypt(textForEncrypt) {
  textForEncrypt = textForEncrypt.replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    
    return textForEncrypt;
  } 

  function decrypt(textForEncrypt) {
    textForEncrypt = textForEncrypt.replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

    return textForEncrypt;
  }
    // buttonEncrypt.disabled = true;
    // buttonDecrypt.disabled = true;
    
  textArea.oninput = function() {
    textForEncrypt = this.value;
    if(textForEncrypt.length > 0) {
      buttonEncrypt.disabled = false;
      buttonDecrypt.disabled = false;
    }
     else {
      buttonEncrypt.disabled = true;
      buttonDecrypt.disabled = true;
    }
}
copyButton.style.visibility = 'hidden';

function encryptButton() {
  const textEncrypted = encrypt(textForEncrypt);
  notFoundImg.style.visibility = 'hidden';
  results.innerHTML = '';
  resultsText.innerHTML = textEncrypted;
  copyButton.style.visibility = 'visible'
} 

function decryptButton() {
  const textDecrypted = decrypt(textForEncrypt);
  notFoundImg.style.visibility = 'hidden';
  results.innerHTML = '';
  resultsText.innerHTML = textDecrypted;
}

function copyToClipboard() {
  const textToCopy = resultsText.textContent;
  console.log(textToCopy);
  const textArea = document.createElement('textarea');
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}
copyButton.addEventListener("click", copyToClipboard);



// console.log(encrypt('toda vez que voc?? me disser oi, eu vou responder s?? oi'));
// console.log(decrypt('toberdai venterz qufatenter voberc?? menter dimesssenterr oberimes, enterufat voberufat renterspoberndenterr s?? oberimes'));
