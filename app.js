document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");

  searchButton.addEventListener("click", () => {
    fetch("superheroes.php")
      .then((response) => {
        // The server returns plain text (HTML formatted list)
        return response.text();
      })
      .then((data) => {
        // Display the returned list in an alert box
        alert(data);
      })
      .catch((error) => {
        console.error("Error fetching superheroes:", error);
      });
  });
});