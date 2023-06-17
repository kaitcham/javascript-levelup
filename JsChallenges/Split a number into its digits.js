function myFunction(a){
    const stringNum = String(a)
    return stringNum.split('').map(Number)
}
console.log(myFunction(193278));