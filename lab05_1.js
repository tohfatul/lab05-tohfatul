
// using fucntion declaration and map


// a function using function declaration named sum with one parameter of Array type, the
// returned result is the sum of all elements which are greater than 20.

console.log(getSum([21,2,30, 5, 23]));

function getSum (param){
    let summ = 0;
    param.map(function(elem){
        elem>20? summ+= elem:0;
    })
   
    return summ;
};



