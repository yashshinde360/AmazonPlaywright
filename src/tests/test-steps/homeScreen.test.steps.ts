import { Locator, Page, expect } from "@playwright/test";

import { HomePage } from "../pages/homeScreen.po"
import { pageFixture } from "../fixture/pageFixture";
import { LoginPage } from "../pages/login.po";
import { setDefaultTimeout } from "@cucumber/cucumber";

const loginPage: LoginPage = new LoginPage();
const homePage: HomePage = new HomePage();

export let newPage: Page

setDefaultTimeout(pageFixture.timeout);

export class HomeScreenSteps {
    public async searchProduct(product: string): Promise<void> {
        await homePage.getSearchBox().fill(product);
        await homePage.getSearchButton().click();
    }

    public async selectProduct(product: string): Promise<void> {
        const newPagePromise = pageFixture.page.waitForEvent('popup');
        await pageFixture.page.waitForTimeout(2000)
        const productList = await homePage.getSearchedProducts();
        for (let i = 0; i < productList.length; i++) {
            if ((await productList[i].innerText()).includes(product)) {
                productList[i].click();
                break;
            }
        }
        newPage = await newPagePromise;
    }

    public async clickOnAddToWishListButton(): Promise<void> {
        await newPage.waitForLoadState('load')
        await homePage.getAddToWishListButton().click();
    }

    public async verifyItemAdded(): Promise<void> {
        await expect(homePage.getMessageOnWishlistBox()).toBeVisible();
        if (await homePage.getItemAddedMessage().isVisible()) {
            await expect(homePage.getMessageOnWishlistBox()).toContainText("One item added to");
        }
        else {
            await expect(homePage.getMessageOnWishlistBox()).toContainText("This item was already in");
        }
    }
}