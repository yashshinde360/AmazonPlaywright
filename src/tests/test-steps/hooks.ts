import { BeforeAll, AfterAll, After, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { pageFixture } from "../fixture/pageFixture";
import * as fs from 'fs-extra'
import { newPage } from "./homeScreen.test.steps";

let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(pageFixture.timeout);

const deleteFolder = async() =>{
    try{
    fs.emptyDir('test-results/screenshots/');
    }
    catch(e){}
}

BeforeAll(async function () {
    await deleteFolder();
    browser = await chromium.launch({headless:false});
    context = await browser.newContext();
    page = await context.newPage()
    pageFixture.page = page;
})

After(async function ({pickle, result}) {
    let screenShotName: string;
    let screenShot: any;
    if(result?.status == Status.FAILED){
        screenShotName = `FAILED_${pickle.name}`;
    }
    else if(result?.status == Status.PASSED){
        screenShotName = `PASSED_${pickle.name}`;
    }
    else{
        screenShotName= pickle.name;
    }   
    const pages = context.pages();
    if(pages.length ==2){
        screenShot = await newPage.screenshot({path: `test-results/screenshots/${screenShotName}.png`,type: 'png'});
        this.attach(screenShot, 'image/png');
    }
    else{
        screenShot = await pageFixture.page.screenshot({path: `test-results/screenshots/${screenShotName}.png`,type: 'png'});
        this.attach(screenShot, 'image/png');
    }
})

AfterAll(async function () {
   await page.close();
   await browser.close();
})
