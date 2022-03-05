const test = require('../each');

const printArray = (number, index) => {
    console.log(`Number is ${number} and it's index is ${index}`);
}

const items = [1, 2, 3, 4, 5, 5];

//test.each(items,printArray);

//testing forEach

const testForeach = (array) => {
    if(test(array,printArray) === undefined){
        console.log('Code is running');
    }else {
        console.log('There is some issue');
    }
}

testForeach(items);