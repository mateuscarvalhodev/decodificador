const button = document.getElementById('buttonEncrypt');
const textArea = document.getElementById('textArea');

function encrypt(textForEncrypt) {
  textForEncrypt = textForEncrypt.replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    return textForEncrypt
  } 

  function decrypt(textForEncrypt) {
    textForEncrypt = textForEncrypt.replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

    return textForEncrypt;
  }
  textArea.oninput = function() {
    textForEncrypt = this.value;
    if(textForEncrypt.length > 0) {
      buttonEncrypt.disabled = false;
      buttonDecrypt.disabled = false;
    } else {
      buttonEncrypt.disabled = true;
      buttonDecrypt.disabled = true;
    }
    console.log(textForEncrypt);
  const textEncrypted = encrypt(textForEncrypt);
  console.log(textEncrypted)
  ;
  
}


function encryptButton() {
  textForEncrypt = textArea.value;
  const textEncrypted = encrypt(textForEncrypt);
  document.getElementById("results").innerHTML = '';
  document.getElementById("resultsText").innerHTML = textEncrypted;
  console.log('cliquei');
  
  
}
function decryptButton() {
  textForEncrypt = textArea.value;
  const textDecrypted = decrypt(textForEncrypt);
  document.getElementById('results').innerHTML = '';
  document.getElementById('resultsText').innerHTML = textDecrypted;
}




// console.log(encrypt('toda vez que você me disser oi, eu vou responder só oi'));
// console.log(decrypt('toberdai venterz qufatenter vobercê menter dimesssenterr oberimes, enterufat voberufat renterspoberndenterr só oberimes'));
