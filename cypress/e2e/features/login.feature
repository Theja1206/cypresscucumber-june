Feature:Login Sauce Demo

Scenario:Login
    Given user is on a sauce Demo
    When user logged in with "standard_user" and "secret_sauce"
    Then user should login successful