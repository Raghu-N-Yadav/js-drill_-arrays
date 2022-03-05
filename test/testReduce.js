const test = require('../reduce')

//callback function

const arraySum = (accumulator, currentValue) => {
    return accumulator + currentValue
}

const items = [1, 2, 3, 4, 5, 5];

//console.log(test.reduce(items,arraySum,10));

//testing
let expectedOutput = 30;
let reduceOutput = test(items,arraySum,10)

if(JSON.stringify(reduceOutput) == JSON.stringify(expectedOutput)){
    console.log('Code is running')
}else {
    console.log('There is some issue')
}