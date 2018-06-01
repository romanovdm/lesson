let money,
	name,
	time,
	price

function start() {
	money = prompt("Ваш бюджет на месяц?");

	while(isNaN(money) || money == '' || money == null){
		money = prompt("Ваш бюджет на месяц?");
	}

	name = prompt("Название вашего магазина?").toUpperCase();
	time = 21;
}

//start();

let mainList = {
  budget: money,
  nameShop: name,
  shopGoods: [],
  employers: {},
  open: false,
  discound: false
}

function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		
		let a = prompt("Какой тип товаров будем продавать?");

		if ((typeof(a)) === 'string' && (typeof(a)) != 0 && a != '' && a.length < 50 && a != null) {
			console.log('Всё верно!');
			mainList.shopGoods[i] = a;
		} else {
			i--;
		}

	}
}

//chooseGoods();

function workTime(time) {	
	if (time < 0 ) {
		console.log('Такого не может быть');
		} else if (time > 8 && time < 20) {
				console.log('Время работать!')
			} else if (time < 24) {
				console.log('Уже слишком позно')
				} else {
					console.log('В сутках только 24 часа!!!')
				}
}

//workTime(18);	

function dayLimit() {
	alert("Бюджет на 1 день составляет " + ((mainList.budget/30) ^ 0));		
}

//dayLimit();


//==========================================================
//применить скидку
price = 100;

addDiscound = function() {
	if (mainList.discound == true) {
		return price *= 0.8;
	} else { return price; }
}
price = addDiscound();


//добавить продавца
function addEmplose() {
	for (var i = 0; i < 3; i++) {
		let a = prompt("Введите имя продавца");

		if ((typeof(a)) === 'string' && (typeof(a)) != 0 && a != '' && a.length < 50 && a != null) {
			console.log('Всё верно!');
			mainList.employers[i] = a;
		} else {
			i--;
		}
	}
}



console.log(mainList);