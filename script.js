function searchMovie() {
  const movieName = document.getElementById("movieInput").value.trim();
  const apiKey = "77bc6c7c";
  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${apiKey}`;

  // Clear previous results
  document.getElementById("movieDetails").innerHTML = "<p>Loading...</p>";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.Response === "False") {
        document.getElementById("movieDetails").innerHTML = `<p>🎬 Movie not found. Try a different title.</p>`;
      } else {
        document.getElementById("movieDetails").innerHTML = `
          <h2>${data.Title} (${data.Year})</h2>
          <img src="${data.Poster !== "N/A" ? data.Poster : ''}" alt="${data.Title} poster" />
          <p><strong>Plot:</strong> ${data.Plot}</p>
          <p><strong>IMDB Rating:</strong> ⭐ ${data.imdbRating}</p>
        `;
      }
    })
    .catch(error => {
      document.getElementById("movieDetails").innerHTML = `<p>🚨 Error fetching data. Please try again later.</p>`;
      console.error("Fetch error:", error);
    });
}