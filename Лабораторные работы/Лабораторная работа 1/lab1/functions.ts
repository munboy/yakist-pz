// Розрахунок знижки
export function calculateCoffeeDiscount(
    orderTotal: number,
    cupsCount: number,
    hasLoyaltyCard: boolean,
    isHappyHour: boolean
): number {
    // Валідація
    if (orderTotal <= 0 || orderTotal > 5000 || cupsCount <= 0 || cupsCount > 30) {
        return -1;
    }

    // Знижка 20%
    if (hasLoyaltyCard && isHappyHour && orderTotal >= 300) {
        return 20;
    }

    // Знижка 15%
    if (hasLoyaltyCard && (cupsCount >= 5 || orderTotal >= 400)) {
        return 15;
    }

    // Знижка 10%
    if (isHappyHour || cupsCount >= 4) {
        return 10;
    }

    // Знижка 5%
    if (hasLoyaltyCard) {
        return 5;
    }

    return 0;
}

// Підрахунок напоїв у чеку
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
