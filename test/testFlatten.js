const test = require('../flatten');

let input = [[[[1],[2]]],[[3],[[4],[5]],[6]]]
let expectedOutput = [ 1, 2, 3, 4, 5, 6]

let flattenOutput = test(input);
//console.log(flattenOutput)

if(JSON.stringify(flattenOutput) == JSON.stringify(expectedOutput)){
    console.log('Code is running')
}else {
    console.log('There is some issue')
}