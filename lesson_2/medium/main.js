let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

let a = "";

for (var i = 0; i <= week.length - 1; i++) {
	switch ( week[i]) {
		case "Четверг":
			a += "<i>" + week[i] + "</i><br>";
			break;
		case "Суббота":
			a += "<b>" + week[i] + "</b><br>";
			break;
		case "Воскресенье":
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