const filter = (elements, callback) => {
    let filteredArray = [];
    for(let index =0; index < elements.length;index++){
        let isTrue = callback(elements[index]);
        if(isTrue){
            filteredArray.push(elements[index]);
        }
    }
    return filteredArray;
}

module.exports = filter;