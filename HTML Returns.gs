/**
 * @OnlyCurrentDoc
 */

function calendarName(form_data) {
  
  const inputSheet = SpreadsheetApp.getActive().getSheetByName('Input Sheet');
  
  inputSheet.getRange("B1").setValue(form_data.calendar_name);

  inputSheet.hideSheet();
}

function addEmailRange(form_data) {

  const inputSheet = SpreadsheetApp.getActive().getSheetByName('Input Sheet');
  
  inputSheet.getRange("B3").setValue(form_data.email_range);

  inputSheet.getRange("B2").setValue(form_data.sheet_name);

  inputSheet.hideSheet();
  alertBadEmailAddress();
}

function eventDate(form_data) {

  const inputSheet = SpreadsheetApp.getActive().getSheetByName('Input Sheet');
  
  inputSheet.getRange("B5").setValue(form_data.event_date);

  checkForEventsOnThatDay();
  modifyEventSheet();
}

function eventTitle(form_data) {

  const inputSheet = SpreadsheetApp.getActive().getSheetByName('Input Sheet');
  
  inputSheet.getRange("A6").setValue("Event to modify:");
  inputSheet.getRange("B6").setValue(form_data.event_title);

  inputSheet.hideSheet();
  updateGuestList();
}
