// Задание 2 (тайминг 35 минут)
// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а
// некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
// наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
// и instanceof.
// 1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
// PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
// действия), а у RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
// возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
// Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного
// пользователя и дайте соответствующий ответ.

class User {
    constructor(name, family) {
        this.name = name;
        this.family = family;
    }
}

class PremiumUser extends User {
    constructor(name, family) {
        super(name, family);
    }
    premiumAccount = null;

    setPremiumAccount() {
        this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
    }
}

class RegularUser extends User {
    constructor(name, family) {
        super(name, family);
    }
}

function getAccountInfo(user) {
    if (user instanceof PremiumUser) {
        if (user.premiumAccount) {
            console.log(
                `Премиум аккаунт действителен до ${new Date(user.premiumAccount).getFullYear()}`,
                user.name,
                user.family
            );
        } else {
            console.log("Информация о премиум аккаунте отсутствует", user.name, user.family);
        }
    } else if (user instanceof RegularUser) {
        console.log("Пользователь без премиум аккаунта", user.name, user.family);
    } else {
        console.log("Тип пользователя не определен");
    }
}

const regular = new RegularUser('Вася', 'Иванов');
const premium = new PremiumUser('Оля', 'Олина');
const premiumLim = new PremiumUser('Полина', 'Гагарина');
premium.setPremiumAccount();

getAccountInfo(regular);
getAccountInfo(premium);
getAccountInfo(premiumLim);
