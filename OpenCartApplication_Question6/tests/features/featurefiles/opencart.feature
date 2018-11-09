Feature: opencart invalid login functionality

@opencart

  Scenario Outline : InvalidLogin_tc1 _ To verify whether user is able to see the error message while invalid login

  Given launch the application
  Then the user should see the title
  When the user logs in with invalid credentials
  Then the user should see proper error message for invalid credentials