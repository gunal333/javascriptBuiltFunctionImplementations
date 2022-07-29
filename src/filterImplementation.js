filterImplementation=(arr,func)=>{
    let result = [];
    for(let i=0;i<arr.length;i++)
    {
        if(isSquareRoot(arr[i]))
        {
            result.push(arr[i]);
        }
    }
    return result;
}

isSquareRoot=(element)=>{
    if (element >= 0) {
        let sr = Math.sqrt(element);
        return ((sr * sr) == element);
    }
    return false;
}
let arrToBeFiltered = [13,1,121,23,81];
const filteredArr = filterImplementation(arrToBeFiltered,isSquareRoot);
console.log(filteredArr);