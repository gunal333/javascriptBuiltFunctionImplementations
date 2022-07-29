forEachImplementation=(arr,func)=>{
    for(let i=0;i<arr.length;i++)
    {
        func(arr[i]);
    }
}
printFormattedValues=(value)=>{
    console.log("Example text for making formatted strings "+value);
}
let names = ['Javascrit','es2015','is','fun'];
forEachImplementation(names,printFormattedValues); 