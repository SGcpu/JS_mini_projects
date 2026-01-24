const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH ="https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const movieBox = document.getElementById('movie-box')
const SearchBox = document.getElementById('search')
const title = document.getElementById('title-head')
const rating = document.getElementById('rating')
const overview = document.getElementById('overview')
const img = document.getElementById('img-container')

const getMovies = async(api) =>{
    const response = await fetch(api)
    const data = await response.json()
    //console.log(data)
    showMovies(data.results)
}
getMovies(APIURL)

const showMovies = (data) =>{
    movieBox.innerHTML = "";
    data.forEach((item) => {
        const imagePath = item.poster_path === null ? "img/image-missing.png" : `${IMGPATH}${item.poster_path}`;

        const box = document.createElement('div')
        box.classList.add('box')

        const movieImg = document.createElement('img')
        movieImg.src = imagePath
        movieImg.alt = item.original_title

        const overlay = document.createElement('div')
        overlay.classList.add('overlay')

        const titleDiv = document.createElement('div')
        titleDiv.classList.add('title')

        const movieTitle = document.createElement('h2')
        movieTitle.innerText = item.original_title

        const movieRating = document.createElement('span')
        movieRating.innerText = `Rating: ${item.vote_average}`

        const overviewHeading = document.createElement('h3')
        overviewHeading.innerText = "Overview:"

        const movieOverview = document.createElement('p')
        movieOverview.innerText = item.overview

        titleDiv.appendChild(movieTitle)
        titleDiv.appendChild(movieRating)
        overlay.appendChild(titleDiv)
        overlay.appendChild(overviewHeading)
        overlay.appendChild(movieOverview)

        box.appendChild(movieImg)
        box.appendChild(overlay)
        movieBox.appendChild(box)
    });
}

SearchBox.addEventListener("keyup", (e) => {
  const query = e.target.value.trim();

  if (query) {
    getMovies(`${SEARCHAPI}${query}`);
  } else {
    getMovies(APIURL);
  }
});
