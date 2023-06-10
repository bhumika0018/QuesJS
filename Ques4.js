// 4. Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

const input = [
    {
        name: "John",
        age: 13,
    },
    {
        name: "Mark",
        age: 56,
    },
    {
        name: "Rachel",
        age: 45,
    },
    {
        name: "Nate",
        age: 67,
    },
    {
        name: "Jennifer",
        age: 65,
    },
];

let old = input[input.length - 1].age, young = input[0].age;
for (i in input) {
    if (young > input[i].age) {
        young = input[i + 1].age;
    }
}
console.log(young);
for (let i = 0; i < input.length; i++) {
    if (old < input[i].age) {
        old = input[i].age;
    }
}
console.log("Youngest family member: ", young);
console.log("Oldest family member: ", old);
console.log("Age Difference: ", old - young);

