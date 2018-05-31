let budgetMonth = prompt("Ваш бюджет на месяц?");
let name = prompt("Название вашего магазина?");

let mainList = {
  budget: budgetMonth,
  nameShop: name,
  shopGoods: [],
  employers: {},
  open: false
}

for (let i = 0; i < 5; i++) {
	
	let a = prompt("Какой тип товаров будем продавать?");

	if ((typeof(a)) === 'string' && (typeof(a)) != 0 && a != '' && a.length < 50) {
		console.log('Всё верно!');
		mainList.shopGoods[i] = a;
	} else {
		i--;
	}

}

/*let i = 5;
while(i) {

	let a = prompt("Какой тип товаров будем продавать?");

	if ((typeof(a)) === 'string' && (typeof(a)) != 0 && a != '' && a.length < 50) {
		console.log('Всё верно!');
		mainList.shopGoods.push(a);
	} else {
		i++;
	}
	i--;
}*/

/*function shopGood (x) {
	let i = x;

	if (i<=0) { return;};

	let a = prompt("Какой тип товаров будем продавать?");

	if ((typeof(a)) === 'string' && (typeof(a)) != 0 && a != '' && a.length < 50) {
		console.log('Всё верно!');
		mainList.shopGoods.push(a);
		shopGood(i-1);
	} else {
		console.log('Не верно!');
		shopGood(i);
	}
	
}

shopGood(5);*/

alert("Бюджет на 1 день составляет " + ((mainList.budget/30) ^ 0));

console.log(mainList);