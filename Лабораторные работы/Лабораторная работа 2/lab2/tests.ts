// Тестові набори методів тестування чорної скриньки
// Лабораторна робота № 2: Методи тест-дизайну та автоматизоване тестування

export interface BlackBoxTestCase {
    id: string;
    method: string;
    description: string;
    input: [number, number, boolean, boolean];
    coveredClasses?: string;
    expected: number;
}

export interface TokenBlackBoxTestCase {
    id: string;
    method: string;
    description: string;
    receipt: string;
    prefix: string;
    minLen: number;
    expected: number;
}

// 1. Еквівалентне розбиття для calculateCoffeeDiscount
// Валідні класи: EC1..EC3, EC6..EC8, EC11..EC14
// Невалідні класи (перевіряються суворо окремо): EC4, EC5, EC9, EC10
export const equivalencePartitioningTests: BlackBoxTestCase[] = [
    // Валідні тести
    { id: "EP.1", method: "Еквівалентне розбиття", description: "Чек < 300, 2 чашки, без карти, звичайний час", input: [150, 2, false, false], coveredClasses: "EC1, EC6, EC12, EC14", expected: 0 },
    { id: "EP.2", method: "Еквівалентне розбиття", description: "Чек 300..399, 3 чашки, VIP у щасливі години", input: [350, 3, true, true], coveredClasses: "EC2, EC6, EC11, EC13", expected: 20 },
    { id: "EP.3", method: "Еквівалентне розбиття", description: "Чек >= 400, 2 чашки, постійний клієнт", input: [450, 2, true, false], coveredClasses: "EC3, EC6, EC11, EC14", expected: 15 },
    { id: "EP.4", method: "Еквівалентне розбиття", description: "Чек 200, рівно 4 чашки, без карти", input: [200, 4, false, false], coveredClasses: "EC1, EC7, EC12, EC14", expected: 10 },
    { id: "EP.5", method: "Еквівалентне розбиття", description: "Чек 250, 6 чашок, постійний клієнт", input: [250, 6, true, false], coveredClasses: "EC1, EC8, EC11, EC14", expected: 15 },
    { id: "EP.6", method: "Еквівалентне розбиття", description: "Чек 120, 1 чашка, постійний клієнт", input: [120, 1, true, false], coveredClasses: "EC1, EC6, EC11, EC14", expected: 5 },
    // Невалідні тести (перевірка окремих невалідних класів)
    { id: "EP.7", method: "Еквівалентне розбиття", description: "Сума <= 0 (невалідно)", input: [0, 2, false, false], coveredClasses: "EC4", expected: -1 },
    { id: "EP.8", method: "Еквівалентне розбиття", description: "Сума > 5000 (невалідно)", input: [5200, 2, false, false], coveredClasses: "EC5", expected: -1 },
    { id: "EP.9", method: "Еквівалентне розбиття", description: "Чашок <= 0 (невалідно)", input: [200, 0, false, false], coveredClasses: "EC9", expected: -1 },
    { id: "EP.10", method: "Еквівалентне розбиття", description: "Чашок > 30 (невалідно)", input: [200, 32, false, false], coveredClasses: "EC10", expected: -1 }
];

// 2. Аналіз граничних значень для calculateCoffeeDiscount
export const boundaryValueTests: BlackBoxTestCase[] = [
    // Нижня межа orderTotal: 0, 1, 2
    { id: "BVA.1", method: "Граничні значення", description: "Сума = 0 (ліва межа, невалідно)", input: [0, 1, false, false], expected: -1 },
    { id: "BVA.2", method: "Граничні значення", description: "Сума = 1 (мінімальна валідна сума)", input: [1, 1, false, false], expected: 0 },
    { id: "BVA.3", method: "Граничні значення", description: "Сума = 2 (трохи вище мінімуму)", input: [2, 1, false, false], expected: 0 },
    // Границя 300 грн (VIP + Happy Hour)
    { id: "BVA.4", method: "Граничні значення", description: "Сума = 299 (на 1 грн менше 300)", input: [299, 1, true, true], expected: 10 },
    { id: "BVA.5", method: "Граничні значення", description: "Сума = 300 (рівно на межі)", input: [300, 1, true, true], expected: 20 },
    { id: "BVA.6", method: "Граничні значення", description: "Сума = 301 (на 1 грн більше 300)", input: [301, 1, true, true], expected: 20 },
    // Границя 400 грн (15% знижка для картки)
    { id: "BVA.7", method: "Граничні значення", description: "Сума = 399 (на 1 грн менше 400)", input: [399, 1, true, false], expected: 5 },
    { id: "BVA.8", method: "Граничні значення", description: "Сума = 400 (рівно на межі)", input: [400, 1, true, false], expected: 15 },
    { id: "BVA.9", method: "Граничні значення", description: "Сума = 401 (на 1 грн більше 400)", input: [401, 1, true, false], expected: 15 },
    // Верхня межа orderTotal: 4999, 5000, 5001
    { id: "BVA.10", method: "Граничні значення", description: "Сума = 4999 (трохи нижче максимуму)", input: [4999, 1, false, false], expected: 0 },
    { id: "BVA.11", method: "Граничні значення", description: "Сума = 5000 (максимум)", input: [5000, 1, false, false], expected: 0 },
    { id: "BVA.12", method: "Граничні значення", description: "Сума = 5001 (поза максимумом, невалідно)", input: [5001, 1, false, false], expected: -1 },
    // Границі cupsCount: 0, 1, 3, 4, 5, 29, 30, 31
    { id: "BVA.13", method: "Граничні значення", description: "Чашок = 0 (невалідно)", input: [200, 0, false, false], expected: -1 },
    { id: "BVA.14", method: "Граничні значення", description: "Чашок = 1 (мінімум)", input: [200, 1, false, false], expected: 0 },
    { id: "BVA.15", method: "Граничні значення", description: "Чашок = 3 (перед порогом 4)", input: [200, 3, false, false], expected: 0 },
    { id: "BVA.16", method: "Граничні значення", description: "Чашок = 4 (поріг 10% знижки)", input: [200, 4, false, false], expected: 10 },
    { id: "BVA.17", method: "Граничні значення", description: "Чашок = 5 (поріг 15% для картки)", input: [200, 5, true, false], expected: 15 },
    { id: "BVA.18", method: "Граничні значення", description: "Чашок = 30 (максимум чашок)", input: [200, 30, false, false], expected: 10 },
    { id: "BVA.19", method: "Граничні значення", description: "Чашок = 31 (перевищення ліміту)", input: [200, 31, false, false], expected: -1 }
];

