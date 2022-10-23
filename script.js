
// Arrays of good words and bad words
const goodWords = ['happy', 'amazing', 
'enjoyed', 'fun', 'excited', 'nice', 'calm', 'comfortable', 
'glad', 'confident'];

const badWords = ['angry', 'sad', 'upset', 'embarrassed', 'nervous', 
'anxious', 'unhappy', 'miserable', 'worst', 
'bad'];


const textArea = document.querySelector('.textArea');
const mainContainer = document.querySelector('.container');

textArea.addEventListener('input', function () {
    // Exit if textarea contains only spaces or empty
    if (textArea.value.trim().length === 0) {
        return;
    }

    // Using regexp break value to array of words
    const words = textArea.value.match(/\b(\w+)\b/g)
    let goodCount = 0;
    let badCount = 0;

    // Cycle through words
    for (let i = 0; i < words.length; i++) {
        if (goodWords.includes(words[i])) {
             goodCount++;
        }

        if (badWords.includes(words[i])) {
             badCount++;
        }
    }

    // if (goodCount > badCount) {
    //     document.body.style.backgroundColor = goodColor;
    // } else if (goodCount < badCount) {
    //     document.body.style.backgroundColor = badColor;
    // } else if(goodCount === badCount) {
    //     document.body.style.backgroundColor = 'white';
    // }


    // Good Counts
    if (goodCount === 1){
        document.body.style.backgroundColor = `rgba(0, 255, 255, ${goodCount / 5})`
    }
    if (goodCount === 2 && badCount <=1){
        document.body.style.backgroundColor = `rgba(0, 255, 255, ${goodCount / 5})`
    }
    if (goodCount === 3 && badCount <=2){
        document.body.style.backgroundColor = `rgba(0, 255, 255, ${goodCount / 5})`
    }
    if (goodCount === 4 && badCount <=3){
        document.body.style.backgroundColor = `rgba(0, 255, 255, ${goodCount / 5})`
    }
    if (goodCount === 5 && badCount <=4){
        document.body.style.backgroundColor = `rgba(0, 255, 255, ${goodCount / 5})`
        const goodMessage = document.createElement("h5")
        goodMessage.innerHTML = `Well done! <br> You wrote ${goodCount} positive words today`
        document.getElementById("wellDoneContainer").append(goodMessage)
        goodMessage.classList.add('finalMessage');
        mainContainer.classList.add('hidden');
    }

    // Bad Counts

    if (badCount === 1 && goodCount <=0){
        document.body.style.backgroundColor = `rgba(255, 0, 0, ${badCount / 5})`
    }
    if (badCount === 2 && goodCount <=1){
        document.body.style.backgroundColor = `rgba(255, 0, 0, ${badCount / 5})`
    }
    if (badCount === 3 && goodCount <=2){
        document.body.style.backgroundColor = `rgba(255, 0, 0, ${badCount / 5})`
    }
    if (badCount === 4 && goodCount <=3){
        document.body.style.backgroundColor = `rgba(255, 0, 0, ${badCount / 5})`
    }
    if (badCount === 5 && goodCount <=4){
        document.body.style.backgroundColor = `rgba(255, 0, 0, ${badCount / 5})`
        const badMessage = document.createElement("h5")
        badMessage.innerHTML = `You wrote ${badCount} negative words today, I hope you feel better tomorrow`
        document.getElementById("wellDoneContainer").append(badMessage)
        badMessage.classList.add('finalMessage');
        mainContainer.classList.add('hidden');
    }

        // if goodcount and badcount are equal

        if (goodCount === badCount){
            document.body.style.backgroundColor = 'white';
        }

    // adding word count number

    if(badCount > 0) {
        const goodp = document.getElementById('badCountText')
        goodp.innerHTML = `word count ${badCount}`;
        document.append(goodp);
    }   
    if(goodCount > 0) {
        const badp = document.getElementById('goodCountText')
        badp.innerHTML = `word count ${goodCount}`;
        document.append(badp);
    }

})