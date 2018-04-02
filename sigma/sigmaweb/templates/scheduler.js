function allowDrop(ev) {
    ev.preventDefault();
};

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
;}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
};

function fillTime(){
	var start = document.getElementById("start_time");
	var end = document.getElementById("end_time");
	document.getElementById("start_timeslot").innerHTML = start.options[start.selectedIndex].text;
	document.getElementById("end_timeslot").innerHTML = end.options[end.selectedIndex].text;
};