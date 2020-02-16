var money, time;

function start() {
	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", ''); // '+' преобразует тип даных в Number
	}
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
}

start(); 

//test

var appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

/*
Есть переменная let a = 'first' и let b = 'second'; Обе содержат строки. И есть пустой объект let obj = {};
Этот объект мы можем заполнить данными из переменных a и b. Для этого воспользуемся одним из синтаксисов:
obj.a = b;
или
obj[a] = b;
*/

function chooseExpenses() {
	for (var i = 0; i < 2; i++) {
		var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
		if ((typeof (a)) === 'string' && // тип переменной равен string
			(typeof (b)) !== null && // тип переменной НЕ равен NULL
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
}
chooseExpenses();

function chooseOptExpenses() {
	for (var i = 0; i < 3; i++) {
		var a = alert("Статья необязательных расходов?"),
			b = prompt("Во сколько обойдется?", '');
			a=i+1;
			console.log("done");
			appData.optionalExpenses[a] = b;
			console.log(appData.optionalExpenses[a]);
	}
}
chooseOptExpenses();





function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed(1); // создание нового свойства объекта 
	// .toFixed(1) возвращает СТРОКОВОЕ значение с одним знаком после запятой.
	alert("Ежедневный бюджет" + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Error");
	}
}
detectLevel();

function checkSavings() {
	if (appData.savings == true) {
		var save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");

		appData.monthIncome = save / 100 / 12 * percent; // создание нового параметра объекта 
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}

checkSavings();