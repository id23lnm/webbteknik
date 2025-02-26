$(document).ready(function() {
    function fadeContactInfo() {
        $(".contact-us-text").fadeTo(500, 0.8); 
    }

    function fadeOpeningHours() {
        $(".open-hours-text").fadeTo(500, 0.6); 
    }

    // Anropa funktionerna när sidan laddas
    fadeContactInfo();
    fadeOpeningHours();

	// Gör texten fullt synlig vid hover och återgå vid mouseout
	$(".contact-us-text").hover(
        function() { $(this).fadeTo(500, 1); },  // Hover in: full opacitet
        function() { $(this).fadeTo(500, 0.8); } // Hover ut: tillbaka till 0.8
    );

    $(".open-hours-text").hover(
        function() { $(this).fadeTo(500, 1); },  // Hover in: full opacitet
        function() { $(this).fadeTo(500, 0.6); } // Hover ut: tillbaka till 0.5
    );
});

