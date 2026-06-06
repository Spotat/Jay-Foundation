document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".fade-in-up");

  function handleScroll() {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (!card.classList.contains("active") && rect.top < window.innerHeight) {
        card.classList.add("active");
      }
    });

    // Stop listening if all cards are animated
    if ([...cards].every(card => card.classList.contains("active"))) {
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
});
