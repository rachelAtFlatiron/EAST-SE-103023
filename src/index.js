/* constants */
const bookList = document.querySelector("#book-list");

//This is how we would get the li 
// if we arent defining our event handler
// within the renderBook

// const handleDelete = (e) => {
// 	e.target.parentElement.remove()
// }

/**
 * 
 * Renders a book card to DOM given a book object
 */
function renderBook(book) {
	// this li represents the book in its entirety
	const li = document.createElement("li");
	li.className = "card";
	const titleNode = document.createElement("h3");
	const authorNode = document.createElement("p");
	const priceNode = document.createElement("p");
	const imgNode = document.createElement("img");
	const deleteBtn = document.createElement("button");

	titleNode.textContent = book.title;
	authorNode.textContent = book.author;
	priceNode.textContent = formatPrice(book.price);
	imgNode.src = book.imageUrl;
	deleteBtn.textContent = "Delete";
	//✅ 1. on delete button click, remove card from DOM
	//✅ 1b. include callback function to remove card instance
	const handleDelete = (e) => {
		li.remove()
	}

	//✅ 1a. attach eventListener
	deleteBtn.addEventListener("click", handleDelete)

	//✅ 1c. define cb outside of renderBook

	bookList.append(li);
	li.append(titleNode);
	li.append(authorNode);
	li.append(priceNode);
	li.append(imgNode);
	li.append(deleteBtn);
}

//✅ 2. add a submit event listener to the form
//✅ 2a. save the form node as a const
const bookForm = document.getElementById("book-form")

//Short form:
//query selector bad
// const bookForm = document.querySelector("form")
// console.log("this is my book form: " + bookForm)
// (is it though)

//✅ 2b. write a testing function to fill in the values of the form
function fillIn(form, data) {
	form.title.value = data.title
	form.author.value = data.author
	form.price.value = data.price
	form.imageUrl.value = data.imageUrl
	form.inventory.value = data.inventory
}
//✅ 2c. invoke the fill in function
const aotBook = {
	title : "Attack on Titan, Vol 17",
	author : "Hajime Isamaya",
	price : 24.99,
	imageUrl : "https://m.media-amazon.com/images/I/91VOKdyPb+L._AC_UF1000,1000_QL80_.jpg",
	inventory : 4
}

fillIn(bookForm, aotBook)


//✅ 2d. create the event listener 
const createBook = 
bookForm.addEventListener("submit", (e) => {
	e.preventDefault()
	//✅ 2e. create the new book and add to DOM
	const newBook = {
		title: e.target.title.value,
		author: e.target.author.value,
		price: e.target.price.value,
		inventory: e.target.inventory.value,
		imageUrl: e.target.imageUrl.value
	}
	e.target.title.value = ""
	e.target.author.value = ""
	e.target.price.value = ""
	e.target.inventory.value = ""
	e.target.imageUrl.value = ""

	renderBook(newBook)
})


//✅  3. recap - show the form when you click on the "add new book" button
//✅ 3a. save the button in a variable
// const hideForm = document.querySelector("#toggleForm")
const hideFormButton = document.getElementById("toggleForm")
//✅ 3b. add the event listener
hideFormButton.addEventListener('click', (event) => {
	//✅ 3c. hide/show the form
	//if its not alread collapsed
	if (bookForm.classList.contains("collapsed")) {
		bookForm.classList.remove("collapsed")
		hideFormButton.innerText = "Hide Form"
	} else {
		bookForm.classList.add("collapsed")
		hideFormButton.innerText = "Show Form"
	}

	//✅ 3d. update the button text
	
})

/*
*
* 
OLD BUISINESS
*
*
*/

/* helper function to format the price of a book */
function formatPrice(price) {
	return "$" + Number.parseFloat(price).toFixed(2);
}

/* adds name of bookstore to header */
function renderHeader(bookStore) {
	document.querySelector("#store-name").textContent = bookStore.name;
}

/* adds details of bookstore to footer */
function renderFooter(bookStore) {
	document.querySelector("#store").textContent = bookStore.location;
	document.querySelector("#number").textContent = bookStore.number;
	document.querySelector("#address").textContent = bookStore.address;
}

/* invoke functions on DOM content loaded */
renderHeader(bookStore);
renderFooter(bookStore);
bookStore.inventory.forEach(book => renderBook(book));
