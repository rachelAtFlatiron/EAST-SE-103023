//✅ 1. refactor: event handler functions, render functions, testing functions

/* constants */
const bookList = document.querySelector("#book-list");
const toggleBookFormButton = document.querySelector("#toggle-form");
const bookForm = document.querySelector("#book-form"); 
const toggleStoreFormButton = document.querySelector("#toggle-store-form");
const url = "http://localhost:3000";

//✅ 3. store drop-down list
const storeSelector = document.querySelector('#store-selector'); 
//✅ 3. store-form const
const storeForm = document.querySelector("#store-form");

//✅ 2. include POST request on new book form submit
// first create submit event listener
bookForm.addEventListener("submit", (evt)=>{
	evt.preventDefault()

	const newBook =  {
		"title":evt.target.title.value,
		"author":evt.target.author.value,
		"price":evt.target.price.value,
		"inventory": evt.target.inventory.value,
		"imageUrl": evt.target.imageUrl.value,
		"reviews": []
	}
	//✅ 2a. create fetch request: pessimistic (and optimistic approach)
	//Writing from scratch:
	// fetch(`${url}/books`, {
	// 	method: "POST", // *GET, POST, PUT, DELETE, etc.
	// 	mode: "cors", // no-cors, *cors, same-origin
	// 	cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
	// 	credentials: "same-origin", // include, *same-origin, omit
	// 	headers: {
	// 	"Content-Type": "application/json",
	// 	  // 'Content-Type': 'application/x-www-form-urlencoded',
	// 	},
	// 	redirect: "follow", // manual, *follow, error
	// 	referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	// 	body: JSON.stringify(newBook), // body data type must match "Content-Type" header
	// });

	// use the boilerplate:
	//✅ 2b. use boilerplate from request_helpers.js to execute POST request
	postJSON(`${url}/books`, newBook)
	.then(newBookWithId => {
		console.log("successful post request with data:")
		console.log(newBookWithId)
		renderBook(newBookWithId)
		return
	})

	//Doing it optimistically:
	// renderBook(newBook)
	// ^ uses new book instead of newBookWithId




	//Clear the form and close the form.
	evt.target.reset()
	toggleBookForm()
})

//✅ 3. implement store form and store dropdown
//✅ 3a. create eventListener for form
storeForm.addEventListener("submit", (e) => {
	e.preventDefault()
	
	const newStore = {
		"location": e.target.location.value,
		"address": "No address",
		"number": e.target.number.value,
		"name": e.target.name.value,
		"hours": "Monday - Friday 9am - 6pm" 
	}

	//✅ 3b. create POST request for new store
	// fetch(url + "/stores/", {
	fetch(`${url}/stores`, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		headers: {
		"Content-Type": "application/json"
		},
		body: JSON.stringify(newStore), // body data type must match "Content-Type" header
	})
	.then(r => r.json())
	.then(store => {
		console.log("store with id was created: " + store.id)
		addSelectOptionForStore(store) 
	})


	//This was optimistic (as in optimistic that the server request worked)
	// addSelectOptionForStore(newStore)

	e.target.reset()
	toggleStoreForm()
})



/* fetches and renders all books */
fetch(`${url}/books`)
	.then((res) => res.json())
	.then((books) => {
		books.forEach(renderBook)
	});
	// .then((books) => books.forEach((book) => renderBook(book))); <- does the same thing
	//although this one ^ is more explict, and clear about how that is done.

getJSON(`${url}/stores`)
.then(stores => {
	renderStoreSelectionOptions(stores)
	renderHeader(stores[0])
	renderFooter(stores[0])
})

/* event listeners to toggle forms */
toggleBookFormButton.addEventListener("click", (e) => {
	toggleBookForm();
});
toggleStoreFormButton.addEventListener("click", (e) => {
	toggleStoreForm();
});

/* fills in form with data for testing */
fillStore(storeForm, {
	name: "Thomas' Manga Shop",
	location: "Austin Texas",
	number: "737-555-5555"
});

fillBook(bookForm, {
	title: "AOT - Chapter 35",
	author: "Hajime",
	price: 20,
	imageUrl: "https://m.media-amazon.com/images/I/91YfNb49PLL._SY522_.jpg",
	inventory: 11
})


//////////////////////
// render functions //
//////////////////////


////////////////////////////////////////////////////////////////
// Event Listeners/Handlers (Behavior => Data => Display) //////
////////////////////////////////////////////////////////////////


///////////////////////////
// Testing functions //////
///////////////////////////
