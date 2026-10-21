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

// calculateCoffeeDiscount
export const discountTests: DiscountTestCase[] = [
    // 1. Оператори
    { id: "T1.1", method: "Покриття операторів", input: [-50, 2, false, false], expected: -1 },
    { id: "T1.2", method: "Покриття операторів", input: [5500, 2, false, false], expected: -1 },
    { id: "T1.3", method: "Покриття операторів", input: [100, 0, false, false], expected: -1 },
    { id: "T1.4", method: "Покриття операторів", input: [100, 35, false, false], expected: -1 },
    { id: "T1.5", method: "Покриття операторів", input: [350, 3, true, true], expected: 20 },
    { id: "T1.6", method: "Покриття операторів", input: [250, 6, true, false], expected: 15 },
    { id: "T1.7", method: "Покриття операторів", input: [450, 2, true, false], expected: 15 },
    { id: "T1.8", method: "Покриття операторів", input: [450, 6, true, false], expected: 15 },
    { id: "T1.9", method: "Покриття операторів", input: [150, 4, false, false], expected: 10 },
    { id: "T1.10", method: "Покриття операторів", input: [150, 2, false, true], expected: 10 },
    { id: "T1.11", method: "Покриття операторів", input: [100, 1, true, false], expected: 5 },
    { id: "T1.12", method: "Покриття операторів", input: [80, 1, false, false], expected: 0 },

    // 2. Рішення
    { id: "T2.1", method: "Покриття рішень", input: [0, 2, false, false], expected: -1 },
    { id: "T2.2", method: "Покриття рішень", input: [5200, 2, false, false], expected: -1 },
    { id: "T2.3", method: "Покриття рішень", input: [400, 2, true, true], expected: 20 },
    { id: "T2.4", method: "Покриття рішень", input: [250, 6, true, false], expected: 15 },
    { id: "T2.5", method: "Покриття рішень", input: [450, 2, true, false], expected: 15 },
    { id: "T2.6", method: "Покриття рішень", input: [120, 1, false, true], expected: 10 },
    { id: "T2.7", method: "Покриття рішень", input: [120, 4, false, false], expected: 10 },
    { id: "T2.8", method: "Покриття рішень", input: [100, 2, true, false], expected: 5 },
    { id: "T2.9", method: "Покриття рішень", input: [100, 2, false, false], expected: 0 },
    { id: "T2.10", method: "Покриття рішень", input: [50, 1, false, false], expected: 0 },

    // 3. Умови
    { id: "TC.1", method: "Покриття умов", input: [-50, 2, false, false], expected: -1 },
    { id: "TC.2", method: "Покриття умов", input: [5500, 2, false, false], expected: -1 },
    { id: "TC.3", method: "Покриття умов", input: [100, 0, false, false], expected: -1 },
    { id: "TC.4", method: "Покриття умов", input: [100, 35, false, false], expected: -1 },
    { id: "TC.5", method: "Покриття умов", input: [350, 2, true, true], expected: 20 },
    { id: "TC.6", method: "Покриття умов", input: [250, 6, true, false], expected: 15 },
    { id: "TC.7", method: "Покриття умов", input: [450, 2, true, false], expected: 15 },
    { id: "TC.8", method: "Покриття умов", input: [150, 2, false, true], expected: 10 },
    { id: "TC.9", method: "Покриття умов", input: [150, 4, false, false], expected: 10 },
    { id: "TC.10", method: "Покриття умов", input: [100, 1, true, false], expected: 5 },
    { id: "TC.11", method: "Покриття умов", input: [80, 1, false, false], expected: 0 },

    // 4. Умови та рішення
    { id: "TDC.1", method: "Покриття умов та рішень", input: [-50, 2, false, false], expected: -1 },
    { id: "TDC.2", method: "Покриття умов та рішень", input: [5200, 2, false, false], expected: -1 },
    { id: "TDC.3", method: "Покриття умов та рішень", input: [100, 0, false, false], expected: -1 },
    { id: "TDC.4", method: "Покриття умов та рішень", input: [100, 32, false, false], expected: -1 },
    { id: "TDC.5", method: "Покриття умов та рішень", input: [350, 2, true, true], expected: 20 },
    { id: "TDC.6", method: "Покриття умов та рішень", input: [250, 6, true, false], expected: 15 },
    { id: "TDC.7", method: "Покриття умов та рішень", input: [450, 2, true, false], expected: 15 },
    { id: "TDC.8", method: "Покриття умов та рішень", input: [150, 2, false, true], expected: 10 },
    { id: "TDC.9", method: "Покриття умов та рішень", input: [150, 4, false, false], expected: 10 },
    { id: "TDC.10", method: "Покриття умов та рішень", input: [100, 2, true, false], expected: 5 },
    { id: "TDC.11", method: "Покриття умов та рішень", input: [80, 1, false, false], expected: 0 },

    // 5. Комбінаторне покриття
    // D2
    { id: "T5.1", method: "Комбінаторне покриття (D2)", input: [350, 2, true, true], expected: 20 },
    { id: "T5.2", method: "Комбінаторне покриття (D2)", input: [200, 2, true, true], expected: 10 },
    { id: "T5.3", method: "Комбінаторне покриття (D2)", input: [350, 2, true, false], expected: 5 },
    { id: "T5.4", method: "Комбінаторне покриття (D2)", input: [200, 2, true, false], expected: 5 },
    { id: "T5.5", method: "Комбінаторне покриття (D2)", input: [350, 2, false, true], expected: 10 },
    { id: "T5.6", method: "Комбінаторне покриття (D2)", input: [200, 2, false, true], expected: 10 },
    { id: "T5.7", method: "Комбінаторне покриття (D2)", input: [350, 2, false, false], expected: 0 },
    { id: "T5.8", method: "Комбінаторне покриття (D2)", input: [200, 2, false, false], expected: 0 },
    // D4
    { id: "T5.9", method: "Комбінаторне покриття (D4)", input: [200, 5, false, true], expected: 10 },
    { id: "T5.10", method: "Комбінаторне покриття (D4)", input: [200, 2, false, true], expected: 10 },
    { id: "T5.11", method: "Комбінаторне покриття (D4)", input: [200, 4, false, false], expected: 10 },
    { id: "T5.12", method: "Комбінаторне покриття (D4)", input: [200, 2, false, false], expected: 0 }
];

