let movieNameRef = document.getElementById("movieName");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//function to fetch data from the API

let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
}