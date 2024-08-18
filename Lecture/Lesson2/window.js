// Глобальный объект – это объект, хранящий функции и переменные, которые могут быть доступны в любой части программы.
// По умолчанию – это встроенные объекты. Например, в браузере это объект window, а в Node.js – это объект global.
// Обратиться к объекту window можно как напрямую, так и используя его свойства self и frames

// Работа с window
// console.log(window);
// console.log(window.window);
// console.log(self);
// console.log(frames);
// console.log(globalThis);
// console.log(globalThis === window);

// const newWindow = window.open('https://www.example.com', '_blank'); // Открывает новое окно браузера
// window.close(); // Закрывает текущее окно
// window.resizeTo(800, 600); // Изменяет размер окна на 800х600 пикселей
// window.location.href = 'https://www.example.com'; // Перенаправляет на другую страницу
// const windowWidth = window.innerWidth; // Получает ширину окна

// // Работа с window.window
// const isWindowOpen = window.window.open('https://www.example.com') !== null; // Проверяет открыто ли окно
// const windowHeight = window.window.innerHeight; // Получает высоту окна
// window.window.location.href = 'https://www.example.com'; // Перенаправляет на другую страницу во вложенном окне

// // Работа с self
// const newWindowSelf = self.open('https://www.example.com', '_blank'); // Открывает новое окно браузера с использованием self
// self.close(); // Закрывает текущее окно с использованием self
// self.resizeTo(800, 600); // Изменяет размер окна на 800х600 пикселей с использованием self
// self.location.href = 'https://www.example.com'; // Перенаправляет на другую страницу с использованием self

// // Работа с frames
// const frame = frames[0]; // Получает ссылку на фрейм по индексу
// frames[0].location.href = 'https://www.example.com'; // Перенаправляет на другую страницу с использованием во фрейме
// const frameCount = frames.length; // Получает количество фреймов на странице
// const parentWindow = window.parent; // Получает доступ к родительскому окну из фрейма

// // Работа с globalThis
// const globalObject = globalThis; // Получает глобальный объект
// globalThis.newVariable = 'Hello world!'; // Определяет новую глобальную переменную
// const globalVariable = globalThis.window === globalThis.self ? 'Window' : 'Worker'; // Получает доступ глобальным переменным из разных сред исполнения

// // var
// var glob = 5;
// // // function
// function increment(val) {
//     return val+1;
// }
// console.log(window.glob); // 5
// console.log(window.increment); // ƒ increment(val) {return val+1;}

// // // alert
// console.log(alert() === window.alert()); // true
// alert('Можно так');
// window.alert('А можно и так');

// // const let
// const local = 5;
// let localFunc = () => 'localFunc';
// console.log(local); // 5
// console.log(localFunc()); // localFunc
// console.log(window.local); // undefined
// console.log(window.localFunc); // undefined

// // Из прошлой части
console.log(window.Symbol.for); // ƒ for() { [native code] }
console.log(window.Symbol.iterator); // Symbol(Symbol.iterator)
console.log(window.Array.from); // ƒ from() { [native code] }