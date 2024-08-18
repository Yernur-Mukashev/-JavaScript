// Разработать систему регистрации пользователей для веб-приложения.

// глобальный объект
const App = {};

// Защищенные свойства класса
class User {
    // Защищенное свойство _name
    #_name;

    constructor(name) {
        this.#_name = name;
    }
    getName() {
        return this.#_name;
    }
}

// Функция регистрации пользователя
App.registerUser = (name, email, password) => {
    try {
        // Проверка введенных данных
        if (!name || !email || !password) { // || не
            throw new Error('Не все данные были введены');
        }

        // Создание экземпляра класса User
        const user = new User(name);

        // Дополнительная оброботка и сохранение пользователя
        const userData = {
            name: user.getName(),
            email,
            password
        };
        // Здесь можно добавить логику сохранения пользователя в базу данных или отправку данных на сервер

        console.log('Пользователь успешно зарегистрирован:', user.getName());
        console.log('Дополнительные данные пользователя:', userData);
    } catch (error) {
        console.error('ошибка регистрации:', error.message);
    }
    finally {
        console.log('Завершение регистрации пользователя');
    }
}

// Вызов функции регистрации пользователя
App.registerUser('John Doe', 'john@example.com', 'password123');
App.registerUser('Alex Smith', '', 'password456');