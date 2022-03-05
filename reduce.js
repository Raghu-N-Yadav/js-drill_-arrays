const reduce = (elements, callback, startingValue) => {
    let indexVal = 0;
    if(startingValue == undefined){
        startingValue = elements[0];
        indexVal = 1;
    }
    for(let index =indexVal; index < elements.length; index++){
        let reducer = callback(startingValue, elements[index]);
        startingValue = reducer; 
    }
    return startingValue;
}

module.exports = reduce;