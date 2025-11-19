document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");
  const searchField = document.getElementById("searchField");
  const resultDiv = document.getElementById("result");

  // Reusable function to perform the search
  function performSearch() {
    // Get user input and sanitize it
    let query = searchField.value.trim();
    query = encodeURIComponent(query); // prevents injection or URL issues

    // Build the request URL
    let url = "superheroes.php";
    if (query) {
      url += `?query=${query}`;
    }

    // Perform the AJAX request
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        resultDiv.innerHTML = data; // render the result in the page
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  // Trigger search when the Search button is clicked
  searchButton.addEventListener("click", performSearch);

  // Trigger search when ENTER is pressed in the text field
  searchField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // stop the default form submit/reload
      performSearch();
    }
  });
});
