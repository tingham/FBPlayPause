var fs = require("fs"),
	css = fs.readFileSync("./fbplaypause.css"),
	js = fs.readFileSync("./fbplaypause.js"),
	data;

data = [
	"name:          FBPlayPause",
	"description:   Adds a play/pause button. (https://github.com/tingham/FBPlayPause)",
	"author:        Thomas Ingham",
	"version:       1.0.0.0",
	"",
	"js:",
	"",
	js,
	"",
	"css:",
	"",
	css,
	""
].join("\n");

fs.writeFileSync("./compiled.cstm", data);
