const map = (elements, callback) => {
    let newArray = [];
    for(let index =0; index < elements.length;index++){
        let newNumber = callback(elements[index])
        newArray.push(newNumber);
    }
    return newArray;
}

module.exports = map;