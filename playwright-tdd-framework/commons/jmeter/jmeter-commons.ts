import { exec } from 'child_process';
import { error } from 'console';
import { resolve } from 'dns';
import { stderr, stdout } from 'process';

export class JMeterCommons{

    //Common method to run from command line

    private executeCommand(command: string): Promise<string>{

        return new Promise((resolve, reject) =>{

            // run the command
            exec(command, (error, stdout, stderr) =>{

                if(error){
                    reject(`Error while Executing the command: ${command}, and error message: ${error.message}`);
                    return;
                }

                resolve(`${command} : Executed Successfully!`);
            });
        });

    }

    //Comman method to run JMeter Test plan
    async runJMeterTestPlan(jmxFile: string): Promise<void>{

        //Update the relative path of JMeter Folder structure
        console.log(`Running JMeter Test Plan: ${jmxFile}`);
        const projectRoot = process.cwd(); // gets the current working directory or project folder
        const jmeterBasePath = `${projectRoot}/tests/load/jmeter`;
        const jmeterToolPath = `${projectRoot}/tests/load/jmeter/bin/jmeter.bat`;
        const testPlanPath = `${jmeterBasePath}/testplan/${jmxFile}`;

        //Update the relative path of results folder
        console.log(`Generating results and reports for JMeter Test Plan: ${jmxFile}`);
        const timestamp = new Date().toISOString().replaceAll(/[^a-zA-Z0-9]/g, "");
        const resultsPath = `${jmeterBasePath}/results/TestResults_${timestamp}.csv`;
        const reportsPath = `${jmeterBasePath}/report-output`;

        //Run the JMeter test plan and generate the CSV test results. 
        console.log(`Executing JMeter Test Plan: ${jmxFile}`);

        const command = `${jmeterToolPath} -n -t ${testPlanPath} -l ${resultsPath}`;
        console.log(`Executing Command: ${command}`);
        await this.executeCommand(command);

        //Generate the HTML report from the CSV results using JMeter's reporting capabilities
        const reportsCommand = `"${jmeterToolPath}" -g "${resultsPath}" -o "${reportsPath}"`;
        console.log(`Generating HTML Report with Command: ${reportsCommand}`);
        await this.executeCommand(reportsCommand);

        console.log(`JMeter Test Plan Execution Completed: ${jmxFile}`);

    }

}