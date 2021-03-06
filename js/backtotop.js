// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
		document.getElementById("backToTopBtn").style.display = "block";
	} else {
		document.getElementById("backToTopBtn").style.display = "none";
	}

	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		document.getElementById("downloadCV").style.display = "block";
	} else {
		document.getElementById("downloadCV").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}