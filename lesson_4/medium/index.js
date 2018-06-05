function getFriendlyNumbers(start, end) {
	if (typeof(start) == "string" || typeof(end) == "string" || isNaN(start) || isNaN(start) || isNaN(end) || start > end || start < 0 || start/Math.floor(start) != 1 || end/Math.floor(end) != 1) {
		return false;
	} else {
		var arr = [];
		for (let a = start; a <= end; a++) {

			let s = 0;
			for (let i = 1; i < a; i++) { //находим все делители числа а исключая само число		
				if (a%i == 0) {
					s+=i; //находим сумму делителей числа а
				}
			}

			let s1 = 0;
			for (let b = 1; b < s-1; b++) {
				if (s%b == 0) {
					s1+=b;
				}
			}
			if ((s1 == a) && (s != a) && (a < s)) {
				 arr.push([a,s]); //выводим значения
			}
		}
	return arr;
	}
  
}
module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}