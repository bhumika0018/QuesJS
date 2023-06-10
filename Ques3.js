// 3. Calculate the mean and median values of the number elements from the input array.
const input = [12, 46, 32, 64, 5, 7];
let n = input.length, sum = 0;
for (let i = 0; i < n; i++) {
    sum = sum + input[i];
}
let mean = sum / n;
console.log('Mean: ', mean);

if (n % 2 == 0) {
    console.log('Median: ', 0.5 * (input[(n / 2) - 1] + input[n / 2]));
}
else {
    console.log('Median: ', input[(n - 1) / 2]);
}
