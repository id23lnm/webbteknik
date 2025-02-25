document.addEventListener("DOMContentLoaded", function () {
    // Hämta alla länkar i navigeringsmenyn
    const links = document.querySelectorAll("nav ul li a");
    
    // Hämta nuvarande sidans URL (utan domänen). Om tomt, sätt "index.html".
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

