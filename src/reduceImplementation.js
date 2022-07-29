reduceImplementation =(arr,func) =>{
    let ans=0;
    for(let i=0;i<arr.length;i++){
        ans = func(arr[i],ans);
    }
    return ans;
}
addition = (accumulator,currentValue) => 
{
   return accumulator+currentValue;
}
const arrToBeReduced = [2,3,4,5,6];
console.log(reduceImplementation(arrToBeReduced,addition));