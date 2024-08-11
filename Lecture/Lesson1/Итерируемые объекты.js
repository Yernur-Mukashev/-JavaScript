// const string = "Hello";
// console.log(string[2]); // l
// console.log(string.length); // 5

// for (let str of string) {
// 	console.log(str);
// }
// // // все работает как с цикламиБ Это также просто работает и с другими символами, даже нестандартными, имеющими свои ASCII-коды

// ////-------------------------------////
// // Мы хотим из него сделать последовательность с таким образом: for(let number of range), где на выходе получим последовательность от 1 до 17.

let range = {
	from: 1,
	to: 11,
};

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function () {
	// ...она возвращает объект интератора:
	// 2. Далее, for(..of..) работает только с этим итератором, запрашивая у него новые значения
	return {
		current: this.from,
		last: this.to,

		// 3. next() вызывается на каждой итерации цикла for(..of..)
		next() {
			//4. он должен вернуть значение в виде объекта {done:.., value:...}
			return this.current <= this.last
				? { done: false, value: this.current++ }
				: { done: true };
		},
	};
};
// // теперь работает!
for (let number of range) {
    console.log(number);
}

///-------------------//////
// Можно было и вместе, но тогда this будет общий
// let range = {
//     from: 1,
//     to: 17,
//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },
//     next() {
//         return this.current <= this.to
//         ? { done: false, value: this.current++ }
//         : { done: true };
//     }
// };
// for (let number of range) {
//     console.log(number);
// }

///----------------------Array.from---------------
let pseudo = {
    0: 'first',
    1: 'second',
    2: 'new elem',
    length: 3
}
let array = Array.from(pseudo);
console.log(array);
console.log(array.pop());

// // Даже со строкой работает
let pseudo2 = 'It`s Array Like!';
let array2 = Array.from(pseudo2);
console.log(array2);