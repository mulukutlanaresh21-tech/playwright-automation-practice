import {test} from '@playwright/test';
import { APICommons } from '../../commons/api/api-commons.ts';
import testData from '../../testdata/api/data.json' with {type: 'json'};

test.describe("GitHub API Testing",  () => {

    let apiCommons: APICommons;

    //Method to Prepare API request context before each and every test case. 
    test.beforeEach(async() =>{
        apiCommons = new APICommons();
        await apiCommons.initializeRequestContext();
    });

    //Test Case 1: Request to create duplicate repository with in github
    test("Create Duplicate Repository", async() => {
        const data = testData.duplicateRepo;
        await apiCommons.getResponse(data.requestType, data.endPoint, data.body);
        await apiCommons.validateStatusCode(data.expectedStatusCode);
        await apiCommons.validateStatusMessage(data.expectedStatusMessage);
        await apiCommons.validateReponseBody('message', data.expErrorMessage);
    });

    //Test Case 2: Request to create a valid repository in github
    test("Create Valid Repository", async() => {
        const data = testData.validRepo;
        await apiCommons.getResponse(data.requestType, data.endPoint, data.body);
        await apiCommons.validateStatusCode(data.expectedStatusCode);
        await apiCommons.validateStatusMessage(data.expectedStatusMessage);
        await apiCommons.validateReponseBody('name', data.expRepoName);
    });

    //Test Case 3: Request to Update the Existing repository
    test("Update the Existing Repository", async() => {
        const data = testData.updateRepo;
        await apiCommons.getResponse(data.requestType, data.endPoint, data.body);
        await apiCommons.validateStatusCode(data.expectedStatusCode);
        await apiCommons.validateStatusMessage(data.expectedStatusMessage);
        await apiCommons.validateReponseBody('name', data.expRepoName);
        await apiCommons.validateReponseBody('visibility', data.expVisivility);
    });

    //Test Case 4: Request to Get the repository
    test("Get the Repository", async() => {
        const data = testData.getRepo;
        await apiCommons.getResponse(data.requestType, data.endPoint);
        await apiCommons.validateStatusCode(data.expectedStatusCode);
        await apiCommons.validateStatusMessage(data.expectedStatusMessage);
        await apiCommons.validateReponseBody('name', data.expRepoName);
        await apiCommons.validateReponseBody('visibility', data.expVisivility);
    });

    //Test Case 5: Request to delete the repository created 
    test("Delete Repository", async() => {
        const data = testData.deleteRepo;
        await apiCommons.getResponse(data.requestType, data.endPoint);
        await apiCommons.validateStatusCode(data.expectedStatusCode);
        await apiCommons.validateStatusMessage(data.expectedStatusMessage);
    });

})