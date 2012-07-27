var FBPlayPause = FBPlayPause || {};
FBPlayPause.style = $("style");
FBPlayPause.selectors = "";
FBPlayPause.selectors += "#ppControl { " +
	"display: block;" + 
	"clear: both;" + 
	"overflow: hidden;" +
	"font-size: 28px; color: #555;" +
	"height: 44px;" +
	"width: 168px; " +
	"line-height: 44px;" +
	"-webkit-border-radius: 22px; -moz-border-radius: 22px; border-radius: 22px;" +
	"border: 1px solid #444;" +
	"cursor: hand;" +
	"background-color: #808080;" +
	"background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(128, 128, 128)), to(rgb(255, 255, 255)));" +
	"background-image: -webkit-linear-gradient(top, rgb(128, 128, 128), rgb(255, 255, 255));" +
	"background-image: -moz-linear-gradient(top, rgb(128, 128, 128), rgb(255, 255, 255));" +
	"background-image: -o-linear-gradient(top, rgb(128, 128, 128), rgb(255, 255, 255));" +
	"background-image: -ms-linear-gradient(top, rgb(128, 128, 128), rgb(255, 255, 255));" +
	"background-image: linear-gradient(top, rgb(128, 128, 128), rgb(255, 255, 255));" +
	"filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#808080', EndColorStr='#ffffff');" +
	" } " + 
	"#ppControl:hover { " +
	"color: #ccc;" +
	"border-color: #09c;" +
	"background-color: #606060;" +
	"background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(64, 64, 64)), to(rgb(128, 128, 128)));" +
	"background-image: -webkit-linear-gradient(top, rgb(64, 64, 64), rgb(128, 128, 128));" +
	"background-image: -moz-linear-gradient(top, rgb(64, 64, 64), rgb(128, 128, 128));" +
	"background-image: -o-linear-gradient(top, rgb(64, 64, 64), rgb(128, 128, 128));" +
	"background-image: -ms-linear-gradient(top, rgb(64, 64, 64), rgb(128, 128, 128));" +
	"background-image: linear-gradient(top, rgb(64, 64, 64), rgb(128, 128, 128));" +
	"filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#606060', EndColorStr='#ffffff');" +
	" } " +
	"#ppControl span.symbol { " +
	"display: block;" +
	"float: left;" +
	"padding: 4px 4px 4px 16px;" +
	"border-right: 1px solid #444;" +
	"height: 44px;" +
	"line-height: 36px;" +
	" } " +
	"#ppControl span.label { " +
	"display: block;" +
	"float: left;" +
	"padding: 4px 4px 4px 4px;" +
	"border-left: 1px solid #ccc;" +
	"font-size: 15px;" +
	"font-weight: bold;" +
	"height: 44px;" +
	"line-height: 36px;" +
	" } ";
FBPlayPause.style.append(FBPlayPause.selectors);
FBPlayPause.labels = {
	play: "<span class=\"symbol\">&#x25B6</span><span class=\"label\">Record Time</span>",
	pause: "<span class=\"symbol\">&#x275A&#x275A</span><span class=\"label\">Stop Recording</span>"};
FBPlayPause.ppControl = $(document.createElement("div")).attr("id", "ppControl")
	.html(FBPlayPause.labels.play);
FBPlayPause.gPPState = false;
FBPlayPause.thisCase = function () {
	return document.location.href.split("?")[1].split("#")[0];
}
$(FBPlayPause.ppControl).click(function () {
	FBPlayPause.gPPState = !FBPlayPause.gPPState;
	if (FBPlayPause.gPPState) {
		changeIxWorkingOn(FBPlayPause.thisCase());
		FBPlayPause.ppControl.html(FBPlayPause.labels.pause);
	} else {
		changeIxWorkingOn(0);
		FBPlayPause.ppControl.html(FBPlayPause.labels.play);
	}
});
var ixBug = $("div.ixBug");
ixBug.append(FBPlayPause.ppControl);
if ($("#Menu_Working_On").text().indexOf(FBPlayPause.thisCase()) > -1) {
	FBPlayPause.ppControl.html(FBPlayPause.labels.pause);
	FBPlayPause.gPPState = true;
}