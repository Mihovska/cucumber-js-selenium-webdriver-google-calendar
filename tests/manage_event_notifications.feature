Feature: Manage event notifications

Background:
  Given The "Settings" page is open
  When "Event setting" menu is clicked
  Then "Setting saved" message is shown


Scenario: Switch off the notifications
  And "Notification" drop down menu is set to "Off"


Scenario: Swith to Desktop notification option
  When "Notification" drop down menu is set to "Desktop notifications"


Scenario: Switch to Alerts notification option
  When "Notification" drop down menu is set to "Alerts"