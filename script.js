const goodWords = ['happy', 'amazing', 
'enjoyed', 'fun', 'excited', 'nice', 'calm', 'comfortable', 
'glad', 'confident'];

const badWords = ['angry', 'sad', 'upset', 'embarrassed', 'nervous', 
'anxious', 'unhappy', 'miserable', 'worst', 
'bad'];

const goodColor = 'rgba(0, 255, 255, 0.377)';
const badColor = 'rgb(255, 0, 0, 0.4)';

const textArea = document.querySelector('.textArea');

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

    if (goodCount > badCount) {
        document.body.style.backgroundColor = goodColor;
    } else if (goodCount < badCount) {
        document.body.style.backgroundColor = badColor;
    } else if(goodCount === badCount) {
        document.body.style.backgroundColor = 'white';
    }

    // adding word count number

    if(badCount > 0) {
        const p = document.getElementById('badCountText')
        p.innerHTML = `word count ${badCount}`;
        document.append(p);
    }   else if(goodCount >= 0) {
        const p = document.getElementById('goodCountText')
        p.innerHTML = `word count ${goodCount}`;
        document.append(p);
    }

})