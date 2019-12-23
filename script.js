var money = +prompt("Ваш бюджет на месяц?", ''), // '+' преобразует тип даных в Number
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

/*
Есть переменная let a = 'first' и let b = 'second'; Обе содержат строки. И есть пустой объект let obj = {};
Этот объект мы можем заполнить данными из переменных a и b. Для этого воспользуемся одним из синтаксисов:
obj.a = b;
или
obj[a] = b;
*/

for (var i = 0; i < 2; i++) {
	var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	if ((typeof (a)) === 'string' && // тип переменной равен string
		//(typeof (a)) === !null && // тип переменной НЕ равен NULL
		//(typeof (b)) === !null &&
		a != '' &&
		b != '' && // значение переменной не пустое
		a.length < 50) { // длина введенного значения < 50 символов
		console.log("done");
		appData.expenses[a] = b;
		console.log(appData.expenses[a]);
	} else {
		i--;
	}

}

appData.moneyPerDay = appData.budget / 30; // создание нового свойства объекта 

alert("Ежедневный бюджет" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Error");
}