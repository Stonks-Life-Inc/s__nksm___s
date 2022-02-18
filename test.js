async function getRandomWord() {

    const res = await fetch('https://random-words-api.vercel.app/word');

    const data = await res.json();
    console.log(res);
    return data[Object.keys(data)[0]].word.toLowerCase();

}
addWordToDOM();

// Add Word to DOM
async function addWordToDOM() {
    var word = document.getElementById("word");
    randomWord = await getRandomWord();
    word.innerHTML = randomWord;
}