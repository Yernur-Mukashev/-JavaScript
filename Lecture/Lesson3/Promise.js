// Промис (англ. Promise)— это обещание, что мы сейчас запустим операцию, и она выполнится когда-то в будущем
// Resolve вызывается при успешном завершении. Результат — value
// Reject вызывается при возникновении ошибки. Результат — error

// let generateRandomNumber = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const randomNumber = Math.floor(Math.random() * 10) + 1;
// 			if (randomNumber) {
// 				resolve(randomNumber);
// 			} else {
// 				reject("Ошибка генерации случайного числа");
// 			}
// 		}, 1000);
// 	});
// };

// generateRandomNumber()
// 	.then((number) => {
// 		console.log("Сгенерировано случайное число:", number);
// 	})
// 	.catch((error) => {
// 		console.log("Ошибка:", error);
// 	});

// Напишите функцию fetchData(url), которая принимает URL в качестве аргумента и возвращает Promise, выполняющий запрос данных по указанному URL. Если запрос завершается успешно, Promise должен резолвить полученные данные. В случае ошибки запроса, Promise должен быть отклонен с сообщением об ошибке.

// let fetchData = (url) => {
// 	return new Promise((resolve, reject) => {
// 		fetch(url)
// 			.then((response) => response.json())
// 			.then((data) => resolve(data))
// 			.catch((error) => reject("Ошибка загрузки данных"));
// 	});
// };

// //https://randombig.cat/roar.json
// fetchData("https://randombig.cat/roar.json")
// 	.then((data) => {
// 		console.log("Получены данные:", data);
// 	})
// 	.catch((error) => {
// 		console.log("Ошибка:", error);
// 	});

//Напишите функцию checkIfFileExists(file), которая принимает имя файла в качестве аргумента и возвращает Promise, выполняющий через 2 секунды. Promise должен резолвиться, если файл существует, и отклониться, если файла нет.

// let checkIfFileExists = (file) => {};

// let checkFileExists = (file) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const fileExists = checkIfFileExists(file);
// 			if (fileExists) {
// 				resolve("Файл существует");
// 			} else {
// 				reject("Файл не существует");
// 			}
// 		}, 2000);
// 	});
// };

// checkFileExists("example.txt")
// 	.then((message) => {
// 		console.log(message);
// 	})
// 	.catch((error) => {
// 		console.log("Ошибка:", error);
// 	});

// then Напишите функцию calculateSum(a, b), которая принимает два числа в качестве аргументов и возвращает Promise. Promise должен быть выполнен суммой двух чмсел.
// let calculateSum = (a, b) => {
// 	return new Promise((resolve, reject) => {
// 		const sum = a + b;
// 		resolve(sum);
// 	});
// };

// calculateSum(3, 7).then((result) => {
// 	console.log("Сумма чмсел:", result);
// });

// Напишите функцию divideNumbers(a, b), которая принимает два числа в качестве аргументов и возвращает Promise. Promise должен быть выполнен деление первого числа на второе. Если второе чмсло равно 0, Promise должен быть отклонен с сообщением о невозможности деления на 0.
// let divideNumbers = (a, b) => {
// 	return new Promise((resolve, reject) => {
// 		if (b === 0) {
// 			reject('Невозможно делить на 0')
// 		} else {
// 			resolve(a / b);
// 		}
// 	});
// };

// divideNumbers(10, 2).then((result) => {
// 	console.log('Результат деления:', result);
// }).catch((error) => {
// 	console.log('Ошибка:', error);
// });

// Цепочка промисов
// new Promise(function (resolve) {
// 	setTimeout(() => resolve(1), 1000);
// })
// 	.then(function (result) {
// 		console.log(result);
// 		return new Promise((resolve) => {
// 			setTimeout(() => resolve(result * 2), 1000);
// 		});
// 	})
// 	.then(function (result) {
// 		console.log(result);
// 		return new Promise((resolve) => {
// 			setTimeout(() => resolve(result * 2), 1000);
// 		});
// 	})
// 	.then(function (result) {
// 		console.log(result);
// 	});

// // finally --------------

// let processData = (data) => {};

// let performOperation = (data) => {
// 	return new Promise((resolve, reject) => {
// 		let result = processData(data);
// 		if (result) {
// 			resolve(result);
// 		} else {
// 			reject("Ошибка операции");
// 		}
// 	}).finally(() => {
// 		console.log("Операция завершена");
// 	});
// };

// performOperation("example")
// 	.then((result) => {
// 		console.log("Результат операции:", result);
// 	})
// 	.catch((error) => {
// 		console.log("Ошибка:", error);
// 	});

// // Promise.all
// Promise.all([
// 	new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
// 	new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
// 	new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ])
// 	.then(console.log)
// 	.catch(console.log);


// Вы разрабатываете приложение, которое отправляет запросы к разным сереверам и хотите определеить, какой сервер отвечает быстрее. Напишите функцию checkServerResponse(urls), которая принимает массив URL-адресов в качестве аргумента и возвращает Promise. Promise должен быть выполнен с URL-адресом сервера, который первым ответил на запрос.

let checkServerResponse = (urls) => {
	let promises = urls.map((url) => fetch(url));
	return Promise.race(promises).then((response) => {
		return response.url;
	});
};

let urls = [
	'https://api.example.com/server1',
	'https://api.example.com/server2',
	'https://api.example.com/server3',
];

checkServerResponse(urls).then((fastestServer) => {
	console.log('Самый быстрый сервер:', fastestServer);
}).catch((error) => {
	console.log('Ошибка:', error);
});

