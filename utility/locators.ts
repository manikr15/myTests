import{Page,Locator}from'@playwright/test'
export const locators={
    loginPage : {
        usernameId : (page : Page) : Locator => page.getByLabel('Username'),
        passwordId : (page : Page) : Locator => page.getByLabel('Password'),
        loginBtn : (page : Page) : Locator => page.getByRole('button',{name : 'Login'}),
    },

    inventoryPage : {

    },

    cartPage : {

    }
}