function arrayTotal(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum = sum + element;
    }
    return sum;

}
let total = arrayTotal([1,2,3,4,5]);
console.log('total is ', total);