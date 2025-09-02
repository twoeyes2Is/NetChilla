// ratings.js-like module inside main.js

// Store all ratings in one object
let movies = {
  sinners: [],
  womanking: [],
  inception: []
};

// Add rating
export function addRating(movieId) {
  let rating = parseInt(document.getElementById(movieId + "Rating").value);
  movies[movieId].push(rating);
  document.getElementById(movieId).innerText = "Rates: " + movies[movieId].join(", ");
}

// Average rating
export function averageRating(movieId) {
  if (movies[movieId].length === 0) {
    alert("No ratings yet for " + movieId + "!");
    return;
  }
  let sum = movies[movieId].reduce((acc, current) => acc + current, 0);
  let avg = sum / movies[movieId].length;
  alert("Average rating for " + movieId + ": " + avg.toFixed(2));
}

// Remove rating
export function removeRating(movieId) {
  if (movies[movieId].length === 0) {
    alert("No ratings to remove for " + movieId + "!");
    return;
  }
  movies[movieId].pop();
  document.getElementById(movieId).innerText = "Rates: " + movies[movieId].join(", ");
}

// Expose functions globally (so HTML buttons can call them)
window.addRating = addRating;
window.averageRating = averageRating;
window.removeRating = removeRating;

// Search box functionality

// Clock
  function clock() {
document.getElementById("clock"). innerHTML = "Time: " + moment().format("YYYY-MM-DD HH:mm:ss");
  }
  setInterval(clock, 1000);

//search button
// Get references
const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");

// Listen for search button click
searchBtn.addEventListener("click", function () {
  searchMovies();
});

// Also allow pressing Enter inside the input
searchBox.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    searchMovies();
  }
});

// Search function
function searchMovies() {
  const query = searchBox.value.toLowerCase();

  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  let filtered = movies.filter(movie => movie.name.toLowerCase().includes(query));

  // Clear list first
  movieList.innerHTML = "";

  // Show results
  if (filtered.length === 0) {
    searchResults.innerHTML = "<li>No movies found.</li>";
    return;
  }

  filtered.forEach(movie => {
    let li = document.createElement("li");
    li.textContent = `${movie.name} — Rating: ${movie.rating}/5`;
    searchResults.appendChild(li);
  });
}
