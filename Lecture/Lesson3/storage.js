// LocalStorage и SessionStorage представляют собой хранилище браузера, в которое мы по своему усмотрению можем записать и считать данные из любого места скрипта.
// В отличие от cookie, они никак не зависят от наличия сервера и хранить можно гораздо больше данных.
// Данные LocalStorage не удаляются при закрытии браузера и хранятся там, пока какое-то событие их не изменит или не очистит.
// При обновлении страницы данные сохранятся, но при закрытии браузера или вкладки удаляются. С этим и связано весьма ограниченное использование SessionStorage.

// Методы у LocalStorage и SessionStorage одинаковы:
// setItem(ключ, значение) – сохранить элемент с ключом «ключ» и данными «значение»
// getItem(ключ) – получить значение по ключу
// removeItem(ключ) – удалить пару «ключ» и «значение» по заданному ключу
// key(номер позиции) – получить ключ на заданной позиции
// length – количество элементов в хранилище
// clear() – очистка хранилища

// Пример 1: Установка и получение значения из LocalStorage
// Установка значения в LocalStorage
// localStorage.setItem('username', 'John');
// localStorage.setItem('username2', 'John2');

// // Получить значения из LocalStorage
// let storedUsername = localStorage.getItem('username');
// console.log('Значение из LocalStorage:', storedUsername);

// // Удаление значения из LocalStorage
// localStorage.removeItem('username')

// // Проверка, что значение удалено
// let storedUsername2 = localStorage.getItem('username');
// console.log('Значение из LocalStorage:', storedUsername2);

// // Очистка LocalStorage
// localStorage.clear();

// // Проверка, что LocalStorage пустой
// console.log('LocalStorage:', localStorage);

// /// Проверяем, есть ли значение счетчика в LocalStorage
// if (localStorage.getItem('counter')) {
//     // Если значение счётчика уже есть, увеличим его на 1
//     let counter = parseInt(localStorage.getItem('counter')) + 1;
//     localStorage.setItem('counter', counter.toString());
// } else {
//     // Если значение счётчика не существует, устанавливаем его в 1
//     localStorage.setItem('counter', '1');
// }

// // Выводим значение счетчика в консоль
// console.log('Счётчик посещений:', localStorage.getItem('counter'));

// localStorage.clear();

// Проверяем, есть ли значение счетчика в LocalStorage
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// Обновляем значение счетчика и сохраним его в LocalStorage
const updateCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString());
};

// Выводим текущее значение счётчика на страницу
document.querySelector('.counter').textContent = counter;

// Обработчик событий для кнопки "увеличить счетчик"
document.querySelector('.increment').addEventListener('click', () => {
    updateCounter();
    document.querySelector('.counter').textContent = counter;
});