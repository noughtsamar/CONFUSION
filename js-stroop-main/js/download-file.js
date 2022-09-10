import { numberOfWords, matchedTimes, mismatchedTimes, incorrectCounter } from './stroop.js';
import { domElements } from './dom-elements.js';

let informationArray = [];
let matchedsum=0,mismatchedsum=0;
export function createFile () {
    let textFile = null;

    function makeTextFile (text) {
        const data = new Blob ( [text], { type: 'text/plain' } );
        
        if ( textFile !== null ) window.URL.revokeObjectURL(textFile);

        textFile = window.URL.createObjectURL(data);
        return textFile;
    }

    /*
    for ( let i = 0; i < matchedTimes.length; i++ ) {
        informationArray.push(`${i+1}.   ${matchedTimes[i]}   ${mismatchedTimes[i]}`);
    }
    */
    
    for (let i=0;i<matchedTimes.length;i++){
        matchedsum+=matchedTimes[i];
        mismatchedsum+=mismatchedTimes[i];
    } 
    matchedsum = matchedsum/numberOfWords;
    mismatchedsum = mismatchedsum/numberOfWords;
    informationArray.push(`${matchedsum}   ${mismatchedsum}`);

    /*
    domElements.buttons.download.href = makeTextFile(
        `Number of Words: ${numberOfWords*2}\nIncorrect Answers: ${incorrectCounter}\n Matched Mismatched\n${informationArray.join('\n')}`
    );
    */
    domElements.buttons.download.href = makeTextFile(
        `${incorrectCounter/(numberOfWords*2)}`)
    
}
