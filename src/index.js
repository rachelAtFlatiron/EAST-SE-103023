//Data 
const inventory = [
    {
        id: 1,
        title: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marjin Haverbeke',
        price: 10.00,
        reviews: [{ userID: 1, content: 'Good book, but not great for new coders' }],
        inventory: 10,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
    },
    {
        id: 2,
        title: 'JavaScript & JQuery: Interactive Front-End Web Development',
        author: 'Jon Duckett',
        price: 45.75,
        reviews: [{ userID: 15, content: 'good way to learn JQuery' }],
        inventory: 2,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
    },
    {
        id: 3,
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        price: 36.00,
        reviews: [{ userID: 25, content: 'I disagree with everything in this book' }, { userID: 250, content: 'Only JS book anyone needs' }],
        inventory: 8,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
    },
    {
        id: 4,
        title: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        price: 25.50,
        reviews: [{ userID: 44, content: 'Great intro to js book' }, { userID: 350, content: 'It really is the Definitive guide' }],
        inventory: 0,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
    },
    {
        id: 5,
        title: 'You Don’t Know JS',
        author: 'Kyle Simpson',
        price: 6.00,
        reviews: [{ userID: 76, content: 'You can find this for free online, no need to pay for it!' }],
        inventory: 7,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
    },
    {
        id: 6,
        title: 'Learn Enough JavaScript to Be Dangerous',
        author: 'Michael Hartl',
        price: 24.00,
        reviews: [{ userID: 50, content: 'pretty good' }],
        inventory: 5,
        imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'
    },
    {
        id: 7,
        title: 'Cracking the Coding Interview',
        author: 'Gayle Laakmann McDowell',
        price: 49.95,
        reviews: [{ userID: 99, content: 'One of the most helpful books for taking on the tech interview' }, { userID: 20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
        inventory: 20,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
    },
]

//✅ 1. Create hello world using REGULAR functions
function helloWorld() {
    return "hello world!"
    // console.log("hello world!")
}


//✅ 2. For Easley's bookstore, create formatPrice(price)

let price1 = 2.09
let price2 = 3.42

oldFormatPrice(price1)
oldFormatPrice(price2)

function oldFormatPrice(price) 
{
    let fixedPrice = price.toFixed(2)
    let formattedPrice =  fixedPrice + "$"
    //for interpolating, need backticks (`) instead of quotes ( ', " )
    //put value(s) inside ${}
    let formattedPrice2 = `$${fixedPrice}`
    return formattedPrice2
}
//✅ 3. Make an arrow function version of formatPrice
const formatPrice = (price) => `$${price.toFixed(2)}`




//✅ 4. WE DO: create a blurb() function that accepts a book as an argument and logs a message in the following format:
//'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke is on sale for $10.00'
function blurb(book) {
    let message = `${book.title} by ${book.author} is on sale for ${formatPrice(book.price)}`
    console.log(message)
    return message
}


//✅ 5. Call formatPrice on an array of prices



//✅ 5a. Create an array
let prices = [20, 30, 29.32, 40.9, 500.009]

//✅ 5b. Use a for loop to iterate over prices
for(let i = 0; i < prices.length; i = i + 1){
    let price = prices[i]

}


//✅ 5c. Use .forEach to iterate over prices
let formattedPricesA = []

prices.forEach( (price) =>{
    console.log(formatPrice(price))
    // formattedPrices.push(...)
})

//✅ 5d. Use .map to iterate over prices
// prices.map((price) => formatPrice(price))
//these are the same
let formattedPrices = prices.map(formatPrice)

//✅ 5e. using .map, for each book in inventory, return blurb(book)
//output: ['Eloquent JavaScript: A Modern Introduction to Programming is on sale for $10.00', ...]
let bookBlurbsA = inventory.map(book => {
    return blurb(book)
})
//this does the same thing
let bookBlurbsB = inventory.map(book => blurb(book))
//so does this
let bookBlurbs = inventory.map(blurb)

//✅ 6. Create a version of myMap that uses a for loop to mimic .map
//input: array, callback function
//output: a new array

//is myMap a lower order function, or a higher order function

function myMap(array, callback) {
    let newArray = []

    for (let i = 0; i < array.length; i++){
        let element = array[i]
        
        let newElement = callback(element)
        newArray.push(newElement)
    }

    return newArray
}

myMapBlurbs = myMap(inventory, blurb)

let inventory2 = []
let inventory3 = []

// Multiple volumes
multi_volumes = [inventory, inventory2, inventory3]

mySpecialMap(multi_volumes, myMap, blurb)

function mySpecialMap(bigArray, callbackOne, callBackTwo) {
    let newArray = []

    for (let i = 0; i < bigArray.length; i++){
        let smallArray = bigArray[i]
        
        let newElement = callbackOne(smallArray, callBackTwo)
        
        newArray.push(newElement)
    }

    return newArray
}


//Lets simplify this code
//this code does the smae thing as lines 170-183
let multi_volume_blurbs1 = multi_volumes.map(volume => myMap(volume, blurb))
//This is without using myMap()
let multi_volume_blurbs2 = multi_volumes.map(volume => volume.map(book => blurb(book)))
