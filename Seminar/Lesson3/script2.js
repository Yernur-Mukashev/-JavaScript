// Задание 2 (тайминг 25 минут)
// Создать интерактивную веб-страницу, где пользователи могут вводить текст, сохранять его в localStorage,
// а затем загружать или удалять сохраненные данные.
// Разработка Интерфейса:
// Создать HTML-страницу с:
// ● Одним текстовым полем для ввода данных пользователем.
// ● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
// ● Местом для отображения сохраненного текста.
// Программирование Логики на JavaScript:
// 1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage.
// 2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице.
// 3. При нажатии на "Очистить", сохраненный текст должен быть удален из localStorage, и соответствующее
// сообщение отображается на странице.



// Функция для сохранения текста в localStorage
document.querySelector(".save-btn").addEventListener("click", () => {
	const textInput = document.querySelector(".text-input").value;
	if (textInput.trim() === "") {
		alert("Пожалуйста, введите текст для сохранения.");
		return;
	}
	localStorage.setItem("savedText", textInput);
	alert("Текст сохранен.");
});

// Функция для загрузки текста из localStorage
document.querySelector(".load-btn").addEventListener("click", () => {
	const savedText = localStorage.getItem("savedText");
	if (savedText) {
		document.querySelector(
			".saved-text"
		).innerText = `Сохраненный текст: ${savedText}`;
	} else {
		document.querySelector(".saved-text").innerText =
			"Нет сохраненного текста.";
	}
});

// Функция для удаления текста из localStorage
document.querySelector(".clear-btn").addEventListener("click", clearText);
function clearText() {
	localStorage.removeItem("savedText");
	document.querySelector(".saved-text").innerText =
		"Сохраненный текст был удален.";
	alert("Сохраненный текст удален.");
}

