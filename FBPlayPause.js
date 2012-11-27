var FBPlayPause = FBPlayPause || {};

FBPlayPause.labels = {
	play: "<span class=\"symbol\">&#x25B6</span>",
	pause: "<span class=\"symbol\">&#x275A&#x275A</span>"
};

FBPlayPause.gPPState = false;

FBPlayPause.thisCase = function () {
	"use strict";
	var result = "";
	if (document.location.href.indexOf("?") > -1) {
		result = document.location.href.split("?")[1].split("#")[0];
	} else {
		result = "Nothing Selected";
	}
	return result;
};

window.addEventListener("keyup", function (evt) {
	"use strict";
	if (evt.keyCode === 84 && evt.shiftKey) {
		FBPlayPause.ppControl.click();
	}
});

FBPlayPause.Init = function () {
	"use strict";
	FBPlayPause.root = $('<div id="fbplaypauseroot"></div>');
	var bumper = '<div class="fbplaypausebumper"></div>',
		control = '<div id="fbplaypausecontrol" style="display:block;float:left;clear:none;overflow:hidden;background-color:#ccc;width:40%;height:44px;border-radius:5px;"></div>',
		button = '<div id="fbplaypausebutton"></div>',
		slug = '<div style="display:block;clear:both;width:100%;height:20px;background-color:#999;"></div>',
		slugleft = $(slug).addClass("left"),
		slugright = $(slug).addClass("right"),
		display = '<div id="fbplaypausedisplay"><strong contenteditable="true"></strong><br /><em></em><div>';

	control = $(control).append($(button)).append(display);

	FBPlayPause.root.append($(bumper).append(slugleft), control, $(bumper).append(slugright));

	$("body").prepend(FBPlayPause.root);

	$("[contenteditable]").bind("focus", function (e) {
		FBPlayPause.lastTrack = $(e.target).text();
	});

	$("[contenteditable]").bind('keyup', function (e) {
		if (e.keyCode === 13) {
			console.log("From: " + FBPlayPause.lastTrack + " to " + parseInt($(e.target).text().replace("#", ""), 10));
			$(e.target).text($(e.target).text().replace("\n", ""));
			return false;
		}
	});

	FBPlayPause.ppControl = $("#fbplaypausebutton");
	FBPlayPause.ppControl.click(function () {
		FBPlayPause.gPPState = !FBPlayPause.gPPState;
		if (FBPlayPause.gPPState) {
			if (window["changeIxWorkingOn"]) {
				changeIxWorkingOn(FBPlayPause.thisCase());
			}
			$("#fbplaypausedisplay strong").text("#" + FBPlayPause.thisCase());
			$("#fbplaypausedisplay em").text("\"" + $("title").text() + "\"");
			FBPlayPause.ppControl.html(FBPlayPause.labels.pause);
		} else {
			if (window["changeIxWorkingOn"]) {
				changeIxWorkingOn(0);
			}
			FBPlayPause.ppControl.html(FBPlayPause.labels.play);
		}
	});

	if ($("#Menu_Working_On").length > 0 &&
			$("#Menu_Working_On").text().indexOf(FBPlayPause.thisCase()) > -1) {
		FBPlayPause.ppControl.html(FBPlayPause.labels.pause);
		$("#fbplaypausedisplay strong").text("#" + FBPlayPause.thisCase());
		$("#idWorkingOnRecent nobr a").each(function (item) {
			if ($(item).text().indexOf(FBPlayPause.thisCase()) > -1) {
				$("#fbplaypausedisplay em").text("\"" + $(item).text() + "\"");
			}
		});
		FBPlayPause.gPPState = true;
	} else {
		FBPlayPause.ppControl.html(FBPlayPause.labels.play);
		FBPlayPause.gPPState = false;
	}
};

$(window).on('BugViewChange', function (e, data) {
	"use strict";
	FBPlayPause.Init();
});

$(document).ready(function (e, data) {
	"use strict";
	FBPlayPause.Init();
});
