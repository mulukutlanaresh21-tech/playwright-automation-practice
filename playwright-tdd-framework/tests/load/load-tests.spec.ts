import { test } from '@playwright/test';
import { JMeterCommons } from '../../commons/jmeter/jmeter-commons.ts';


test.describe("JMeter Load Test", async()=>{

    let jmeter: JMeterCommons;

    test.beforeEach(async() =>{
        jmeter = new JMeterCommons();
    })

    test("Git Hub API Load Testing", async() => {
        test.setTimeout(180000) // Set timeout to 3 minutes for load test execution
        await jmeter.runJMeterTestPlan("GithubAPILoadTesting.jmx");
    })
})