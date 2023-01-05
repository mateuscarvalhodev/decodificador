
// document.getElementById("results").innerHTML = `<h1>eieiei</h1>`
document.getElementById('textArea').oninput = function() {
  const textForEncrypt = this.value;
  console.log(textForEncrypt);
}

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



  // console.log(encrypt('toda vez que você me disser oi, eu vou responder só oi'));
// console.log(decrypt('toberdai venterz qufatenter vobercê menter dimesssenterr oberimes, enterufat voberufat renterspoberndenterr só oberimes'));
