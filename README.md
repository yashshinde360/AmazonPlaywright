# AmazonPlaywright

#Playwright+BDD+Typescript Framework for UI automation of Amazon Web Application

*****************************************************************************************************************************

#Testcases: 
	Scenario 1 : Validate Login Functionality : Marked with tag @Test1
	Scenario 2 : Validate Search Functionality : Marked with tag @Test2
	Scenario 3 : Validate Wishlist Functionality : Marked with tag @Test3
	Scenario 4 : Validate Checkout Functionality : Marked with tag @Test4

*****************************************************************************************************************************

#All 4 Scenarios are covered/tested in single feature file : verify-login-search-wishlist-checkout-functionality.feature
Feature file location: src\tests\features\verify-login-search-wishlist-checkout-functionality.feature

*****************************************************************************************************************************

#Repository Discription: 
	=>Repository is build on Playwright+BDD+Typescript based customized framework

	=>Test files are under src/test folder: 
		features : Feature files
		fixture: Page fixture to handle page and timeouts
		pages: Typescript files to store all locators of pages
		steps: Files to connect feature files with test steps
		test-steps: Files in which actual action on element is done

	=>Test Results are stored under test-results:
		screenshots : Folder under which all screenshots are kept as test evidence
		html-formatter.html : Html file which has result of execution along with screenshots
		html-formatter.json : Json file for execution results

	=>cucumber.json : Configuration file to run the script

	=>package.json : It includes all devDependencies and custom scripts

*****************************************************************************************************************************
		
#How to set up the repository:
Pre-requisite:
	node installed
	VS code installed

Steps to set up:
1. Clone the repository with : git clone https://github.com/yashshinde360/AmazonPlaywright.git
2. Open the repository in VS Code
3. Install dependencies with : npm install
4. Update the credentials for Amazon : open src\tests\features\verify-login-search-wishlist-checkout-functionality.feature and update username and 				      password of amazon account(I have removed my credentials while pushing the code to github)
			      	Replace "TEST_USERNAME" with valid username   [Line number 9 : When user enters mobile number as "TEST_USERNAME"]
			      	Replace "TEST_PASSWORD" with valid password   [Line number 10: When user enters mobile number as "TEST_PASSWORD"]
5. To run the test : npm test

It will execute the testcase in headed mode with chromium browser
After successfull execution, we can find test results(screenshots, html and json reports) under test-results folder

*****************************************************************************************************************************

#Sample HTML Report:
<img width="960" alt="image" src="https://github.com/yashshinde360/AmazonPlaywright/assets/159560085/845e30ef-1443-4271-b692-02e7b86d7681">