// 3. Метод припущення про помилку
export const errorGuessingTests: BlackBoxTestCase[] = [
    { id: "EG.1", method: "Припущення про помилку", description: "Від'ємна сума при валідній кількості чашок", input: [-150, 2, true, false], expected: -1 },
    { id: "EG.2", method: "Припущення про помилку", description: "Дробова невалідна сума поза максимумом (5000.01)", input: [5000.01, 2, false, false], expected: -1 },
    { id: "EG.3", method: "Припущення про помилку", description: "Нульова кількість чашок при нормальній сумі", input: [300, 0, true, true], expected: -1 },
    { id: "EG.4", method: "Припущення про помилку", description: "Від'ємна кількість чашок", input: [200, -5, false, false], expected: -1 },
    { id: "EG.5", method: "Припущення про помилку", description: "Мінімальне валідне замовлення (1 грн, 1 чашка)", input: [1, 1, false, false], expected: 0 }
];

// 4. Метод функціональних діаграм (причинно-наслідковий аналіз)
export const causeEffectTests: BlackBoxTestCase[] = [
    { id: "CE.1", method: "Функціональні діаграми", description: "Причини C1+C2+C3 -> Наслідок E1 (20% VIP знижка)", input: [350, 2, true, true], expected: 20 },
    { id: "CE.2", method: "Функціональні діаграми", description: "Причини C1+C5 -> Наслідок E2 (15% чек >= 400)", input: [420, 2, true, false], expected: 15 },
    { id: "CE.3", method: "Функціональні діаграми", description: "Причини C1+C4 -> Наслідок E2 (15% чашок >= 5)", input: [250, 5, true, false], expected: 15 },
    { id: "CE.4", method: "Функціональні діаграми", description: "Причина C2 -> Наслідок E3 (10% щасливі години)", input: [150, 2, false, true], expected: 10 },
    { id: "CE.5", method: "Функціональні діаграми", description: "Причина C6 -> Наслідок E3 (10% від 4 чашок)", input: [150, 4, false, false], expected: 10 },
    { id: "CE.6", method: "Функціональні діаграми", description: "Причина C1 -> Наслідок E4 (5% базова картка)", input: [150, 2, true, false], expected: 5 },
    { id: "CE.7", method: "Функціональні діаграми", description: "Усі умови відхилені -> Наслідок E5 (0% без знижки)", input: [150, 2, false, false], expected: 0 }
];

// Тести для функції 2: countCoffeeOrderTokens
export const tokenBlackBoxTests: TokenBlackBoxTestCase[] = [
    { id: "TB.1", method: "Граничні значення", description: "minDrinkLength = 0 (невалідна границя)", receipt: "Espresso Latte", prefix: "e", minLen: 0, expected: -1 },
    { id: "TB.2", method: "Граничні значення", description: "minDrinkLength = 1 (мінімальна довжина)", receipt: "Tea, Espresso", prefix: "t", minLen: 1, expected: 1 },
    { id: "TB.3", method: "Еквівалентне розбиття", description: "Порожній рядок чеку (довжина 0)", receipt: "", prefix: "l", minLen: 3, expected: 0 },
    { id: "TB.4", method: "Еквівалентне розбиття", description: "Кілька напоїв через кому і пробіл", receipt: "Latte, Lungo, Cappuccino", prefix: "L", minLen: 5, expected: 2 },
    { id: "TB.5", method: "Припущення про помилку", description: "Різний регістр літер (Mocha, macchiato)", receipt: "Mocha, macchiato, Americano", prefix: "M", minLen: 6, expected: 1 },
    { id: "TB.6", method: "Припущення про помилку", description: "Завищена мінімальна довжина (довша за будь-яке слово)", receipt: "Espresso, Doppio", prefix: "d", minLen: 15, expected: 0 }
];
