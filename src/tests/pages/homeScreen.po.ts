import { Browser, ElementHandle, Locator, Page } from '@playwright/test'
import { pageFixture } from '../fixture/pageFixture';
import { newPage } from '../test-steps/homeScreen.test.steps';

let page: Page
let browser: Browser;


export class HomePage{
    public getSearchBox(): Locator{
       return pageFixture.page.locator('[aria-label="Search Amazon.in"]');
    }

    public getSearchButton(): Locator{
      return pageFixture.page.locator('.nav-search-submit input');
    }

   public getSearchedProducts(): Promise<Array<Locator>>{
      return pageFixture.page.locator("//a[span[@class='a-size-medium a-color-base a-text-normal']]").all();
   }

   public getAddToWishListButton(): Locator{
      return newPage.locator('[title="Add to Wish List"]');
   }

   public getItemAddedMessage(): Locator{
      return newPage.locator("//span[text()='One item added to']");
   }
   
   public getMessageOnWishlistBox(): Locator{
      return newPage.locator('#huc-atwl-header-section');
   }
}