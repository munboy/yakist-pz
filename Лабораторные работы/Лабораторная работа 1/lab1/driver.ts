// Драйвер тестування

import * as readline from 'node:readline';
import { calculateCoffeeDiscount, countCoffeeOrderTokens } from './functions.ts';
import { discountTests, tokenTests, tokenConditionTests } from './tests.ts';
import type { DiscountTestCase, TokenTestCase } from './tests.ts';

function runDiscountTests(tests: DiscountTestCase[]): number {
    console.log("Запуск тестів для calculateCoffeeDiscount:");
    let passed = 0;

    for (const t of tests) {
        const actual = calculateCoffeeDiscount(...t.input);
        const ok = actual === t.expected;
        if (ok) passed++;

        const inputStr = `[${t.input.join(', ')}]`;
        console.log(`[${t.id}] ${t.method}: вхідні дані ${inputStr} -> очікувано: ${t.expected}, факт: ${actual} [${ok ? 'OK' : 'FAIL'}]`);
    }

    console.log(`Результат тестування calculateCoffeeDiscount: пройдено ${passed} з ${tests.length} тестів (${Math.round((passed / tests.length) * 100)}% успішно)\n`);
    return passed;
}

function runTokenTests(tests: TokenTestCase[], testSuiteName: string = "countCoffeeOrderTokens"): number {
    console.log(`Запуск тестів для ${testSuiteName}:`);
    let passed = 0;

    for (const t of tests) {
        const actual = countCoffeeOrderTokens(t.receipt, t.prefix, t.minLen);
        const ok = actual === t.expected;
        if (ok) passed++;

        const inputStr = `["${t.receipt}", '${t.prefix}', ${t.minLen}]`;
        console.log(`[${t.id}] Вхід: ${inputStr} -> очікувано: ${t.expected}, факт: ${actual} [${ok ? 'OK' : 'FAIL'}]`);
    }

    console.log(`Результат тестування ${testSuiteName}: пройдено ${passed} з ${tests.length} тестів (${Math.round((passed / tests.length) * 100)}% успішно)\n`);
    return passed;
}

// Інтерактивний режим
async function runInteractiveMode(): Promise<void> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const ask = (query: string): Promise<string> =>
        new Promise((resolve) => rl.question(query, resolve));

    console.log("Діалоговий режим тестування (введіть '0' для виходу)");

    while (true) {
        console.log("Оберіть функцію для тестування:");
        console.log("1 - calculateCoffeeDiscount (розрахунок знижки)");
        console.log("2 - countCoffeeOrderTokens (посимвольний аналіз чеку)");
        console.log("0 - Вихід");

        const choice = (await ask("Ваш вибір: ")).trim();

        if (choice === '0') {
            console.log("Завершення діалогового режиму.");
            break;
        }

        if (choice === '1') {
            const totalStr = await ask("Сума замовлення (orderTotal, грн): ");
            const cupsStr = await ask("Кількість чашок (cupsCount): ");
            const loyaltyStr = await ask("Є картка лояльності? (y/n): ");
            const happyStr = await ask("Щасливі години? (y/n): ");

            const total = parseFloat(totalStr);
            const cups = parseInt(cupsStr, 10);
            const loyalty = loyaltyStr.trim().toLowerCase() === 'y';
            const happy = happyStr.trim().toLowerCase() === 'y';

            const res = calculateCoffeeDiscount(total, cups, loyalty, happy);
            console.log(`\nРезультат calculateCoffeeDiscount: ${res === -1 ? 'Помилка валідації (-1)' : `${res}% знижки`}\n`);
        } else if (choice === '2') {
            const receipt = await ask("Рядок чеку (receiptText): ");
            const prefix = await ask("Початкова літера (drinkPrefix): ");
            const minLenStr = await ask("Мінімальна довжина назви (minDrinkLength): ");

            const minLen = parseInt(minLenStr, 10);
            const res = countCoffeeOrderTokens(receipt, prefix, minLen);
            console.log(`\nРезультат countCoffeeOrderTokens: ${res === -1 ? 'Помилка валідації (-1)' : `Знайдено напоїв: ${res}`}\n`);
        } else {
            console.log("Невірний вибір, спробуйте ще раз.\n");
        }
    }

    rl.close();
}

async function main(): Promise<void> {
    const isInteractive = process.argv.includes('--interactive') || process.argv.includes('-i');

    if (isInteractive) {
        await runInteractiveMode();
    } else {
        runDiscountTests(discountTests);
        runTokenTests(tokenTests, "countCoffeeOrderTokens (Покриття операторів та рішень)");
        runTokenTests(tokenConditionTests, "countCoffeeOrderTokens (Покриття умов)");
    }
}

main();
