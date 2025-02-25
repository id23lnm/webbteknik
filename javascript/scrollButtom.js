const scrollToTopBtn = document.getElementById("scrollToTop");

// Visa knappen när användaren har scrollat ner en bit
window.addEventListener("scroll", function() {
    if (window.scrollY > 100) { // När användaren scrollar mer än 100px
        scrollToTopBtn.style.display = "block"; // Visa knappen
    } else {
        scrollToTopBtn.style.display = "none"; // Dölj knappen
    }
});

// Scrolla till toppen när knappen klickas
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll till toppen
});
