const test = require('../map');

//callback function
const updateNumber = number => {
    let newNumber = 5;
    number += newNumber;
    return number;
}

const items = [1, 2, 3, 4, 5, 5];

//let mappedArray = test(items, updateNumber);

//console.log(mappedArray);

let expectedOutput = [6,7,8,9,10,10];
let mappedOutput = test(items, updateNumber)

if(JSON.stringify(mappedOutput) == JSON.stringify(expectedOutput)){
    console.log('Code is running')
}else {
    console.log('There is some issue')
}