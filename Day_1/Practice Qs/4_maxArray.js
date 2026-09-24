const arr = [10,20,50,40,30,60];
let max =null;
for(let i = 0; i < arr.length;i++){
    // console.log(arr[i]);
    if(arr[i]> max){
        max = arr[i];
    }
}
console.log(max)