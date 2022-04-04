
// using fucntion declaration and map

console.log(getSum([21,2,30, 5, 23]));

function getSum (param){
    let summ = 0;
    param.map(function(elem){
        elem>20? summ+= elem:0;
    })
   
    return summ;
};



