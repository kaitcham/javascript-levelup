function myFunction(a, b)
{
    var count =0;
for(let i =0; i<b.length ; i++){
    if(a == b[i]) count +=1
}
return count;
}
console.log(myFunction('z', 'how many times does the character occur in this sentence?'));