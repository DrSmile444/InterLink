//Dmitro Vakulenko 
//11.23.17 22:23

function onstart() {
	document.getElementById("authorization").hidden = false;

	//debug menu without login
	//document.getElementById("webcam").style.display = "inline-block";document.getElementById("authorization").hidden = true;
}

var resolution = {x:640, y:480};
var bitrate = 2;
var fps = 20;
var ipv4 = "192.168.25.109";
var ipv6 = "ef23::a392:1aba:326:8ab2%7";
var life = Math.floor(Math.random()*100);
var time = new Date();
var admin = {name:"Vakulenko", pass:"Dmitro"};
var kitty = {name:"Vakulenko", pass:"Katrusya"};
var user = {name:"user", pass:"user"};

var contact_details = {surname:"Vakulenko", name:"Dmitro", patronymic:"Volodimirovich", phone_num:"068 132 23 11", email:"drsmile444@gmail.com"}

//Info about programm
function about() {
	alert("           WebApp\n The main goal of the program is to obtain information from the webcamera and control it.\n To log on as an administrator, use the Administrator account:\n   login:   "+admin.name+"\n   password:   "+admin.pass+"\n\n To log in as a user, use the Common account:\n   login:   "+user.name+"\n   password:   "+user.pass)
	alert(contact_details.surname+" "+contact_details.name+" "+contact_details.patronymic+"\n"+contact_details.phone_num+"\n"+contact_details.email+"\n\n2017, InterLink")
}

//Log in func
function showInterface(form) {
	if (form.user.value == admin.name && (form.pass.value == admin.pass || form.pass.value == kitty.pass)) {
		document.getElementById("authorization").hidden = true;
		document.getElementById("webcam").style.display = "inline-block";
	} else if (form.user.value == user.name && form.pass.value == user.pass) {
		document.getElementById("authorization").hidden = true;
		document.getElementById("webcam").style.display = "inline-block";
		document.getElementById("place").style.display = "none";
	}	else 
		alert("Wrong password or username!\n Check 'About'!");
}

//Info about webcam
function info() {
	alert("IPv4: "+ipv4+"\nIPv6: "+ipv6+"\nTime: " + time.getHours() +":"+ time.getMinutes()+"\nBattery charge: " + life + "%\nResolution: " + resolution.x + "x" + resolution.y+"\nBitrate: " + bitrate + "Mb/sec\nFPS: " + fps+"/sec");
}

//Change current webcam
function image (current, angle) {
	if (current == 1)
		document.getElementById("im").src="img/1.jpg";
	else if (current == 2)
		document.getElementById("im").src="img/2.jpg";
	else if (current == 3)
		document.getElementById("im").src="img/3.jpg";
}

//Scale up image
function im_inc() {
	var height_current = document.getElementById("im").height;
	if (height_current < 450)
		document.getElementById("im").height += 10;
}

//Scale down image
function im_dec() {
	var height_current = document.getElementById("im").height;
	if (height_current > 350)
		document.getElementById("im").height -= 10;
}
//getElementsByClassName()
//getElementById()
//getElementsByTagName()