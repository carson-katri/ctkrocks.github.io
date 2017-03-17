function gup(name, url) {
  if (!url) url = location.href;
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( url );
  return results == null ? null : results[1];
}

$(document).ready(function() {
  $("input[name=os0]").val(gup('name', document.location.url).replace("%20", " "));
  $("input[name=myopt1]").val(gup('invoice', document.location.url).replace("%20", " "));
  $("input[name=amount]").val(gup('amount', document.location.url).replace("%20", " "));
});