import{test as base, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

type MyFixture ={
    loginPage : LoginPage;
}

export const test=base.extend<MyFixture>({
    loginPage : async ({page},use) => {

        const loginPage = new LoginPage(page);
        use(loginPage);
        
    }
})

export {expect};