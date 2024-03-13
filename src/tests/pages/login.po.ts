import { Browser, Locator, Page } from '@playwright/test'
import { pageFixture } from '../fixture/pageFixture';

let page: Page
let browser: Browser;
export class LoginPage{
    public getEmailOrMobileField(): Locator{
       return pageFixture.page.getByLabel('Email or mobile phone number');
    }

    public getPasswordField(): Locator{
        return pageFixture.page.locator('[name="password"]');
    }

    public getSignInButton(): Locator{
        return pageFixture.page.getByLabel('Sign in');
    }

    public getHelloText(): Locator{
        return pageFixture.page.locator('#nav-link-accountList-nav-line-1');
    }
}