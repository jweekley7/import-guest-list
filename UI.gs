/**
 * @OnlyCurrentDoc
 */

function onOpen(e) {
  var menu = SpreadsheetApp.getUi().createAddonMenu();
  
  /*Checks authorization mode. See this link for more info: https://developers.google.com/workspace/add-ons/concepts/editor-auth-lifecycle#authorization_modes*/
  if (e && e.authMode == ScriptApp.AuthMode.NONE) {
    
    // Add a normal menu item (works in all authorization modes).
    menu.addItem('Import Guest List for Google Calendar', 'run');

  } else {
   
    // Add a menu item based on properties (doesn't work in AuthMode.NONE).

    //Not exactly sure what this first part does but it was part of the Google documentation.
    var properties = PropertiesService.getDocumentProperties();
    var workflowStarted = properties.getProperty('workflowStarted');
    if (workflowStarted) {
      menu.addItem('Check workflow status', 'checkWorkflow');
    } else {

      //This runs the menu without authorization.
      menu
        .addItem('Run', 'run')
        .addItem('Testing','pleaseWait')
    }
  }
  menu.addToUi();
}

function run() {

    createNewSheet();
    showSidebar();
}

//Opens the side bar. The main UI will be inside the side bar.
function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Welcome Page 1')
      .setTitle('Import Guest List for Google Calendar');
  SpreadsheetApp.getUi()
    .showSidebar(html);
}

function toPage2() {

  const html = HtmlService.createHtmlOutputFromFile('Welcome Page 2')
      .setTitle('Import Guest List for Google Calendar');
  SpreadsheetApp.getUi()
    .showSidebar(html);  
}

function toPage3() {

  const html = HtmlService.createHtmlOutputFromFile('Welcome Page 3')
      .setTitle('Import Guest List for Google Calendar');
  SpreadsheetApp.getUi()
    .showSidebar(html);
}

function toModifyEventPage1() {

  const html = HtmlService.createHtmlOutputFromFile('Modify Event Page 1')
      .setTitle('Import Guest List for Google Calendar');
  SpreadsheetApp.getUi()
    .showSidebar(html);
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Modify Event Page 2');
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Welcome Page 1');
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Welcome Page 2');
}

function toModifyEventPage2() {

  const html = HtmlService.createHtmlOutputFromFile('Modify Event Page 2')
      .setTitle('Import Guest List for Google Calendar');
  SpreadsheetApp.getUi()
    .showSidebar(html);
}

function toSuccessPage() {

  const html = HtmlService.createHtmlOutputFromFile('Success Page')
      .setTitle('Import Guest List for Google Calendar');
  SpreadsheetApp.getUi()
    .showSidebar(html);
}

function noCalendarsFoundPage() {

  const html = HtmlService.createHtmlOutputFromFile('No Calendars Found')
      .setTitle('Import Guest List for Google Calendar');
  SpreadsheetApp.getUi()
    .showSidebar(html);
}

function closeSideBar() {

  const html = HtmlService.createHtmlOutputFromFile('Close Side Bar')
      .setTitle('Import Guest List for Google Calendar');
  SpreadsheetApp.getUi()
    .showSidebar(html);  
}

function pleaseWait() {
  
  const html = HtmlService.createHtmlOutputFromFile('Please Wait')
      .setTitle('Import Guest List for Google Calendar');
  SpreadsheetApp.getUi()
    .showSidebar(html);  
}
