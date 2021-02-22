const alphaB = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "]

const workText = document.getElementById("work_text")
const keyOpt = document.getElementById("key_opt");
const showResult = document.getElementById("show_result");

const sipherIn = document.getElementById("sipher_in")
const sipherOut = document.getElementById("sipher_out")

function textChange() {
    let newText = ""

    keyNum = Number(keyOpt.value);
    let textA = workText.value.toLowerCase();

    for (let i = 0; i < textA.length; i++) {
        let indexLetter = alphaB.indexOf(textA[i]);
        if (sipherIn.checked) {
            if (indexLetter < (alphaB.length - keyNum)) {
                let newLatter = alphaB[indexLetter + keyNum]
                newText += newLatter;
            } else {
                let countCircle = alphaB.length - keyNum;
                let newCircleIndex = indexLetter - countCircle;
                newText += alphaB[newCircleIndex]
            }
            showResult.innerHTML = newText.toUpperCase();

            // *    Desipher zone

        } else {
            textA=textA.toLowerCase();

            if (indexLetter>= keyNum) {
                textA=textA.toLowerCase();
                newLatter = alphaB[indexLetter - keyNum]
                newText += newLatter;

            } else {
                let countCircle = alphaB.length - keyNum;
                let newNumIndex = countCircle+indexLetter;
                newText += alphaB[newNumIndex]
            }
        showResult.innerHTML = newText;
        }
    }
}