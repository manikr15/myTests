import {test,expect} from '../utility/customFixtures'

test('Login Test',{ tag: '@login'}, async ({loginPage,page}) => {
    await loginPage.loadLoginPage();
    await loginPage.login();
    await expect(page).toHaveURL(/inventory/);
})