// Создать механизм для безопасного добавления метаданных к
// объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы,
// рейтинг, теги.
// 2. Реализовать функции addMetadata (добавление метаданных)
// и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на
// консоль.

// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data) {
	// Добавить код
	if (book[metadataType]) {
		book[metadataType].push(data);
	} else {
		book[metadataType] = [data];
	}
}

// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
	return book[metadataType];
}

// Создание объекта книги и добавление методанных
const book = {
	title: "1984",
	author: "George Orwell",
};

const reviewSymbol = Symbol("review");
const ratingSymbol = Symbol("rating");
const tagsSymbol = Symbol("tags");

addMetadata(book, reviewSymbol, "Отличная книга о дистопии!");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, "dystopia");

// Вывод методанных для книги
console.log(getMetadata(book, reviewSymbol)); // ["Отличная книга о дистопии!"]
console.log(getMetadata(book, ratingSymbol)); // [5]
console.log(getMetadata(book, tagsSymbol)); // ["dystopia"]
