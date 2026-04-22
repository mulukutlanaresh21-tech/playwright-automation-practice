import { test, expect, request } from '@playwright/test';
import config from '../../config/config.json' with {type: 'json'};

export class APICommons{
    private requestContext: any;
    private response: any;

    //Method to Create the request context (Adding base URL, headers, and authorization details before sending the request to the API)
    async initializeRequestContext(){
        this.requestContext = await request.newContext({
            baseURL: config.api.base_url,
            extraHTTPHeaders: {
                'Authorization': config.api.bearer_token,
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2026-03-10'
            }
        })
    }

    //Common method to send a request and get the response. 
    async getResponse(requestType: string, endPoint: string, requestBody?: any): Promise<void>{
        switch(requestType.toLocaleLowerCase()){
            case 'get':
                this.response = await this.requestContext.get(endPoint);
                break;
            case 'post':
                this.response = await this.requestContext.post(endPoint, {data: requestBody});
                break;
            case 'put':
                this.response = await this.requestContext.put(endPoint, {data: requestBody});
                break;
            case 'patch':
                this.response = await this.requestContext.patch(endPoint, {data: requestBody});
                break;
            case 'delete':
                this.response = await this.requestContext.delete(endPoint);
                break;
            default:
                throw new Error(`Unsupproted requestType: ${requestType}`);

        }

        //wait for 2 seconds to get the response.
        await new Promise(response => setTimeout(response, 2000));

        if (requestType.toLowerCase() !== 'delete') {
            console.log(await this.response.json());
        }

    }

    // Method to validate the status code
    async validateStatusCode(expectedStatusCode: number){
        const actualStatusCode = await this.response.status();
        expect(actualStatusCode).toBe(expectedStatusCode);
    }

    // Method To validate the status message. 
    async validateStatusMessage(expectedStatusMsg: string){
        const actualStatusMsg = await this.response.statusText();
        expect(actualStatusMsg).toBe(expectedStatusMsg);
    }

    //Method to Validate the Response Body
    async validateReponseBody(key: string, expValue: any){
        const responseBody = await this.response.json();
        const actualValue = responseBody[key.toLowerCase()];
        expect(actualValue).toBe(expValue);
    }

    //Method to Validate the Response Headers
    async validateReponseHeaders(headerKey: string, expHeaderValue: any){
        const responseHeader = await this.response.headers();
        const actualHeaderValue = responseHeader[headerKey.toLowerCase()];
        expect(actualHeaderValue).toBe(expHeaderValue);
    }

    //Method to validate the schema of the response body
    async validateReponseSchema(key: string, expType: string){
        const responseBody = await this.response.json();
        const actualValue = responseBody[key.toLowerCase()];
        const type = typeof actualValue;
        expect(type).toBe(expType);
    }

    //Method to validate the response cookies. 

    async validateResponseCookie(cookieName: string, expCookieValue: string){
        const cookie = await this.response.cookie();
        const actualCookieValue = cookie[cookieName.toLowerCase()];
        expect(actualCookieValue).toBe(expCookieValue);
    }
}