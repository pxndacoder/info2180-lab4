window.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const searchField = document.getElementById("searchField");
  const resultDiv = document.getElementById("result");

  searchBtn.addEventListener("click", () => {
    const query = searchField.value.trim();
    const url = query
      ? `superheroes.php?query=${encodeURIComponent(query)}`
      : "superheroes.php";

    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        resultDiv.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        resultDiv.innerHTML = "<p>Error loading data.</p>";
      });
  });
});
