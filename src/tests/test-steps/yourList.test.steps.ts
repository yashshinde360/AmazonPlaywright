
import { expect } from "@playwright/test";
import { YourListPage } from "../pages/yourList.po"
import { newPage } from "./homeScreen.test.steps";
import { setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../fixture/pageFixture";

const yourListPage:YourListPage = new YourListPage();

setDefaultTimeout(pageFixture.timeout);

export class YourListSteps{
    public async verifyAddToWishListPopup(): Promise<void>{
        await expect(yourListPage.getAddToWishListHeading()).toBeVisible();
    }

    public async clickOnButton(buttonText: string): Promise<void>{
        try{await newPage.waitForLoadState('load');
    }
    catch(e){ 
    }
        await yourListPage.getButton(buttonText).click();
    }

    public async verifyCheckoutPage(): Promise<void>{
        await expect(yourListPage.getCheckoutHeading()).toBeVisible();
    }
}