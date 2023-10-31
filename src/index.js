//✅ 1. fork and sync git

//✅ 2. Review data.js and order of script tags in HTML <head> 

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

//✅ 3. explore the debugger

//✅ 4. update the store name with "easley's technical books"
function renderHeader(){
  let storeName = bookStore.name //1. get the info we need 
  //#store-name already exists in index.html
  let storeNameNode = document.querySelector('#store-name') //2. get the node
  storeNameNode.textContent = storeName //3. update the node
}
renderHeader()

//✅ 5. create a function for render footer
function renderFooter(){
  let storeName = bookStore.name 
  let storeNumber = bookStore.number 
  let storeAddress = bookStore.address 

  let storeNameNode = document.querySelector('#store')
  let storeNumberNode = document.querySelector('#number')
  let storeAddressNode = document.querySelector('#address')

  storeNameNode.textContent = storeName 
  storeNumberNode.textContent = storeNumber
  storeAddressNode.textContent = storeAddress
}
renderFooter()

//✅ 6. create a function called renderBook(book)

/*
<li class="card">
  <h3>Eloquent JavaScript : A Modern Introduction to Programming</h3>
  <p>Marjin Haverbeke</p>
  <p>$10.00</p>
  <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
  <button>Delete</button>
</li>
*/

//✅ 7. iterate over all the books in data and show book on page

//1. the info we needed 
let bookArray = bookStore.inventory

function renderBook(book){
  //2. created the nodes we needed
  //3. updated classNames, textContent, src, whatever else
  const li = document.createElement('li')
  li.classList.add('card')

  let h3 = document.createElement('h3')
  h3.textContent = book.title

  let pAuthor = document.createElement('p')
  pAuthor.textContent = book.author 

  let pPrice = document.createElement('p')
  pPrice.textContent = formatPrice(book.price)

  let img = document.createElement('img')
  img.src = book.imageUrl

  let button = document.createElement('button')
  button.textContent = "Delete"

  //4. appended to appropriate divs
  let bookList = document.querySelector('#book-list')
  bookList.appendChild(li)
  li.appendChild(h3)
  li.appendChild(pAuthor)
  li.appendChild(pPrice)
  li.append(img)
  li.append(button)
}
//bookArray.forEach(renderBook)
bookArray.forEach((book) => renderBook(book))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//.map

let arr = [1, 2, 3, 4, 5]
//[10, 20, 30, 40, 50]
let tens = arr.map((el) => {return el * 10})

// iteration #1: el is 1, el*10 = 10
// iteration #2: el is 2, el*10 = 20
// iteration #3: el is 3, el*10 = 30 
// iteration #4: el is 4, el*10 = 40
// iteration #5: el is 5, el*10 = 50

let arrTwo = ['billy', 'bobby', 'brown']
//['Hi billy', 'Hi bobby', 'Hi brown']
let his = arrTwo.map((el) => {return `Hi ${el}`})
// el += "hi"
// el = el + "hi"

//el is some object with keys name, pet 
const petsHelper = (el) => {
  //given el, use the info in el to create the string 
  //ex. if el = {name: "dutch", pet: "dog"} create the string "dutch the dog"
  return el.name + " the " + el.pet
}
/*
el = {name: "dutch", pet: "dog"}
el.name => "dutch"
el.pet => "dog"
el.name[1] => does not exist 
*/
let objects = [
  {name: "dutch", pet: "dog"},
  {name: "finn", pet: "lab"},
  {name: "bodhi", pet: "dog"},
  {name: "moon", pet: "cat"}
]

//["dutch the dog", "finn the lab", "bodhi the dog", "moon the cat"]
let pets = objects.map(petsHelper)
