const arr = [2, 5, 8, 11, 14, 17];
let odd=0;
let even=0;
for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])
        even++;
    }else{
        console.log(arr[i])
        odd++;
    }
}
console.log(even);
console.log(odd)