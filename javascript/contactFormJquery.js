$(document).ready(function() {
    // Funktion för att animera input-fält vid fokus
    $("#form input, #form textarea").focus(function() {
        $(this).animate({
            fontSize: "18px", // Ändrar textstorleken
            padding: "15px"   // Ändrar padding
        }, 300);
    }).blur(function() {
        $(this).animate({
            fontSize: "14px",  // Återställer textstorleken
            padding: "2px"    // Återställer padding
        }, 300);
    });
});

