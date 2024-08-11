// Экспорт
// Чтобы получить доступ к объектам модулей, надо их экспортировать.

export const name = 'square'; // Ключевое слово export

export function draw(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);

    return {
        length: length,
        x: x,
        y: y,
        color: color
    };
}

// внутри блоков экспортировать нельзя

// Импорт

import { name, draw, reportArea, reportPerimeter } from './modules/square.js';

import * as Square from './modules/square.js'; // Импортировать все что можно

// /js-examples/modules / basic - modules / modules / Square.js
//     ./modules / Square.js // точка в начале пути мы можем использовать для обозначения текущей директории