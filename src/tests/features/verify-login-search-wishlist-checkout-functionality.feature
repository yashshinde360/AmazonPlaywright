Feature: To verify Login, Search Product, Wishlist and Checkout Functionality of Amazon
    As an user
    I will login to Amazon
    So that I can verify Login, Search Product, Wishlist and Checkout Functionality of Amazon

@Test1
Scenario: verify Login Functionality of Amazon
    Given user is on Amazon login page
    When user enters mobile number as "TEST_USERNAME"
    And user enters password as "TEST_PASSWORD"
    And user clicks on Sign in button
    Then user should be able to see Hello message

@Test2 @Test3
Scenario: verify Search and Wishlist Functionality of Amazon
    Given user is on Amazon Home page
    When user searches product "Nothing Phone 1"
    And user selects "Nothing Phone 1" from searched list
    And user clicks on Add to Wish List button
    Then user verifies Item added success message

@Test4
Scenario: verify Checkout Functionality of Amazon
    Given user is on Add to Wish List Popup
    When user clicks on 'View Your List' button
    And user clicks on 'Add to Cart' button
    And user clicks on 'Proceed to checkout' button
    Then user should be on Checkout Page


    