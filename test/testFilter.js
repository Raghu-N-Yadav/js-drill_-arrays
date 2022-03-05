const test = require('../filter')

//callback function
const isEven = number => {
    if(number%2 == 0){
        return true;
    }
    return false;
}

const items = [1, 2, 3, 4, 5, 5];

//console.log(test.filter(items,isEven));
let expectedOutput = [2,4];
let filterOutput = test(items,isEven)

if(JSON.stringify(filterOutput) == JSON.stringify(expectedOutput)){
    console.log('Code is running')
}else {
    console.log('There is some issue')
}