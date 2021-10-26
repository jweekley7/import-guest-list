/**
 * @OnlyCurrentDoc
 */

//If "Input Sheet" exists, does nothing. If not, creates a new sheet with that name.
function createNewSheet() {

  const allSheets = SpreadsheetApp.getActive().getSheets();
  // console.log("allSheets " + allSheets[0].getName() + ", " + allSheets[1].getName())
  // console.log("length = " + allSheets.length)

  const allSheetsNames = [];

  for (i=0; i<allSheets.length; i++) {

    allSheetsNames.push(allSheets[i].getName())
  }
  //console.log("allSheetsNames = " + allSheetsNames[0] + ", " + allSheetsNames[1]);

  if (allSheetsNames.indexOf("Input Sheet")>= 0) {

  //console.log("Exists -> " + allSheetsNames.indexOf("Input Sheet"))

  } else {

    console.log("no sheet > " + allSheetsNames.indexOf("Input Sheet"));
    
    const spreadsheet = SpreadsheetApp.getActive();
    spreadsheet.insertSheet("Input Sheet");

    const inputSheet = spreadsheet.getSheetByName("Input Sheet");

    //Creates cells with the following text:
    inputSheet.getRange("C1").setValue("Calendar Names:")
    inputSheet.getRange("A1").setValue("Selected Calendar:")
    inputSheet.getRange("A2").setValue("Selected Sheet:")
    inputSheet.getRange("A3").setValue("Email Address Range:")
    inputSheet.getRange("A5").setValue("Event Date:");
    inputSheet.getRange("D1").setValue("Sheet Names:");
    inputSheet.getRange("E1").setValue("Event Names:");
    inputSheet.getRange("F1").setValue("Email Addresses:");

    inputSheet.hideSheet();
  }

  protectHiddenSheet();
  checkForCalendars();
  getAllSheetNames();
}

function protectHiddenSheet(){

  const spreadsheet = SpreadsheetApp.getActive();
  const inputSheet = spreadsheet.getSheetByName("Input Sheet");

  inputSheet.protect().setWarningOnly(true);

}

function checkForCalendars() {

  const allCalendarArr = CalendarApp.getAllCalendars();
  console.log(allCalendarArr)
  if (allCalendarArr.length < 1) {

  } else if (allCalendarArr.length > 0) {

    getAllCalendarNames();
  }
}

function getAllCalendarNames() {

  const allCalendarArr = CalendarApp.getAllCalendars();

  const spreadsheet = SpreadsheetApp.getActive();
  const inputSheet = spreadsheet.getSheetByName("Input Sheet");

  const calendarNamesCell = inputSheet.getRange("C2");

  for (i=0; i<allCalendarArr.length; i++) {

    calendarNamesCell.offset(i,0).setValue(allCalendarArr[i].getName())
  }
}

function getAllSheetNames() {

  const allSheetsArr = SpreadsheetApp.getActive().getSheets();

  const spreadsheet = SpreadsheetApp.getActive();
  const inputSheet = spreadsheet.getSheetByName("Input Sheet");

  const sheetNamesCell = inputSheet.getRange("D2");

  for (i=0; i<allSheetsArr.length; i++) {

    if (allSheetsArr[i].isSheetHidden() == false) {
      
      sheetNamesCell.offset(i,0).setValue(allSheetsArr[i].getName())
      console.log(allSheetsArr[i].getName()+ " " + allSheetsArr[i].isSheetHidden())
    }
  }
}

function calendarNameDropDown() {
  const spreadsheet = SpreadsheetApp.getActive();
  const inputSheet = spreadsheet.getSheetByName("Input Sheet");

  const allCalendarArr = CalendarApp.getAllCalendars();

  const calendarNamesCell = inputSheet.getRange("C2");

  const columnCValues = inputSheet.getRange("C2:C").getValues();
  const numOfValuesInColumnC = columnCValues.filter(String).length;

  const calendarNamesRange = inputSheet.getRange(2,3,numOfValuesInColumnC);

  const data = calendarNamesRange.getValues();

  return data;
};

function sheetNameDropDown() {
  
  const spreadsheet = SpreadsheetApp.getActive();
  const inputSheet = spreadsheet.getSheetByName("Input Sheet");

  const allSheetsArr = SpreadsheetApp.getActive().getSheets();

  const sheetNamesCell = inputSheet.getRange("D2");

  const columnDValues = inputSheet.getRange("D2:D").getValues();
  const numOfValuesInColumnD = columnDValues.filter(String).length;

  const sheetNamesRange = inputSheet.getRange(2,4,numOfValuesInColumnD);

  const data = sheetNamesRange.getValues();

  return data;
};
