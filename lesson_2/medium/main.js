/*let week = ["Воскресенье","Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

let a = ""; //куда формируется строка для вывода

for (var i = 0; i <= week.length - 1; i++) {
	switch (i) {
		case ((new Date().getDay() && 0) || (new Date().getDay() && 6)):
			a += "<i><b>" + week[i] + "</b></i><br>";
			break;
		case new Date().getDay():
			a += "<i>" + week[i] + "</i><br>";
			break;
		case 6 || 0:
			a += "<b>" + week[i] + "</b><br>";
			break;	
		default:
			a += week[i] + "<br>";
			break;
	}
}*/

let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота","Воскресенье"];
let dat = new Date().getDay();
let a = ""; //куда формируется строка для вывода

for (var i = 0; i <= week.length - 1; i++) {
	switch (i+1) {
		case ((dat == 0) && 7) || (dat && 6):
			a += "<i><b>" + week[i] + "</b></i><br>";
			break;
		case dat:
			a += "<i>" + week[i] + "</i><br>";
			break;
		case 6 || 7:
			a += "<b>" + week[i] + "</b><br>";
			break;	
		default:
			a += week[i] + "<br>";
			break;
	}
}

document.body.innerHTML = a;

//второе задание

let arr = ["345852","7552","4668422","3452","755552","46682","986555"];

let stringConsole = "";

for (var i = 0; i <= arr.length - 1; i++) {
	if( arr[i][0] == 3 || arr[i][0] == 7) {
		stringConsole += arr[i] + " ";
	}
}

console.log(stringConsole);