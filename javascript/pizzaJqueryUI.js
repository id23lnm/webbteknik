$(document).ready(function() {
    // Gör pizzan draggable
    $("#pizza").draggable();

    // Gör tallriken till en droppable area
    $("#plate").droppable({
        accept: "#pizza",
		drop: function(event, ui) {
            // När pizzan släpps på tallriken
            $("#pizza").fadeOut(300, function() {
                $("#plate").html("Pizzan är serverad!"); // Ändrar texten på tallriken
            });
        }
    });
});