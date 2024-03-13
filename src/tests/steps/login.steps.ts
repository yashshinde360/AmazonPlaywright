import { Given, Then, When, setDefaultTimeout } from '@cucumber/cucumber'

import { Loginsteps } from '../test-steps/login.test.steps';
import { Browser } from '@playwright/test';
import { pageFixture } from '../fixture/pageFixture';

const loginsteps: Loginsteps = new Loginsteps();

setDefaultTimeout(pageFixture.timeout);

Given('user is on Amazon login page', async () => {
    await loginsteps.navigateTo("https://www.amazon.in/-/hi/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fspr%2Freturns%2Fgift&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_psr_desktop_in&openid.mode=checkid_setup&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");
});

When('user enters mobile number as {string}', async (mobileOrEmail : string) => {
    await loginsteps.enterMobileOrEmail(mobileOrEmail);
});

When('user enters password as {string}', async (password: string) => {
    await loginsteps.enterPassword(password);
});

When('user clicks on Sign in button', async () => {
    await loginsteps.clickOnSignInButton();
});

Then('user should be able to see Hello message', async () => {
    await loginsteps.verifyHelloText();
});