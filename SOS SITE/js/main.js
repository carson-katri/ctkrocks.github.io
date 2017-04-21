function round(value, decimals) {
	return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

$("#envelopes").on('keyup mouseup', function() {
	var price = 0.6*$("#envelopes").val();
	$("#money").text("$" + price.toFixed(2));
});
