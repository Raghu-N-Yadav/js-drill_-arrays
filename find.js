const find = (elements, callback) => {
    let isTrue = undefined;
    for(let index =0; index < elements.length;index++){
        let isTrue = callback(elements[index])
        if(isTrue){
            return elements[index];
        }
    }
    return isTrue;
}

module.exports = find;