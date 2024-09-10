document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    // Функция для показа страницы регистрации
    function showRegisterPage() {
        container.innerHTML = `
            <h2>Регистрация</h2>
            <input type="text" id="register-username" placeholder="Введите логин" required>
            <input type="password" id="register-password" placeholder="Введите пароль" required>
            <button id="register-button">Зарегистрироваться</button>
        `;

        // Привязка обработчика события к кнопке регистрации
        document.getElementById('register-button').addEventListener('click', registerUser);
    }

    // Функция для регистрации пользователя
    function registerUser() {
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        if (username && password) {
            // Сохранение логина и пароля в LocalStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            // Переход на страницу входа
            showLoginPage();
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
    }

    // Функция для показа страницы входа
    function showLoginPage() {
        container.innerHTML = `
            <h2>Вход</h2>
            <input type="text" id="login-username" placeholder="Введите логин" required>
            <input type="password" id="login-password" placeholder="Введите пароль" required>
            <button id="login-button">Войти</button>
            <div id="error-message" class="error"></div>
        `;

        // Привязка обработчика события к кнопке входа
        document.getElementById('login-button').addEventListener('click', loginUser);
    }

    // Функция для входа пользователя
    function loginUser() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');
        const errorMessage = document.getElementById('error-message');

        // Проверка введенных данных с сохраненными данными
        if (username === savedUsername && password === savedPassword) {
            // Переход на страницу приветствия
            showWelcomePage();
        } else {
            // Вывод сообщения об ошибке
            errorMessage.textContent = 'Неверный логин или пароль. Попробуйте еще раз.';
        }
    }

    // Функция для показа страницы приветствия
    function showWelcomePage() {
        container.innerHTML = `
            <h2>Добро пожаловать!</h2>
            <p>Вы вошли в систему как <strong>${localStorage.getItem('username')}</strong>.</p>
            <button id="logout-button">Выйти</button>
        `;

        // Привязка обработчика события к кнопке выхода
        document.getElementById('logout-button').addEventListener('click', logoutUser);
    }

    // Функция для выхода пользователя
    function logoutUser() {
        // Переход на страницу входа
        showLoginPage();
    }

    // Начальная загрузка страницы — показываем страницу регистрации
    showRegisterPage();
});
