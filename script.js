const englishBox = document.getElementById("english");
const dflBox = document.getElementById("dfl");
const errorBox = document.getElementById("errorMessage")

const setError = (error) => {
    errorBox.innerHTML = error;

    setTimeout(() => errorBox.innerHTML = "", 10000)
}

const translateToEng = () => {
    let inputValue = dflBox.value;
    if (inputValue == ""){
        setError("No value was provided in the DFL Box")
        return
    }

    let words = inputValue.split(" ");
    console.log(words)
    let result = []

    for (let word of words){
        let idx = dfl.indexOf(word)
        if (idx == -1){
            setError(word + " is not a valid DFL command.")
            return
        }

        result.push(letters[idx]);
    }

    englishBox.value = result.join(" ")
}

const translateToDFL = () => {
    let inputValue = englishBox.value;
    if (inputValue == ""){
        setError("No value was provided in the DFL Box")
        return
    }

    let words = inputValue.split("");
    let result = []

    for (let letter of words){
        if (letter == " "){ continue; }
        let idx = letters.indexOf(letter.toLowerCase())

        if (idx == -1){
            setError(letter + " is not a valid english letter or number..")
            return
        }

        result.push(dfl[idx]);
    }

    dflBox.value = result.join(" ")
}