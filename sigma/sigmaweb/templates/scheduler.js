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
	var table = document.getElementById("table");
	var startDropdown = document.getElementById("start_time");
	var endDropdown = document.getElementById("end_time");
	var start = startDropdown.options[startDropdown.selectedIndex].text;
	var end = endDropdown.options[endDropdown.selectedIndex].text;
	startstr = start.split(":");
	endstr = end.split(":");
	var starttime = parseInt(startstr[0]);
	var endtime = parseInt(endstr[0]);
	var numHours = endtime - starttime;
	for (i = 0; i <= numHours; i++)
	{
		var row = table.insertRow(i+1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		//cell2.setAttribute("ondrop", "drop(event)");
		//cell2.setAttribute("ondragover","allowDrop(event)";
		var cell3 = row.insertCell(2);
		cell1.innerHTML = starttime+i
	};
	/*document.getElementById("start_timeslot").innerHTML = starttime;
	document.getElementById("end_timeslot").innerHTML = endtime;*/
};