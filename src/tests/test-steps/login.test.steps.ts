import { expect } from "@playwright/test";
import { LoginPage } from "../pages/login.po";
import { setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../fixture/pageFixture";

const loginPage:LoginPage = new LoginPage();

setDefaultTimeout(pageFixture.timeout);

export class Loginsteps{
    public async navigateTo(url: string): Promise<void>{
        await pageFixture.page.goto(url); 
    }

    public async enterMobileOrEmail(mobileOrEmail: string): Promise<void>{
        await loginPage.getEmailOrMobileField().fill(mobileOrEmail);
    }

    public async enterPassword(password: string): Promise<void>{
        await loginPage.getPasswordField().fill(password);
    }

    public async clickOnSignInButton(): Promise<void>{
        await loginPage.getSignInButton().click();
    }

    public async verifyHelloText(): Promise<void>{
        expect(await loginPage.getHelloText().innerText()).toContain("Hello")
    }
}