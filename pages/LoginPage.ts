import {Page,Locator} from '@playwright/test'
import {locators} from '../utility/locators'
import testData from '../data/testData.json'

export class LoginPage{
    readonly page: Page;
    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly loginBtnInput : Locator;
    constructor(page : Page){
        this.page = page;
        this.usernameInput = locators.loginPage.usernameId(page);
        this.passwordInput = locators.loginPage.passwordId(page);
        this.loginBtnInput = locators.loginPage.loginBtn(page);
    }

    async loadLoginPage(){
        await this.page.goto('/');
    }

    async login(){
        await this.usernameInput.fill(testData.loginPage.validUser.username);
        await this.passwordInput.fill(testData.loginPage.validUser.password);
        await this.loginBtnInput.click();
    }
}