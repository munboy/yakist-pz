// Функції предметної області кав'ярні для Лабораторної роботи №2

// Функція 1: Розрахунок знижки на замовлення кави за специфікацією
export function calculateCoffeeDiscount(
    orderTotal: number,
    cupsCount: number,
    hasLoyaltyCard: boolean,
    isHappyHour: boolean
): number {
    // Валідація допустимих меж вхідних параметрів
    if (orderTotal <= 0 || orderTotal > 5000 || cupsCount <= 0 || cupsCount > 30) {
        return -1;
    }

    // Знижка 20% (картка лояльності, щасливі години, чек від 300 грн)
    if (hasLoyaltyCard && isHappyHour && orderTotal >= 300) {
        return 20;
    }

    // Знижка 15% (картка лояльності та замовлення від 5 чашок або сума від 400 грн)
    if (hasLoyaltyCard && (cupsCount >= 5 || orderTotal >= 400)) {
        return 15;
    }

    // Знижка 10% (щасливі години або від 4 чашок)
    if (isHappyHour || cupsCount >= 4) {
        return 10;
    }

    // Базова знижка 5% для власників карток лояльності
    if (hasLoyaltyCard) {
        return 5;
    }

    // Знижка не надається
    return 0;
}

// Функція 2: Посимвольний аналіз чеку замовлень кав'ярні за специфікацією
export function countCoffeeOrderTokens(
    receiptText: string,
    drinkPrefix: string,
    minDrinkLength: number
): number {
    if (minDrinkLength <= 0) {
        return -1;
    }

    let matchCount = 0;
    let currentDrink = "";
    const targetPrefix = drinkPrefix.toLowerCase();

    for (let i = 0; i <= receiptText.length; i++) {
        const isEnd = (i === receiptText.length) || receiptText[i] === ' ' || receiptText[i] === ',';

        if (!isEnd) {
            currentDrink += receiptText[i];
        } else {
            if (currentDrink.length > 0) {
                const firstChar = currentDrink[0].toLowerCase();
                if (currentDrink.length >= minDrinkLength && firstChar === targetPrefix) {
                    matchCount++;
                }
                currentDrink = "";
            }
        }
    }

    return matchCount;
}
