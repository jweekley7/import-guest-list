/**
 * @OnlyCurrentDoc
 */

function checkForEventsOnThatDay() {

  const spreadsheet = SpreadsheetApp.getActive();
  const inputSheet = spreadsheet.getSheetByName("Input Sheet"); 

  const calendarName = inputSheet.getRange("B1").getValue();

  const userDateInput = inputSheet.getRange("B5").getDisplayValue();

  const sheetName = inputSheet.getRange("B2");
  const userEventDate = new Date (inputSheet.getRange("B5").getDisplayValue());
  const eventsForUserDate = inputSheet.getRange("E2");

  const scriptTimeZone = Session.getScriptTimeZone();
  const sheetTimeZone = SpreadsheetApp.getActive().getSpreadsheetTimeZone();

  const correctEventTime = new Date(Utilities.formatDate(userEventDate,sheetTimeZone, "dd MMMM yyyy"));

  const userCalendar = CalendarApp.getCalendarsByName(calendarName);

  const userCalendarEvents = userCalendar[0].getEventsForDay(correctEventTime);

  if (userCalendarEvents.length < 1) {

    SpreadsheetApp.getUi().alert("No events found on calendar: " + userCalendar + " for " + userDateInput + ". Please choose a different date.");
    toModifyEventPage1();

  
  } else {

    toModifyEventPage2();
  }
}
