// Модульне тестування функцій кав'ярні
// Використовує вбудований тестовий фреймворк node:test та модуль перевірок node:assert/strict
// Структура тестів відповідає патерну Arrange-Act-Assert

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculateCoffeeDiscount, countCoffeeOrderTokens } from './functions.ts';
import {
    equivalencePartitioningTests,
    boundaryValueTests,
    errorGuessingTests,
    causeEffectTests,
    tokenBlackBoxTests
} from './tests.ts';

describe('Модульні тести: calculateCoffeeDiscount', () => {
    describe('Метод 1: Еквівалентне розбиття', () => {
        for (const tc of equivalencePartitioningTests) {
            it(`[${tc.id}] ${tc.description}`, () => {
                // Arrange (Підготовка даних)
                const [orderTotal, cupsCount, hasLoyaltyCard, isHappyHour] = tc.input;
                const expected = tc.expected;

                // Act (Виклик тестованої функції)
                const actual = calculateCoffeeDiscount(orderTotal, cupsCount, hasLoyaltyCard, isHappyHour);

                // Assert (Перевірка очікуваного результату через Assert)
                assert.strictEqual(actual, expected, `Тест ${tc.id} не пройшов`);
            });
        }
    });

    describe('Метод 2: Аналіз граничних значень', () => {
        for (const tc of boundaryValueTests) {
            it(`[${tc.id}] ${tc.description}`, () => {
                // Arrange
                const [orderTotal, cupsCount, hasLoyaltyCard, isHappyHour] = tc.input;
                const expected = tc.expected;

                // Act
                const actual = calculateCoffeeDiscount(orderTotal, cupsCount, hasLoyaltyCard, isHappyHour);

                // Assert
                assert.strictEqual(actual, expected, `Тест ${tc.id} не пройшов`);
            });
        }
    });

    describe('Метод 3: Припущення про помилку', () => {
        for (const tc of errorGuessingTests) {
            it(`[${tc.id}] ${tc.description}`, () => {
                // Arrange
                const [orderTotal, cupsCount, hasLoyaltyCard, isHappyHour] = tc.input;
                const expected = tc.expected;

                // Act
                const actual = calculateCoffeeDiscount(orderTotal, cupsCount, hasLoyaltyCard, isHappyHour);

                // Assert
                assert.strictEqual(actual, expected, `Тест ${tc.id} не пройшов`);
            });
        }
    });

    describe('Метод 4: Функціональні діаграми', () => {
        for (const tc of causeEffectTests) {
            it(`[${tc.id}] ${tc.description}`, () => {
                // Arrange
                const [orderTotal, cupsCount, hasLoyaltyCard, isHappyHour] = tc.input;
                const expected = tc.expected;

                // Act
                const actual = calculateCoffeeDiscount(orderTotal, cupsCount, hasLoyaltyCard, isHappyHour);

                // Assert
                assert.strictEqual(actual, expected, `Тест ${tc.id} не пройшов`);
            });
        }
    });
});

describe('Модульні тести: countCoffeeOrderTokens', () => {
    for (const tc of tokenBlackBoxTests) {
        it(`[${tc.id}] ${tc.description}`, () => {
            // Arrange
            const { receipt, prefix, minLen, expected } = tc;

            // Act
            const actual = countCoffeeOrderTokens(receipt, prefix, minLen);

            // Assert
            assert.strictEqual(actual, expected, `Тест ${tc.id} не пройшов`);
        });
    }
});
