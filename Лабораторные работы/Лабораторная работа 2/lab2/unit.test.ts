import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculateCoffeeDiscount, countCoffeeOrderTokens } from './functions.ts';
import {
    equivalencePartitioningTests,
    boundaryValueTests,
    errorGuessingTests,
    causeEffectTests,
    tokenEquivalenceTests,
    tokenBoundaryTests,
    tokenErrorGuessingTests,
    tokenCauseEffectTests
} from './tests.ts';

describe('calculateCoffeeDiscount', () => {
    describe('Еквівалентне розбиття', () => {
        for (const tc of equivalencePartitioningTests) {
            it(`[${tc.id}] ${tc.description}`, () => {
                const [orderTotal, cupsCount, hasLoyaltyCard, isHappyHour] = tc.input;
                const actual = calculateCoffeeDiscount(orderTotal, cupsCount, hasLoyaltyCard, isHappyHour);
                assert.strictEqual(actual, tc.expected, `Тест ${tc.id} не пройшов`);
            });
        }
    });

    describe('Аналіз граничних значень', () => {
        for (const tc of boundaryValueTests) {
            it(`[${tc.id}] ${tc.description}`, () => {
                const [orderTotal, cupsCount, hasLoyaltyCard, isHappyHour] = tc.input;
                const actual = calculateCoffeeDiscount(orderTotal, cupsCount, hasLoyaltyCard, isHappyHour);
                assert.strictEqual(actual, tc.expected, `Тест ${tc.id} не пройшов`);
            });
        }
    });

    describe('Припущення про помилку', () => {
        for (const tc of errorGuessingTests) {
            it(`[${tc.id}] ${tc.description}`, () => {
                const [orderTotal, cupsCount, hasLoyaltyCard, isHappyHour] = tc.input;
                const actual = calculateCoffeeDiscount(orderTotal, cupsCount, hasLoyaltyCard, isHappyHour);
                assert.strictEqual(actual, tc.expected, `Тест ${tc.id} не пройшов`);
            });
        }
    });

    describe('Функціональні діаграми', () => {
        for (const tc of causeEffectTests) {
            it(`[${tc.id}] ${tc.description}`, () => {
                const [orderTotal, cupsCount, hasLoyaltyCard, isHappyHour] = tc.input;
                const actual = calculateCoffeeDiscount(orderTotal, cupsCount, hasLoyaltyCard, isHappyHour);
                assert.strictEqual(actual, tc.expected, `Тест ${tc.id} не пройшов`);
            });
        }
    });
});

describe('countCoffeeOrderTokens', () => {
    describe('Еквівалентне розбиття', () => {
        for (const tc of tokenEquivalenceTests) {
            it(`[${tc.id}] ${tc.description}`, () => {
                const actual = countCoffeeOrderTokens(tc.receipt, tc.prefix, tc.minLen);
                assert.strictEqual(actual, tc.expected, `Тест ${tc.id} не пройшов`);
            });
        }
    });

    describe('Аналіз граничних значень', () => {
        for (const tc of tokenBoundaryTests) {
            it(`[${tc.id}] ${tc.description}`, () => {
                const actual = countCoffeeOrderTokens(tc.receipt, tc.prefix, tc.minLen);
                assert.strictEqual(actual, tc.expected, `Тест ${tc.id} не пройшов`);
            });
        }
    });

    describe('Припущення про помилку', () => {
        for (const tc of tokenErrorGuessingTests) {
            it(`[${tc.id}] ${tc.description}`, () => {
                const actual = countCoffeeOrderTokens(tc.receipt, tc.prefix, tc.minLen);
                assert.strictEqual(actual, tc.expected, `Тест ${tc.id} не пройшов`);
            });
        }
    });

    describe('Функціональні діаграми', () => {
        for (const tc of tokenCauseEffectTests) {
            it(`[${tc.id}] ${tc.description}`, () => {
                const actual = countCoffeeOrderTokens(tc.receipt, tc.prefix, tc.minLen);
                assert.strictEqual(actual, tc.expected, `Тест ${tc.id} не пройшов`);
            });
        }
    });
});
