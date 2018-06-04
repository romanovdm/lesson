let money,
	name,
	time,
	price

function start() {
	money = prompt("Ваш бюджет на месяц?", "");

	while(isNaN(money) || money == '' || money == null){
		money = prompt("Ваш бюджет на месяц?", "");
	}

	name = prompt("Название вашего магазина?", "").toUpperCase();
	time = 21;
}

//start();

let mainList = {
  budget: money,
  nameShop: name,
  shopGoods: [],
  employers: {},
  open: false,
  discound: false,
  shopItems: [],
  chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
			
			let a = prompt("Какой тип товаров будем продавать?", "");

			if ((typeof(a)) === 'string' && (typeof(a)) != 0 && a != '' && a.length < 50 && a != null) {
				console.log('Всё верно!');
				mainList.shopGoods[i] = a;
			} else {
				i--;
			}

		}
		},
  workTime: function workTime(time) {	
		if (time < 0 ) {
			console.log('Такого не может быть');
			} else if (time > 8 && time < 20) {
					console.log('Время работать!');
					mainList.open = true;
				} else if (time < 24) {
					console.log('Уже слишком позно')
					} else {
						console.log('В сутках только 24 часа!!!')
					}
	},
  dayBudget: function dayBudget() {
		alert("Бюджет на 1 день составляет " + ((mainList.budget/30) ^ 0));		
	},
  makeDiscound: function makeDiscound() {
	if (mainList.discound == true) {
		price *= 0.8;
	}
  },
  addEmplose: function addEmplose() {
	for (var i = 0; i < 4; i++) {
		let a = prompt("Введите имя продавца", "");

		if ((typeof(a)) === 'string' && (typeof(a)) != 0 && a != '' && a.length < 50 && a != null) {
			console.log('Всё верно!');
			mainList.employers[i] = a;
		} else {
			i--;
		}
	}
  },
  chooseShopItem: function chooseShopItem() {
  	let items = prompt("Перечислите через запятую товары", "");

  	while((typeof(items)) != 'string' || items === '' || items === null){
		items = prompt("Перечислите через запятую товары", "");
	}

  	this.shopItems = items.split(",");

  	let a = prompt("Подождите, ещё", "");

  	while((typeof(a)) != 'string' || a === '' || a === null){
		a = prompt("Подождите, ещё", "");
	}
  	this.shopItems.push(a);
  	this.shopItems.sort();
  },
  printShopItem: function printShopItem() {
  	document.write("У нас вы можете купить");

  	this.shopItems.forEach( function(element, index) {
  		document.write(" " + (index+1) + " - " + element);
  	});
  }
}



let consoleStr = console.log("Наш магазин включает в себя");
for (let key in mainList) {
	console.log(key + " " + mainList[key]);
}

console.log(mainList);