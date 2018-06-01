let str = "урок-3-был слишком легким";

str = str[0].toUpperCase() + str.substring(1); //первое задание 

 //==================================================
let target = '-'; // цель поиска
let otvet = ""; //временно храним результат здесь
var pos = 0;
while (true) {
  var foundPos = str.indexOf(target, pos);
  if (foundPos == -1) { 
  	otvet += str.substring(pos);// добавляем оставшиеся символы
  	break;
  }

  otvet += (str.substring(pos,foundPos) + " "); // добавляем к позиции 
  pos = foundPos + 1; // продолжить поиск со следующей
}
str = otvet;
console.log(str);

//конец 2 задания

let newLength = str.indexOf("легким", 0); //узнаём какая длинна строки получится
str = str.substring(0,newLength);
str = str.trim();//убираем пробелы если есть в конце, нам же нужны последние 2 буквы, а пробел не буква
str = str.substring(0,str.length-2) + "о" + "о"; // выводим строку с начала кроме последних 2х символов и добавляем 2 "о" 
document.write(str);

//конец 3 задания

let arr = [20, 33, 1, 'Человек', 2, 3];
let itog = 0;
for (var i = 0; i < arr.length; i++) {
	if (typeof(arr[i]) == "number") {
		itog += arr[i] ** 3;
	}
}
console.log(Math.sqrt(itog)); 

// конец 4 задания

function clipTo50(data1) {
	if (typeof(data1) !== "string" || data1 == "") {
		alert("Неверные данные");
		return;
	} else {
		data1 = data1.trim();
		if (data1.length > 50) {
			
			data1 = data1.substr(0,50); //выводим первые 50 символов
			data1 += '...';
		}
		return data1;
	}
}


console.log(clipTo50(123));
console.log(clipTo50("fghjkl"));
console.log(clipTo50(''));
console.log(clipTo50('ffffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssssssssssssssssssssss'));