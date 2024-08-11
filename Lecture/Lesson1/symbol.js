// Тип данных Symbol
// Тип данных Symbol представляет из себя уникальный идентификатор. Значение всегда уникально,
// даже у переменных, объявленных с одинаковым описанием. Для того, чтобы одному описанию
// соответствовал один идентификатор, его нужно объявить в глобальном реестре.
// Поля объекта с ключами, тип которых Symbol, скрыты для перебора итераторами.

// Системные символы
// Имеются специальные символы, которые мы можем настраивать поведение объектов.
// Они содержатся внутри JavaScript и называются системными.

// Вот некоторые из них:
// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive

//.1
// const symbol = Symbol(); // объявление

// const dog1 = Symbol('dog');
// const dog2 = Symbol('dog');

// console.log(dog1 == dog2); // false

// //.2
// const dogID = Symbol('dog'); // значение уникально, даже если мы создадим несколько символов с одинаковым описанием
// console.log(dogID); // Symbol(dog)
// console.log(dogID.description); // dog  можно посмотреть оптсание

// ///----/////-----------------------------------------
// //.3
// let id = Symbol('dogID');
// let buddy = {
//     [id]: 'Жучка'
// }
// console.log(buddy[id]); //Жучка

// let id2 = Symbol["id"];
// buddy[id] = 'Бобик'; // Идентификаторы создаются уникальными всегда
// console.log(buddy[id]); // Бобик

///-------------------/////-------------
//.4
// Проблемы которые могут возникнуть, без использования Symbol
let buddy = { name: 'Тузик' }; // Объявляем в нашем скрипте свойство "id"
buddy.id = 'Наш идентификатор'; // ...другой скрипт тоже хочет свой идентификатор...
buddy.id = 'Их идентификатор'; // Ой! Свойство перезаписано сторонней библиотекой!
console.log(buddy.id);

//Как решиить?

let buddies = {
    [Symbol('Жучка')]: 'Жучка',
    [Symbol('Мурка')]: 'Мурка',
    [Symbol('Таракашка')]: 'Таракашка',
    elephant: 'Слон',
}
console.log(buddies);

let newBuddies = {};
Object.assign(newBuddies, buddies); // Object.assign скопирует все свойства, в том числе, и символьные.
buddies.cat = 'Барсик';
console.log(newBuddies);
console.log(buddies);


// //----- Symbol.for ------
// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for('id'); // если символа не существует, он будет создан

// читаем его сново и записываем в другую переменную (возможно из другого места кода)
let idAgain = Symbol.for('id');

// проверяем: это один и тот же символ
alert(id === idAgain); // true

// /// ------- Symbol.keyFor ------------
// получаем символ по имени 
let sym = Symbol.for('name');
let sym2 = Symbol.for('id');

// получаем имя по символу
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id