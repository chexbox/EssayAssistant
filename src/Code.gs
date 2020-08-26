var ui;
var activeDoc;
var sidebar;

//
// core fnuctions
//

function onOpen() {
  ui = DocumentApp.getUi(); // SpreadsheetApp, DocumentApp, SlidesApp or FormApp.
  ui.createAddonMenu().addItem('Show', 'showSidebar').addToUi();
  doc = DocumentApp.getActiveDocument();
}

function onInstall() {
  onOpen();
}

// making the sidebar exist
function showSidebar() {
  var sidebar = HtmlService.createHtmlOutputFromFile('index.html')
      .setTitle('EssayAssistant Editor')
      .setWidth(300);
  DocumentApp.getUi().showSidebar(sidebar);
}

//
// Functions which interact with the sidebar
//

function getDocText() {
  var docText = DocumentApp.getActiveDocument().getBody().getText();
  return docText;
}

function appendAtDocEnd(text) {
  var docText = DocumentApp.getActiveDocument().getBody().editAsText();
  
  docText.appendText(text);
}
