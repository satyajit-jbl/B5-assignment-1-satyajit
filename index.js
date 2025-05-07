"use strict";
function formatString(input, toUpper) {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
function filterByRating(items) {
    // return items.filter(item=>item.rating>=5);
    items.forEach(item => {
        if (item.rating >= 4)
            return items;
    });
    return items;
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
const result = filterByRating(books);
console.log(result);
function concatenateArrays(...arrays) {
    let result = [];
    for (const arr of arrays) {
        result = [...result, ...arr];
    }
    return result;
}
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());
