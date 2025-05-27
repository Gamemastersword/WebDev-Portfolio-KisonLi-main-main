let darkMode = false;
document.addEventListener("keydown", function (e) {
  if (e.key === "d") {
    document.body.style.backgroundColor = darkMode ? "#f0f8f5" : "#1a1a1a";
    document.body.style.color = darkMode ? "#1a1a1a" : "#f0f0f0";
    darkMode = !darkMode;
  }
});

// Alert on card click
document.querySelectorAll(".card").forEach(function (card) {
  card.addEventListener("click", function () {
    alert("You clicked: " + card.querySelector("h3").textContent);
  });
});
