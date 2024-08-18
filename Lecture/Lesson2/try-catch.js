try {
    undefined = 1;
} catch {
    console.log('Что-то произошло');
}
finally {
    console.log('Отличный результат');
}

// Пример: Работы с делением чисел
function divideNumbers(a, b) {
    try {
        const result = a / b; // Попытка выполнить деление
        if (isNaN(result)) {
            throw new Error('Результат не является чмслом')
        }
        console.log('Результат деления:', result);
    } catch (error) {
        console.error('Ошибка деления:', error);
    }
    finally {
        console.log('Операция деления завершена');
    }
}

// divideNumbers(10, 2) // Пример корректного деления
// divideNumbers(10, 0) // Пример деления на ноль

//---///-----///
// Пользовательские ошибки
// Создание пользовательской ошибки
class CustomError extends Error {
    constructor(message) {
        super(message); // Вызов конструктора родительского класса (Error) с переданным сообщением
        this.name = 'CustomError'; // Установка имени ошибки
    }
}

function validateNumber(Value) {
    if (typeof Value != 'number') {
        throw new CustomError('Значение должно быть числом'); // Выбрасывание пользовательской ошибки с сообщением
    }
    console.log('Валидация успешна');
}

try {
    validateNumber('23'); // Проверка на число с передачей строки вместо числа
} catch (error) {
    if (error instanceof CustomError) { // Проверка, является ли ошибка экземпляром пользовательской ошибки
        console.error('Ошибка:', error.message); // Вывод сообщения об ошибке
        console.log('Тип ошибки:', error.name); // Вывод имени ошибки
    } else {
        console.error('Произошла ошибка:', error); // Вывод сообщения об ошибке по умолчанию
    }
}