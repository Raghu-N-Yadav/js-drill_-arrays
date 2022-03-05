const each = (elements,callback) => {
    for(let index =0; index < elements.length;index++){
        callback(elements[index], index)
    }
}

module.exports = each;