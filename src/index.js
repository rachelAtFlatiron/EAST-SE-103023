/* constants */
const resultsDiv = document.querySelector("#results");
const apiSearchForm = document.querySelector("#search-form");
const apiRoot = "https://api.tvmaze.com";

//✅ 1. on tv maze api search form submit 
apiSearchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    //resultsDiv.clear()
    //✅ 1a. send search value to API

    //✅ 1d. render all episodes of show
    let query = encodeURI(e.target.search.value)
    // console.log(query)
   //https://api.tvmaze.com/search/shows?q=the%20knick
    fetch(`${apiRoot}/singlesearch/shows?q=${query}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        //✅ 1b. render title, image, summary of show
        const showTitle = document.createElement('h2')
        const showImg = document.createElement('img')
        const showSum = document.createElement('div')

        showTitle.textContent = data.name 
        showImg.src = data.image.original 
        showImg.width = "400"
        showSum.innerHTML = data.summary
        //access specific CSS properties in JS
        showSum.style.width = "400px"

        resultsDiv.append(showTitle, showImg, showSum)

        //✅ 1c. render first episode of show
        ///shows/:id/episodes 
        //:id refers to the ID of the show
        fetch(`${apiRoot}/shows/${data.id}/episodes`)
        .then(res => res.json())
        .then(shows => {
            console.log(shows)
            shows.forEach(show => {
                let season = document.createElement('p')
                let poster = document.createElement('img')

                season.textContent = `Season ${show.season} showsode ${show.number}: ${show.name}`
                poster.src = show.image.original 
                poster.width = "400"
    
                resultsDiv.append(season, poster)
            })
        })
    })
})

//✅ 2. create keys.js file to hold API key for Google books

//✅ 3b. make fetch request to google books

//✅ 3c. display data on page for one book


//✅ 3d. iterate over all items and display data on page
