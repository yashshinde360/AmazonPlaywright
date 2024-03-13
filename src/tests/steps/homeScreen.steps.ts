import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";

import { HomeScreenSteps } from "../test-steps/homeScreen.test.steps";
import { Loginsteps } from "../test-steps/login.test.steps";
import { pageFixture } from "../fixture/pageFixture";

const homeScreenSteps:HomeScreenSteps = new HomeScreenSteps();
const loginsteps:Loginsteps = new Loginsteps();

setDefaultTimeout(pageFixture.timeout);

Given('user is on Amazon Home page', async () => {
    await loginsteps.verifyHelloText();
});


When('user searches product {string}', async (product: string) => {
   await homeScreenSteps.searchProduct(product);
});

When('user selects {string} from searched list', async (product: string) => {
    await homeScreenSteps.selectProduct(product);
 });

When('user clicks on Add to Wish List button', async () => {
    await homeScreenSteps.clickOnAddToWishListButton();
});

Then('user verifies Item added success message', async () =>  {
    await homeScreenSteps.verifyItemAdded()
});