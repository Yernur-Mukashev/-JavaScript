// // ------------ Задание 1 -----------------.///
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
	#books;

	constructor(initialBooks = []) {
		this.#books = [];
		initialBooks.forEach((book) => {
			if (this.#books.includes(book)) {
				throw new Error(`Ошибка: Книга "${book}" уже существует в списке.`);
			}
			this.#books.push(book);
		});
	}

	// Возвращает текущий список книг.
	get allBooks() {
		return this.#books;
	}

	// Добавляет книгу с указанным названием в список.
	addBook(title) {
		if (this.#books.includes(title)) {
			throw new Error(`Ошибка: Книга "${title}" уже существует в библиотеке.`);
		}
		this.#books.push(title);
	}

	// Удаляет книгу с указанным названием из списка.
	removeBook(title) {
		const bookIndex = this.#books.indexOf(title);
		if (bookIndex === -1) {
			throw new Error(`Ошибка: Книга "${title}" не найдена в библиотеке.`);
		}
		this.#books.splice(bookIndex, 1);
	}

	// Проверяет наличие книги с указанным названием в списке.
	hasBook(title) {
		return this.#books.includes(title);
	}
}

const library = new Library([
	"Изучаем программирование на JavaScript",
	"JavaScript для детей",
]);

console.log(library.allBooks);
library.addBook("Javascript и jQuery.");
console.log(library.allBooks);

// library.addBook("JavaScript для детей");
// console.log(library.allBooks);

library.removeBook("JavaScript для детей");
console.log(library.allBooks);
console.log(library.hasBook("JavaScript для детей"));

// // ------- Задание 2 ----------// //
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// const initialData = [
// {
// product: "Apple iPhone 13",
// reviews: [
// {
// id: "1",
// text: "Отличный телефон! Батарея держится долго.",
// },
// {
// id: "2",
// text: "Камера супер, фото выглядят просто потрясающе.",
// },
// ],
// },
// {
// product: "Samsung Galaxy Z Fold 3",
// reviews: [
// {
// id: "3",
// text: "Интересный дизайн, но дорогой.",
// },
// ],
// },
// {
// product: "Sony PlayStation 5",
// reviews: [
// {
// id: "4",
// text: "Люблю играть на PS5, графика на высоте.",
// },
// ],
// },
// ];
// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

const initialData = [
	{
		product: "Apple iPhone 13",
		reviews: [
			{
				id: "1",
				text: "Отличный телефон! Батарея держится долго.",
			},
			{
				id: "2",
				text: "Камера супер, фото выглядят просто потрясающе.",
			},
		],
	},
	{
		product: "Samsung Galaxy Z Fold 3",
		reviews: [
			{
				id: "3",
				text: "Интересный дизайн, но дорогой.",
			},
		],
	},
	{
		product: "Sony PlayStation 5",
		reviews: [
			{
				id: "4",
				text: "Люблю играть на PS5, графика на высоте. И управление супер, этот джойстик просто имба.",
			},
		],
	},
];

const reviewContainer = document.getElementById("reviewContainer");
const submitReviewButton = document.getElementById("submitReview");
const reviewTextInput = document.getElementById("reviewText");

// Функция для добавления отзыва
function addReview(text) {
	if (text.length < 50 || text.length > 500) {
		throw new Error("Ошибка: Отзыв должен содержать от 50 до 500 символов.");
	}

	const reviewDiv = document.createElement("div");
	reviewDiv.classList.add("review");
	reviewDiv.textContent = text;

	reviewContainer.appendChild(reviewDiv);
}

// Обработка события клика по кнопке "Отправить отзыв"
submitReviewButton.addEventListener("click", () => {
	try {
		const reviewText = reviewTextInput.value.trim();
		addReview(reviewText);
		reviewTextInput.value = ""; // Очистка текстового поля после успешного добавления отзыва
	} catch (error) {
		alert(error.message);
	}
});

function loadInitialData(data) {
	data.forEach((product) => {
		product.reviews.forEach((review) => {
			try {
				addReview(review.text);
			} catch (error) {
				console.error(error.message);
			}
		});
	});
}

loadInitialData(initialData);
