// 1. If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

const input = [1, -4, 12, 0, -3, 29, -150];
let sum = 0, count = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
        sum = sum + input[i];
    }
    else {
        count = count + 1;
    }

}
if (count == 0 || !input.length) {
    console.log(0);
}
else {
    console.log("The sum of all positive numbers are: ", sum);
}




