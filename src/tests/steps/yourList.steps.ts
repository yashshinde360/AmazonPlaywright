import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";

import { YourListSteps } from "../test-steps/yourList.test.steps";
import { pageFixture } from "../fixture/pageFixture";

const yourListSteps:YourListSteps = new YourListSteps();

setDefaultTimeout(pageFixture.timeout);

Given('user is on Add to Wish List Popup', async () => {
    await yourListSteps.verifyAddToWishListPopup();
});

When('user clicks on {string} button', async (buttonText: string) => {
    await yourListSteps.clickOnButton(buttonText);
});

Then('user should be on Checkout Page', async () => {
    await yourListSteps.verifyCheckoutPage();
});