import { test, expect } from '@playwright/test';

//test.only() ==> It will execute only particular test case by skipping all other test cases.
//test.skip() ==> It will skip the particular test case and execute all other test cases.
//test.fail() ==> I'm expecting a particular test case to be failed. Highlight this test case if it is not failed.
//test.fixme() ==> I am sure this test case is not working. Please ignore even if it is failed.
//test.slow() ==> Playwright will consider that there are loading issues, and it may face slowness in the test execution.
// It can increase the timeout 3x more than the normal timeout.


//grouping of test cases
test.describe("group1", async () => {

    test.fail("Group 1 - Test 1", async () => {
        console.log("Group 1 - Test 1 is Executing...");
        expect(1).toBe(2);
    }); // it will show as passed

    test.fixme("Group 1 - Test 2", async () => {
        console.log("Group 1 - Test 2 is Executing...");
        expect(1).toBe(2);
    }); // it will show as ignored

    test("Group 1 - Test 3", async () => {
        test.slow(); //increase the timeout for this test case will be * 3 times of default timeout
        console.log("Group 1 - Test 3 is Executing...")
        await new Promise(resolve => setTimeout(resolve, 35000));//wait for 35 seconds
    });

});

test.describe("group2", async () => {

    test("Group 2 - Test 1", async () => {
        test.setTimeout(180000);
        console.log("Group 2 - Test 1 is Executing...")
        //await new Promise(resolve => setTimeout(resolve, 100000));//wait for 100 seconds
    });

    test("Group 2 - Test 2", async () => {
        console.log("Group 2 - Test 2 is Executing...")
    });
})

// to run group of test cases with group name:
// npx playwright test --grep "group2"