
// using function expression and filter


// a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.

let getNewArray = function(param){
    
    let newArr = param.filter(function(elem){
        return elem.length>=5 && elem.includes('a');
    });

    return newArr;
}

console.log(getNewArray(['DhakaBD', 'abc', 'Srilanka', 'uvwxy']));