var style = $("style");
var selectors = "";
selectors += "#ppControl { " +
	"display: block;" + 
	"clear: both;" + 
	"overflow: hidden;" +
	"width: 44px; height: 44px;" +
	"font-size: 32px; color: #000" +
	"text-align: center;" +
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
	.css("display", "block")
	.css("clear", "both")
	.css("overflow", "hidden")
	.css("height", "44px")
	.css("width", "44px")
	// .css("background-color", "#808080")
	.css("background-image", "linear-gradient(top, rgb(128, 128, 128), rgb(255, 255, 255))")
	.css("font-size", "32px")
	.html("&#x25B6");
var gPPState = false;
$(ppControl).click(function () {
	gPPState = !gPPState;
	thisCase = document.location.href.split("?")[1].split("#")[0];
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