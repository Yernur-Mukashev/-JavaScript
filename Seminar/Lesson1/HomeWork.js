// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = [
	{ title: "The Eminem Show", artist: "Eminem", year: "2002" },
	{ title: "Back in Black", artist: "AC/DC", year: "1980" },
	{ title: "Millennium", artist: "Backstreet Boys", year: "1999" },
	{ title: "Confessions", artist: "Usher", year: "2004" },
	{ title: "Dangerous", artist: "Michael Joseph Jackson", year: "1991" },
];

musicCollection[Symbol.iterator] = function () {
	return {
		current: 0,
		to: this.length,
		next() {
			return this.current < this.to
				? { done: false, value: musicCollection[this.current++] }
				: { done: true };
		},
	};
};

for (let music of musicCollection) {
	console.log(
		`${music.title} - ${music.artist} (${music.year})`
	);
}

////--------------Задание 2----------------////////
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

// Повара и их специализации
const cooks = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты']
]);

// Блюда и их повара
const dishes = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
]);

// Объекты клиентов
const clientAlexey = { name: 'Алексей' };
const clientMaria = { name: 'Мария' };
const clientIrina = { name: 'Ирина' };

// Заказы клиентов
const orders = new Map();
orders.set(clientAlexey, ['Пицца "Пепперони"', 'Тирамису']);
orders.set(clientMaria, ['Суши "Калифорния"', 'Пицца "Маргарита"']);
orders.set(clientIrina, ['Чизкейк']);

console.log("Заказ Алексея:", getOrdersByClient(clientAlexey));
console.log("Заказ Марии:", getOrdersByClient(clientMaria));
console.log("Заказ Ирины:", getOrdersByClient(clientIrina));

// Функция для отображения повара, который готовит определенное блюдо
function getCookByDish(dish) {
    return dishes.get(dish);
}

console.log("Пиццу готовит -", getCookByDish('Пицца "Маргарита"'));
console.log("Суши готовит -", getCookByDish('Суши "Филадельфия"'));
console.log("Десерт готовит -", getCookByDish('Чизкейк'));

// Функция для отображения заказов клиента
function getOrdersByClient(client) {
    return orders.get(client);
}




