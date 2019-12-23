let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;  
appData.expenses.a3 = a4;
/*
Есть переменная let a = 'first' и let b = 'second'; Обе содержат строки. И есть пустой объект let obj = {};
Этот объект мы можем заполнить данными из переменных a и b. Для этого воспользуемся одним из синтаксисов:
obj.a = b;
или
obj[a] = b;
*/

alert(appData.budget / 30);