// Задание 3 (тайминг 15 минут)
// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными
// массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит
// Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать
// с ними.

const divEl = Array.from(document.querySelector('div'));

// const activeDivs = divEl.filter(element => element.dataset.active);
const activeDivs = divEl.filter(element => element.hasAttribute('data-active'));


activeDivs.forEach(element => {
    console.log(element);
})