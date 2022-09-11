
let haveIt = [];
function generateUniqueRandom(maxNr) {

    let random = (Math.random() * maxNr).toFixed();


    random = Number(random);

    if(!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if(haveIt.length < maxNr) {
 
         return  generateUniqueRandom(maxNr);
        } else {

          return false;
        }
    }
}
const arr = [];
const arr2 = [];
for (let i = 0; i < 6; i++) {
    var k = generateUniqueRandom(9);
    arr[i] = k;
    document.getElementsByClassName("btn")[i].innerHTML = k;
}
arr.sort();

function getnum() {
    var input = document.getElementsByName('array[]');

    for (var i = 0; i < input.length; i++) {
        var a = input[i].value;
        arr2[i] = a;
    }

    let q=0;
    for (let p = 0; p < 6; p++) {
        if (arr[p]!=arr2[p]) {
            q++;
            break;
        }
        
    }
        
    if (q==0) {
        console.log("ok")
    }else{
        console.log("not ok")
    }
}
