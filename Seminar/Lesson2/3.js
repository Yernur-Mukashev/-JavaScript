function checkNumber() {
    const input = document.getElementById('numberInput').value;
    const messageDiv = document.getElementById('message');

    try {
        if (input.trim() === '') throw 'Пустая строка';
        const number = Number(input);

        if (isNaN(number)) {
            throw 'Это не число';
        } else {
            messageDiv.textContent = 'Это число: ' + number;
            messageDiv.style.color = 'green';
        }
    } catch (error) {
        messageDiv.textContent = 'Ошибка: ' + error;
        messageDiv.style.color = 'red';
    }
}