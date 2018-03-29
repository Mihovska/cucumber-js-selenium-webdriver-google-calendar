Feature: Schedule events


Scenario: Successfully add a new event
  Given User is on the day time slot page
   When Click on an empty time slot in the calendar grid
   And Write in the "Add a title" field
   And Click "Save"
   Then "Event saved" message should be seen


Scenario: Edit an existing event
  Given User have open a created event
   When Click on "Edit event" button
   Then The event edit page is opened


Scenario: Save an event
  Given The event page is open
   And Change has been made
   When Click on "Save" button
   Then The event is saved and the main calendar page is shown


Scenario: An event is deleted
  Given The chosen event in calendar grid is clicked
   When Click on "Delete event" button
   Then "Event deleted" message should be seen


Scenario: Restore a deleted event
  Given The Bin page is open
  When Click on "Restore" button
  Then "Event restored" message should be seen

