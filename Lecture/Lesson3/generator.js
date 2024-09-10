// Генератор для генерации последовательности чисел
function* numberGenerator() {
    let number = 1;

    while (true) {
        yield number;
        number++;
    }
}

// Создаём экземпляр генератора определяется
const generator = numberGenerator();

// Генерируем итератор, который будет возвращать следующее число при каждом вызове next()
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);