// Built-In Function

// Map
var students = [{
    name : "Vignesh",
    age : 25
},
{
    name : "John",
    age : 30
},
{
    name : "Jane",
    age : 28
}];

// ["Vignesh", "John", "Jane"]

const structuredEntries = students.map((student)=> {
    return student.name + " is " + student.age + " years old";
})

console.log(structuredEntries);


// forEach
const animals = ["Dog", "Cat", "Elephant", "Lion"];

animals.forEach((animal) => {
    console.log("Animal: " + animal);
});

// FlatMap
const products = [
    [
        {name: "Laptop", price: 1000}, 
        {name: "Phone", price: 500}, 
        {name: "Tablet", price: 300}
    ],
    [
        {name: "Monitor", price: 200}, 
        {name: "Keyboard", price: 50}, 
        {name: "Mouse", price: 25}
    ]
]

const a = [1,3,4,5,[2,3,3,4,[4,7,4,5]],6,7,8,9,10];

console.log(a.flat(2)); // Flattens the array to a depth of 2


const flatMappedProducts = products.flatMap((productList) => {
    return productList.map((product) => {
        return `${product.name} costs $${product.price}`;
    });
})

console.log(products.flat());

//Filter
const numbers = [{
    value: 1
}, {
    value: 2
}, {
    value: 3
}, {
    value: 4
}, {
    value: 5
}];

console.log(numbers.filter((number) => number.value % 2 == 0))

// Every
const ages = [15, 22, 18, 30, 25];

console.log(ages.every((age) => age >= 15));

// Some
const scores = [85, 90, 78, 92, 88];

console.log(scores.some((score) => score > 100));