$(document).ready(function() {
	var clipboard = new Clipboard('.button-submit');
});

function copy() {
	var url = "https://ctkrocks.github.io/ColoradoColours/index.html?name=" + $("#name").val() + "&invoice=" + $("#invoice").val() +  "&amount=" + $("#amount").val() + "#pay";
	url = url.replace(" ", "%20");
	$("#url").val(url);
};
