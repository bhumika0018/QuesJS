// 6. You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use find the average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50.


const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
];

let avgElec, sumElec = 0, avgCloth, sumCloth = 0;
for (i in products) {
    if (products[i].category == "Electronics") {
        sumElec = sumElec + products[i].price;
    }
    else {
        sumCloth = sumCloth + products[i].price;
    }
}
avgElec = sumElec / 4;
console.log('Average of Electronics: ', avgElec);
avgCloth = sumCloth / 4;
console.log('Average of Clothes: ', avgCloth);

for (i in products) {
    if (products[i].price > 50) {
        console.log(products[i].category);
    }
}
