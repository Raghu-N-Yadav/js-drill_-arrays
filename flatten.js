const flatten = (elements) => {
    let flattenArray = [];
    for(let index =0; index < elements.length;index++){
        if(typeof elements[index] !== 'object'){
            flattenArray.push(elements[index])
        } else{
            let flattenItem = flatten(elements[index]);
            flattenArray = flattenArray.concat(flattenItem);
        }
    }
    return flattenArray;
}
//let input = [[[[1],[2]]],[[3],[[4],[5]],[6]]]
module.exports = flatten;
//console.log(flatten(input))