// Задание 3 (тайминг 35 минут)
// Создать интерактивную веб-страницу, где пользователи могут выбирать различные элементы мебели
// (например, столы, стулья, диваны) и их параметры (материал, цвет, стиль). Выбранные параметры должны
// быть сохранены так, чтобы при повторном посещении сайта пользователь мог видеть свой ранее собранный
// комплект мебели.
// 1. Пользователи могут выбирать из различных типов мебели (например, столы, стулья, диваны).
// 2. Для каждого типа мебели доступен выбор параметров (цвет, материал, стиль).
// 3. Предусмотреть кнопку "Сохранить комплект", при нажатии на которую текущий выбор пользователя
// сохраняется в localStorage.
// 4. При повторном посещении сайта автоматически загружать сохраненные параметры из localStorage и
// отображать ранее созданный комплект.
// 5. Предусмотреть возможность для пользователя очистить сохраненные настройки через специальную
// кнопку.
// 6. После нажатия на кнопку "Сохранить" на странице должен отображаться выбранный комплект.
// 7. При нажатии на кнопку "Очистить" должно появляться сообщение о том, что выбор не сделан и
// предыдущие настройки удалены.

document.addEventListener('DOMContentLoaded', () => {
    const tableSelect = document.getElementById('table');
    const chairSelect = document.getElementById('chair');
    const sofaSelect = document.getElementById('sofa');
    const saveButton = document.getElementById('save');
    const clearButton = document.getElementById('clear');
    const resultDiv = document.getElementById('result');

    // Функция для загрузки сохраненных данных из localStorage
    function loadSavedSettings() {
        const savedSet = JSON.parse(localStorage.getItem('furnitureSet'));
        if (savedSet) {
            tableSelect.value = savedSet.table;
            chairSelect.value = savedSet.chair;
            sofaSelect.value = savedSet.sofa;
            displaySet(savedSet);
        } else {
            resultDiv.textContent = 'Выбор не сделан.';
        }
    }

    // Функция для отображения выбранного комплекта
    function displaySet(set) {
        resultDiv.innerHTML = `
            <h2>Ваш комплект:</h2>
            <p>Стол: ${set.table}</p>
            <p>Стул: ${set.chair}</p>
            <p>Диван: ${set.sofa}</p>
        `;
    }

    // Обработчик нажатия на кнопку "Сохранить комплект"
    saveButton.addEventListener('click', () => {
        const selectedSet = {
            table: tableSelect.value,
            chair: chairSelect.value,
            sofa: sofaSelect.value,
        };
        localStorage.setItem('furnitureSet', JSON.stringify(selectedSet));
        displaySet(selectedSet);
    });

    // Обработчик нажатия на кнопку "Очистить настройки"
    clearButton.addEventListener('click', () => {
        localStorage.removeItem('furnitureSet');
        resultDiv.textContent = 'Выбор не сделан. Предыдущие настройки удалены.';
    });

    // Загрузка сохраненных данных при загрузке страницы
    loadSavedSettings();
});
