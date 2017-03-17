var colors = ["red", "orange", "yellow", "green", "blue", "purple"];

$(document).ready(function() {
	var random = Math.floor((Math.random() * colors.length));
	$("body, .navbar, .nav-item, .button-submit").addClass(colors[random]);
});