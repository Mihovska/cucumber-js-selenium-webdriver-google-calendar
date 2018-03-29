Feature: Manage events guests


Scenario: Invite guests to your event
  Given The event page is open
   When Go to "Add guests" field
   And Enter the guest's email address in the box
   And Press Enter key
   Then The guest email should be added to the guest's list

Scenario: Mark guest's attendance as optional
  Given The guests list is open
   When Hover over the guest name
   And Click "Mark as optional"
   Then "Optional" option is added to the guest

Scenario: Delete a guest from event list
  Given The guest email is in the list
   When Click on the "Remove" button
   Then The guest is deleted from the event list


