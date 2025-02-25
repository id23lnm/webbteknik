document.addEventListener("DOMContentLoaded", function () {
    // Hämta alla länkar i navigeringsmenyn
    const links = document.querySelectorAll("nav ul li a");
    
    // Hämta nuvarande sidans URL (utan domänen)
    const currentPage = window.location.pathname.split("/").pop();

	// Om användaren hamnar direkt på startsidan (tom sträng), sätt currentPage till "index.html"
	if (currentPage === "") {
    	currentPage = "index.html";
    }

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});


