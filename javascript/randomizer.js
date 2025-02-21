function showRandomPizza() {
    var pizzas = [
        "Margarita – Klassisk och enkel!",
        "Capricciosa – En tidlös favorit!",
        "Vesuvio – Perfekt för skinkälskaren!",
        "Hawaii – Med ananas, om du vågar!"
    ];

    var randomIndex = Math.floor(Math.random() * pizzas.length);
    document.getElementById("pizza-recommendation").textContent ="Dagens rekommendation: " +pizzas[randomIndex];
}

window.onload = showRandomPizza;