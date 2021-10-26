/**
 * @OnlyCurrentDoc
 */

function modifyEventSheet() {
  
  const spreadsheet = SpreadsheetApp.getActive();
  const inputSheet = spreadsheet.getSheetByName("Input Sheet");
  
  inputSheet.getRange("A5").setValue("Event Date:");
  
  inputSheet.getRange("E1").setValue("Event Names:");

  getEventNames();
}

function checkForEvents() {
  const spreadsheet = SpreadsheetApp.getActive();
  const inputSheet = spreadsheet.getSheetByName("Input Sheet"); 

  const calendarName = inputSheet.getRange("B1").getValue();

  const sheetName = inputSheet.getRange("B2");
  const userEventDate = new Date (inputSheet.getRange("B5").getDisplayValue());
  const eventsForUserDate = inputSheet.getRange("E2");

  const scriptTimeZone = Session.getScriptTimeZone();
  const sheetTimeZone = SpreadsheetApp.getActive().getSpreadsheetTimeZone();

  const correctEventTime = new Date(Utilities.formatDate(userEventDate,sheetTimeZone, "dd MMMM yyyy"));

  const userCalendar = CalendarApp.getCalendarsByName(calendarName);

  const userCalendarEvents = userCalendar[0].getEventsForDay(correctEventTime);

  const eventsTitleArr = [];

  for (i=0; i<userCalendarEvents.length; i++) {

    eventsForUserDate.offset(i,0).setValue(userCalendarEvents[i].getTitle());
    
  }

}

function getEventNames() {

  const spreadsheet = SpreadsheetApp.getActive();
  const inputSheet = spreadsheet.getSheetByName("Input Sheet"); 

  const calendarName = inputSheet.getRange("B1").getValue();

  const sheetName = inputSheet.getRange("B2");
  const userEventDate = new Date (inputSheet.getRange("B5").getDisplayValue());
  const eventsForUserDate = inputSheet.getRange("E2");

  const scriptTimeZone = Session.getScriptTimeZone();
  const sheetTimeZone = SpreadsheetApp.getActive().getSpreadsheetTimeZone();

  const correctEventTime = new Date(Utilities.formatDate(userEventDate,sheetTimeZone, "dd MMMM yyyy"));

  const userCalendar = CalendarApp.getCalendarsByName(calendarName);

  const userCalendarEvents = userCalendar[0].getEventsForDay(correctEventTime);

  const eventsTitleArr = [];

  for (i=0; i<userCalendarEvents.length; i++) {

    eventsForUserDate.offset(i,0).setValue(userCalendarEvents[i].getTitle());
    eventsTitleArr.push(userCalendarEvents[i].getTitle())
  }
}

function eventTitlesDropDown() {
  const spreadsheet = SpreadsheetApp.getActive();
  const inputSheet = spreadsheet.getSheetByName("Input Sheet");

  const columnEValues = inputSheet.getRange("E2:E").getValues();
  const numOfValuesInColumnE = columnEValues.filter(String).length;

  const eventsTitleRange = inputSheet.getRange(2,5,numOfValuesInColumnE);
  const data = eventsTitleRange.getValues();

  return data;
};

function updateGuestList() {

  const spreadsheet = SpreadsheetApp.getActive();
  const inputSheet = spreadsheet.getSheetByName("Input Sheet");

  const calendarName = inputSheet.getRange("B1").getValue();
  const sheetName = inputSheet.getRange("B2").getDisplayValue();

  const userEventDate = new Date (inputSheet.getRange("B5").getDisplayValue());
  const eventsForUserDate = inputSheet.getRange("E2");
  const userEventTitle = inputSheet.getRange("B6").getValue();

  const emailAddressesToAdd = checkEmailFormat().goodEmails;
  
  const scriptTimeZone = Session.getScriptTimeZone();
  const sheetTimeZone = SpreadsheetApp.getActive().getSpreadsheetTimeZone();

  const correctEventTime = new Date(Utilities.formatDate(userEventDate,sheetTimeZone, "dd MMMM yyyy"));

  const userCalendar = CalendarApp.getCalendarsByName(calendarName);

  const userCalendarEvents = userCalendar[0].getEventsForDay(correctEventTime);

  for (i=0; i<emailAddressesToAdd.length; i++) {
    
    if (emailAddressesToAdd[i] != "") {
      
      for (j=0; j<userCalendarEvents.length; j++) {

        if (userCalendarEvents[j].getTitle() == userEventTitle) {

          const eventToModify = userCalendarEvents[j];
          eventToModify.addGuest(emailAddressesToAdd[i])
        }
      }
    }
  }
  toSuccessPage();
  clearData();
}

function clearData() {

  const spreadsheet = SpreadsheetApp.getActive();
  const inputSheet = spreadsheet.getSheetByName("Input Sheet");
  spreadsheet.deleteSheet(inputSheet);

  // const dataRange = inputSheet.getRangeList(["b1:b6","c2:c","d2:d","e2:e"]);
  // dataRange.clearContent();
}
