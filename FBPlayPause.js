var style = $("style");
var selectors = "";
selectors += "#ppControl { " +
	"display: block;" + 
	"clear: both;" + 
	"overflow: hidden;" +
	"width: 44px; height: 44px;" +
	"font-size: 32px; color: #000;" +
	"text-align: center;" +
	"-webkit-border-radius: 11px; -moz-border-radius: 11px; border-radius: 11px;" +
	"background-color: #808080;" +
	"background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(128, 128, 128)), to(rgb(255, 255, 255)));" +
	"background-image: -webkit-linear-gradient(top, rgb(128, 128, 128), rgb(255, 255, 255));" +
	"background-image: -moz-linear-gradient(top, rgb(128, 128, 128), rgb(255, 255, 255));" +
	"background-image: -o-linear-gradient(top, rgb(128, 128, 128), rgb(255, 255, 255));" +
	"background-image: -ms-linear-gradient(top, rgb(128, 128, 128), rgb(255, 255, 255));" +
	"background-image: linear-gradient(top, rgb(128, 128, 128), rgb(255, 255, 255));" +
	"filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#808080', EndColorStr='#ffffff');" +
" }";
style.append(selectors);

var ppControl = $(document.createElement("div")).attr("id", "ppControl")
	.html("&#x25B6");
var gPPState = false;
thisCase = function () {
	return document.location.href.split("?")[1].split("#")[0];
}
$(ppControl).click(function () {
	gPPState = !gPPState;
	if (gPPState) {
		changeIxWorkingOn(thisCase);
		ppControl.html("&#x275A&#x275A");
	} else {
		changeIxWorkingOn(0);
		ppControl.html("&#x25B6");
	}
});
var ixBug = $("div.ixBug");
ixBug.append(ppControl);
if ($("#Menu_Working_On").text().indexOf(thisCase()) > -1) {
	ppControl.html("&#x275A&#x275A");
	gPPState = true;
}