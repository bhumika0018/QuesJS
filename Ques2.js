// 2. Square the value of every element in the array. Presume that you will only get numbers in the input array.

const input = [1, 2, 3, 4, 5];

for (let i = 0; i < input.length; i++) {
    input[i] = input[i] * input[i];
}
for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
}
