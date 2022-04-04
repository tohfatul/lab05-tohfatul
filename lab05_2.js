
// using function expression and filter

let getNewArray = function(param){
    
    let newArr = param.filter(function(elem){
        return elem.length>=5;
    });

    return newArr;
}

console.log(getNewArray(['DhakaBD', 'abc', 'Srilanka', 'uvwxy']));