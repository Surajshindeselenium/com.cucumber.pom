@Search-Cars
Feature: Acceptance testing to validate search car page is working
  
  In order to validate that 
  search cars page is working 
  we will do acceptance testing

  @Search-Cars-Positive
  Scenario: Validate search car page
    Given I am on home page "https://www.carsguide.com.au/" of cars guild.com
    When I move to the menu
      | Menu          |
      | buy+sell      |
      | reviews       |
      | news          |
      | advice        |
      | pricing+specs |
      | labs          |
      | guids         |
    And click on "Search Cars" Search Cars link
    And select carbrand as "Ford" from the Any Make dropdown
    And select model as "1 Series M" from the Any Model dropdown
    And select location as "NSW-All" from the Any location dropdown
    And select Price as "$2,500" from the Price(max) dropdown
    And click on Find_My_Next_Car button
    Then I should see searched cars
    And page title should be "Bmw 1 Series M Under 2500 for Sale NSW"
