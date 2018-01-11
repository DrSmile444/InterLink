var hours = document.getElementById("time");

show_time();

function show_time() {	 
	var time = new Date();
	var time_sec = time.getSeconds();
	var time_min = time.getMinutes();
	var time_hours = time.getHours();
	var time_wr = ((time_hours<10)?"0":"") + time_hours;
	time_wr += ":";
	time_wr += ((time_min<10)?"0":"") + time_min;
	time_wr += ":";
	time_wr += ((time_sec<10)?"0":"") + time_sec;

	hours.innerHTML = time_wr;
}

setInterval("show_time();",2000);