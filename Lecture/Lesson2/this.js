// Обычная функция
function regularFunction() {
    console.log(this);
}

// Стрелочная функция
const arrowFunction = () => {
    console.log(this);
}

regularFunction(); // Выводит контекст выполнения, например, объект Window (в браузере) или объект Global (в Node.js)

arrowFunction(); // Выводит контекст выполнения, который был определен во время создания функции (лексический контекст)

// Внутри объекта

const obj = {
    regularMethod: function () {
        console.log(this);
    },
    arrowMethod: () => {
        console.log(this);
    }
};

obj.regularMethod(); // Выводит объект obj, так как метод вызывается на объект obj
obj.arrowMethod(); // Выводит контекст выполнения, в котором была создана стрелочная функция (например, объект Window или объект Global)