const test = require('../find');

const checkForValue = (number) => {
    let tempVariable = 4;
    if(number > tempVariable){
        return true
    }
    return undefined;
}

const items = [1, 2, 3, 4, 5, 5];

//console.log(test.find(items,checkForValue));

let expectedOutput = 5;
let findOutput = test(items,checkForValue)

if(JSON.stringify(findOutput) == JSON.stringify(expectedOutput)){
    console.log('Code is running')
}else {
    console.log('There is some issue')
}