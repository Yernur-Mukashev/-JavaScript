// Задание 1 (тайминг 25 минут)
// Давайте создадим класс для управления банковским счетом. В этом классе будет приватное
// свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// 1. Класс должен содержать приватное свойство #balance, которое инициализируется
// значением 0 и представляет собой текущий баланс счета.
// 2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// 3. Реализуйте метод deposit(amount), который позволит вносить средства на счет.
// Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте
// ошибку.
// 4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета.
// Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в
// противном случае выбрасывайте ошибку.
// 5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.
// Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте
// ошибку.

class BankAccount {
    #balance = 0;
    constructor(amount) {
        if (amount < 0) {
            throw new Error("Отрицательный баланс для иннициализации счета");
        }
		this.#balance = amount;
    }

    get balance() {
		return this.#balance;
	}

    set balance(amount) {
        this.#balance = amount
    }

    deposit(cash) {
        if (cash <= 0 ) {
            throw new Error('Сумма для депозита должна быть больше 0');
        }
        this.#balance += cash
        return this.#balance;
    }

    withdrow(cash) {
        if (cash <= 0 ) {
            throw new Error('Сумма для снятия должна быть больше 0');
        }
        if (this.#balance - cash < 0) {
            throw new Error('Сумма для снятия больше суммы счета');
        }
        this.#balance -= cash;
        return this.#balance;
    }
};

let account = new BankAccount(500);
console.log(account.balance);


account.deposit(300);
console.log(account.balance);
console.log(account);


account.withdrow(500);
console.log(account.balance);
console.log(account);