// countCoffeeOrderTokens
// 1. Оператори та рішення
export const tokenTests: TokenTestCase[] = [
    { id: "TW.1", receipt: "Espresso", prefix: "e", minLen: 0, expected: -1 },
    { id: "TW.2", receipt: "", prefix: "l", minLen: 3, expected: 0 },
    { id: "TW.3", receipt: "Latte", prefix: "l", minLen: 3, expected: 1 },
    { id: "TW.4", receipt: "Latte, Lungo, Cappuccino", prefix: "L", minLen: 5, expected: 2 },
    { id: "TW.5", receipt: "Tea", prefix: "t", minLen: 5, expected: 0 },
    { id: "TW.6", receipt: "Espresso", prefix: "d", minLen: 3, expected: 0 },
    { id: "TW.7", receipt: "  ,,  ", prefix: "a", minLen: 2, expected: 0 },
    { id: "TW.8", receipt: "MOCHA", prefix: "m", minLen: 4, expected: 1 }
];

// 2. Умови
export const tokenConditionTests: TokenTestCase[] = [
    { id: "TWC.1", receipt: "Latte", prefix: "l", minLen: 0, expected: -1 },
    { id: "TWC.2", receipt: "", prefix: "l", minLen: 3, expected: 0 },
    { id: "TWC.3", receipt: "Latte, Lungo", prefix: "l", minLen: 3, expected: 2 },
    { id: "TWC.4", receipt: "Tea", prefix: "t", minLen: 5, expected: 0 },
    { id: "TWC.5", receipt: "Espresso", prefix: "d", minLen: 3, expected: 0 },
    { id: "TWC.6", receipt: "Latte", prefix: "m", minLen: 10, expected: 0 }
];

// 3. Умови та рішення
export const tokenDecisionConditionTests: TokenTestCase[] = [
    { id: "TWDC.1", receipt: "Latte", prefix: "l", minLen: 0, expected: -1 },
    { id: "TWDC.2", receipt: "", prefix: "l", minLen: 3, expected: 0 },
    { id: "TWDC.3", receipt: "Latte, Lungo", prefix: "l", minLen: 3, expected: 2 },
    { id: "TWDC.4", receipt: "Tea", prefix: "t", minLen: 5, expected: 0 },
    { id: "TWDC.5", receipt: "Espresso", prefix: "d", minLen: 3, expected: 0 },
    { id: "TWDC.6", receipt: "Latte", prefix: "m", minLen: 10, expected: 0 }
];

