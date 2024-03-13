import { Locator } from "@playwright/test";
 
import { newPage } from "../test-steps/homeScreen.test.steps";

export class YourListPage{
    public getAddToWishListHeading(): Locator{
        return newPage.getByRole('heading', { name: 'Add to Wish List' });
    }

    public getButton(buttonText: string): Locator{
        return newPage.getByRole('link', { name: `${buttonText}` }).first();
    }

    public getCheckoutHeading(): Locator{
        return newPage.getByRole('heading', { name: 'Checkout' });
    }
}