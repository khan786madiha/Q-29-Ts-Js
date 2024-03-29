// 29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// Make an array of your three favorite fruits
let favorite_fruits: string[] = ["apple", "banana", "orange"];

// Check if each fruit is in your array and print a statement accordingly
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
} else {
    console.log("You don't like strawberries as much.");
}

if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
} else {
    console.log("Kiwis are not one of your favorite fruits.");
}
