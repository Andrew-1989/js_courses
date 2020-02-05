let option = {
	wight: 1024,
	height: 1024,
	name: "test"
};

console.log(option.name);
option.bool = false; // добавление свойства объектов
option.colors = {
	border: "black",
	bg: "red"
};

delete option.bool; // удаление свойства объектов

console.log(option);

for (let key in option) {
	console.log('Свойство ' + key + ' имеет значение ' + option[key]);
} // цикл для перечислений свойств объекта

console.log(Object.keys(option).length);


var arr = ["FIRST", 2, 3, "FOUR", 5];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
} // пречисление всех этементов массива

arr.forEach(function (item, i, mass) {
	console.log(i + ': ' + item + " (массив: " + mass + ')');
}); // пречисление всех этементов массива 2

console.log(arr);
arr.pop(); //удаление последний элемента массива
console.log(arr);
arr.push("5"); //добавление последнего элемента массива
console.log(arr);
arr.shift(); //удаляет первый элемента массива
console.log(arr);
arr.unshift(1); //добавление первый элемента массива
console.log(arr);

//////////////////
let mass = [1, 3, 5, 7, 9];

for (let key in mass) {
	console.log(key);
} // пречисление всех этементов массива 3
for (let key of mass) {
	console.log(key);
} // пречисление всех этементов массива 4

//////////////////
let ans = prompt("", ""),
	arr2 = [];

arr = ans.split(',');
console.log(arr); // преобразование введенного текста через "," в массив

//////////////////
let arr3 = ["zzz", "xxx", "ccc"],
	i = arr3.join(', ');

console.log(i); // преобразование массив в строку текста. 
//где эмененты массива будут через ", "

i = arr3.sort(); //сортировка элементов массива от А к Я (строки)

console.log(arr3);

i = arr3.sort(compareNam); //сортировка элементов массива с числами
function compareNam(a, b) {
	return a - b;
}		   