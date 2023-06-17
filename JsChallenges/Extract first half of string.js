function myFunction(a){
    var half = Math.floor(a.length / 2);
    return a.slice(0, half);
 }
console.log(myFunction('abcdefgh'));