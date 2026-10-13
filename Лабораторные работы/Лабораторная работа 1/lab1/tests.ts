// Набори тестів для методів тестування білої скриньки

export interface DiscountTestCase {
    id: string;
    method: string;
    input: [number, number, boolean, boolean];
    expected: number;
}

export interface TokenTestCase {
    id: string;
    receipt: string;
    prefix: string;
    minLen: number;
    expected: number;
}

// Тестовий набір для функції 1 (calculateCoffeeDiscount)
// Покриває 5 методів білої скриньки
export const discountTests: DiscountTestCase[] = [
    // 1. Покриття операторів (Statement Coverage)
    { id: "T1.1", method: "Покриття операторів", input: [-50, 2, false, false], expected: -1 },
    { id: "T1.2", method: "Покриття операторів", input: [350, 3, true, true], expected: 20 },
    { id: "T1.3", method: "Покриття операторів", input: [250, 6, true, false], expected: 15 },
    { id: "T1.4", method: "Покриття операторів", input: [150, 4, false, false], expected: 10 },
    { id: "T1.5", method: "Покриття операторів", input: [100, 1, true, false], expected: 5 },
    { id: "T1.6", method: "Покриття операторів", input: [80, 1, false, false], expected: 0 },

    // 2. Покриття рішень (Decision Coverage)
    { id: "T2.1", method: "Покриття рішень", input: [0, 2, false, false], expected: -1 },
    { id: "T2.2", method: "Покриття рішень", input: [400, 2, true, true], expected: 20 },
    { id: "T2.3", method: "Покриття рішень", input: [450, 2, true, false], expected: 15 },
    { id: "T2.4", method: "Покриття рішень", input: [120, 1, false, true], expected: 10 },
    { id: "T2.5", method: "Покриття рішень", input: [100, 2, true, false], expected: 5 },
    { id: "T2.6", method: "Покриття рішень", input: [100, 2, false, false], expected: 0 },

    // 3. Покриття умов (Condition Coverage - розгалуження D2)
    { id: "T3.1", method: "Покриття умов", input: [350, 2, true, false], expected: 5 },
    { id: "T3.2", method: "Покриття умов", input: [200, 2, false, true], expected: 10 },

    // 4. Покриття умов та рішень (Decision/Condition Coverage - розгалуження D2)
    { id: "T4.1", method: "Покриття умов та рішень", input: [350, 2, true, true], expected: 20 },
    { id: "T4.2", method: "Покриття умов та рішень", input: [200, 2, false, false], expected: 0 },

    // 5. Комбінаторне покриття умов (Multiple Condition Coverage - розгалуження D4)
    { id: "T5.1", method: "Комбінаторне покриття", input: [200, 5, false, true], expected: 10 },
    { id: "T5.2", method: "Комбінаторне покриття", input: [200, 2, false, true], expected: 10 },
    { id: "T5.3", method: "Комбінаторне покриття", input: [200, 4, false, false], expected: 10 },
    { id: "T5.4", method: "Комбінаторне покриття", input: [200, 2, false, false], expected: 0 }
];

// Тестовий набір для функції 2 (countCoffeeOrderTokens)
export const tokenTests: TokenTestCase[] = [
    { id: "TW.1", receipt: "Espresso Latte", prefix: "e", minLen: 0, expected: -1 },
    { id: "TW.2", receipt: "", prefix: "l", minLen: 3, expected: 0 },
    { id: "TW.3", receipt: "Latte, Lungo, Cappuccino", prefix: "L", minLen: 5, expected: 2 },
    { id: "TW.4", receipt: "Mocha, Macchiato, Americano", prefix: "m", minLen: 6, expected: 1 },
    { id: "TW.5", receipt: "Espresso, Doppio", prefix: "d", minLen: 12, expected: 0 }
];
