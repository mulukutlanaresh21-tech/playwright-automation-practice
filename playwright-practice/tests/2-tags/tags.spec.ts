import { test, expect } from '@playwright/test';


test('testcase1', { tag: '@smoke' }, async ({ }) => {
    console.log('testcase1');
});

test('testcase2', { tag: '@sanity' }, async ({ }) => {
    console.log('testcase2');
});

test('testcase3', { tag: '@regression' }, async ({ }) => {
    console.log('testcase3');
});

test('testcase4', { tag: ['@smoke', '@regression', '@sanity'] }, async ({ }) => {
    console.log('testcase4');
});

// to run group of test cases with tag name:
// npx playwright test --grep "@smoke"