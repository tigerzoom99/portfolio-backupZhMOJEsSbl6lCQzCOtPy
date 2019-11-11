/*
	this is a script that displays the current time on Tyler Chilcote's portfolio main page

	Author:			Tyler Chilcote
	Date created:	9-26-2019

	file name: clock.js
*/

showClock();
setInterval("showClock()", 1000);

function showClock() {
	// finds current date and exact time
	var d = new Date();
	var hour = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();
	
	// replaces the text in the table
	document.getElementById("h").textContent = Math.floor(hour);
	document.getElementById("m").textContent = Math.floor(min);
	document.getElementById("s").textContent = Math.floor(sec);
}