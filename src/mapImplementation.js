mapImplementation=(arr,func)=>
{
    let out = [];
    for(let i=0;i<arr.length;i++)
    {
        out.push(func(arr[i]));
    }
    return out;
}
multiplyByTen=(param)=>{
    return 10*param;
}
square=(param)=>{
    return param*param;
}
let arr = [13,12,45,23,56];
const result1 = mapImplementation(arr,multiplyByTen);
console.log(result1);
const result2 = mapImplementation(arr,square);
console.log(result2);