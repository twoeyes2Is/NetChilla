// Get references to form elements
const ratingForm = document.getElementById("ratingForm");
const movieList = document.getElementById("movieList");

// Load saved movies when page loads
window.onload = function () {
  displayMovies();
};

// Handle form submission
ratingForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value.trim();
  const rating = document.getElementById("movieRating").value;

  if (name === "") {
    alert("Please enter a movie name.");
    return;
  }

  // Get existing movies from localStorage
  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  // Add new movie
  movies.push({ name: name, rating: rating });

  // Save back to localStorage
  localStorage.setItem("movies", JSON.stringify(movies));

  // Refresh display
  displayMovies();

  // Reset form
  ratingForm.reset();
});

// Function to display movies
function displayMovies() {
  // Clear current list
  movieList.innerHTML = "";

  // Get movies from localStorage
  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  // Loop through and display each movie
  movies.forEach((movie, index) => {
    let li = document.createElement("li");
    li.textContent = `${movie.name} — Rating: ${movie.rating}/5`;

    // Optional: add delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = function () {
      deleteMovie(index);
    };

    li.appendChild(delBtn);
    movieList.appendChild(li);
  });
}

// Delete a movie rating
function deleteMovie(index) {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  movies.splice(index, 1); // remove one item at index
  localStorage.setItem("movies", JSON.stringify(movies));
  displayMovies(); // refresh list
}
