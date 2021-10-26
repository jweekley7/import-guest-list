/**
 * @OnlyCurrentDoc
 */

function checkEmailFormat() {

  const spreadsheet = SpreadsheetApp.getActive();
  const inputSheet = spreadsheet.getSheetByName("Input Sheet");

  const emailAddressRange = inputSheet.getRange("B3").getDisplayValue();
  const sheetName = inputSheet.getRange("B2").getDisplayValue();

  const userSheet = spreadsheet.getSheetByName(sheetName);

  const emailAddressesToAdd = userSheet.getRange(emailAddressRange).getValues();

  const errorEmails = [];
  const goodEmails = [];
  
  const goodAndBadEmails = {
    "errorEmails": errorEmails,
    "goodEmails": goodEmails
  };

  for (i=0; i<emailAddressesToAdd.length; i++) {
    
    if(emailAddressesToAdd[i] != "") {

      if (!emailAddressesToAdd[i].toString().includes('@') || !emailAddressesToAdd[i].toString().includes('.')) {

        errorEmails.push(" " + emailAddressesToAdd[i])

      } else if (emailAddressesToAdd[i].toString().includes('@')) {

        goodEmails.push(emailAddressesToAdd[i])
      }
    }
  }

  return goodAndBadEmails;
}

function alertBadEmailAddress() {
  
  const badEmails = checkEmailFormat().errorEmails;

  if (badEmails.length > 0) {

    if (badEmails.length < 5) {
      
      SpreadsheetApp.getUi().alert("Invalid email(s) detected: " + badEmails + ". Please correct and re run the program.")
      closeSideBar();
      clearData();

    } else {

      SpreadsheetApp.getUi().alert("5 or more invalid email addresses detected. Please make corrections as needed and rerun the program.")
      closeSideBar();
      clearData();
    }
  } else {

    modifyEventSheet();
    toModifyEventPage1();
  }
}
