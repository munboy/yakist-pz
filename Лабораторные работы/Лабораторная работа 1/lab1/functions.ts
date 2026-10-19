// Функції предметної області кав'ярні для Лабораторної роботи №1

// Функція 1: Розрахунок знижки на замовлення кави
export function calculateCoffeeDiscount(
    orderTotal: number,
    cupsCount: number,
    hasLoyaltyCard: boolean,
    isHappyHour: boolean
): number {
    // Оператор 1: перевірка валідності вхідних даних
    if (orderTotal <= 0 || orderTotal > 5000 || cupsCount <= 0 || cupsCount > 30) {
        return -1; // Оператор 2
    }

    // Оператор 3: знижка 20% (картка лояльності, щасливі години, сума від 300 грн)
    if (hasLoyaltyCard && isHappyHour && orderTotal >= 300) {
        return 20; // Оператор 4
    }

    // Оператор 5: знижка 15% (картка лояльності та замовлення від 5 чашок або сума від 400 грн)
    if (hasLoyaltyCard && (cupsCount >= 5 || orderTotal >= 400)) {
        return 15; // Оператор 6
    }

    // Оператор 7: знижка 10% (щасливі години або від 4 чашок)
    if (isHappyHour || cupsCount >= 4) {
        return 10; // Оператор 8
    }

    // Оператор 9: базова знижка 5% для власників карток лояльності
    if (hasLoyaltyCard) {
        return 5; // Оператор 10
    }

    // Оператор 11: замовлення без знижки
    return 0;
}

// Функція 2: Посимвольний аналіз чеку замовлень кав'ярні
export function countCoffeeOrderTokens(
    receiptText: string,
    drinkPrefix: string,
    minDrinkLength: number
): number {
    // Оператор 1: перевірка коректності мінімальної довжини
    if (minDrinkLength <= 0) {
        return -1; // Оператор 2
    }

    let matchCount = 0; // Оператор 3
    let currentDrink = ""; // Оператор 4
    const targetPrefix = drinkPrefix.toLowerCase(); // Оператор 5

    // Оператор 6: цикл посимвольного аналізу рядка
    for (let i = 0; i <= receiptText.length; i++) {
        // Оператор 7: перевірка роздільника (кінець рядка, пробіл, кома)
        const isEnd = (i === receiptText.length) || receiptText[i] === ' ' || receiptText[i] === ',';

        if (!isEnd) { // Оператор 8
            currentDrink += receiptText[i]; // Оператор 9
        } else {
            // Перевірка накопиченої назви напою
            if (currentDrink.length > 0) { // Оператор 10
                const firstChar = currentDrink[0].toLowerCase(); // Оператор 11
                // Оператор 12: складена умова перевірки довжини та префікса
                if (currentDrink.length >= minDrinkLength && firstChar === targetPrefix) {
                    matchCount++; // Оператор 13
                }
                currentDrink = ""; // Оператор 14
            }
        }
    }

    return matchCount; // Оператор 15
}
