var num = 33721;
	multiplier = 1; //переменная для произведения

num = String(num);
var i = num.length;


while (i) {
  multiplier = multiplier * num[i-1];
  i--;
}

 var kvest =multiplier ** 3
 kvest = String(kvest);

alert(kvest[0] + kvest[1]);