// Start here!


// 💡 JS data types:
/*
    string
    number
    boolean
    array
    object
    null
    undefined
*/
    //this line is indented
        //this line is indented twice.

        
// ✅ Show each of the data types and use typeof()
        
let variable  = 5
variable = variable + 4

let myArr = [1, 2, 3]

let myObj = {
    name: "Pablo",
    pets: [
        {
            petname: "ashe"
        }
    ]
}

// myObj = null

// myObj = undefined



// 💡 Storing values in variables

// ✅ Create a variable with let and store different data types in it

let var1 = 1
var1 = 5

var var3 = 3


// ❓ Why is using the var keyword bad? 🤔




// ✅ Create a variable with const and try to change the value

const var2 = 2
// var2 = 5
// -> Uncaught TypeError: Assignment to constant variable.
// console.log("here")


    // ❓ What happened? What did you get back and what did it say? 🤔

// 💡 Conditionals - if / else if / else

// ✅ Create a conditional statement


// let condition = false

// if (condition) 
// {
//     console.log("Do something")
//     //a code block
// } else {
//     //another code block
//     console.log("condition is false")
// }


    // ✅ Create a conditional statement that shows the difference between truthy and falsy values
let someValue = []

if (someValue) 
{
    console.log("SomeValue is truthy")
    //a code block
    //more code
    //more code

} else {
    //another code block
    console.log("someValue is falsy")
}

    // debugger


// 💡 Arrays and array iteration

// ✅ Create an array of numbers
let myNums = [0, 8, 2, 1]


// ✅ Iterate through the array using a for loop
for (let i = 0; i < myNums.length; i++) {
    console.log(myNums[i])
    let element = myNums[i]
    
}

console.log("i am out of the loop")

// ✅ Iterate through the array using a forEach loop
myNums.forEach(element => {
    //block of code
    // what do I want to do with each element
    console.log(element)
}
);



// ✅ Iterate through the array and add two to each number with map
let newNums = myNums.map((element) => {
    return element + 2
})

// ❓ When do I use forEach vs map? 🤔 
// -- when I want to create a duplicate array with different values.

// ✅ Iterate through the array and filter only the numbers greater than 10
    



// 💡 Working with Objects

// ✅ Create a person object with the keys 'name' and 'role' and assign them values




// ✅ Access the key/value pairs of the object using both dot notation and bracket notation




// ✅ Change the values of the keys in the object



