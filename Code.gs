var scriptProperties = PropertiesService.getScriptProperties();
/******************* Function for Homepage *********************/
function onHomepage(e) {
  var cardHeader = CardService.newCardHeader()
    .setTitle("Daily Get add-on")
    .setImageStyle(CardService.ImageStyle.CIRCLE)
    .setImageUrl("https://lh3.googleusercontent.com/pw/AM-JKLUAc5MHebp-vGrhQmFzumuTOhHbgMGKhoozLhuikFP6UBfMqvUu_3XgM5169YSlJOvw-ecmZheCLyIlmftpkYPIjcJTUnKWgBIvNO_uBdBkmA_NxCstQDVNtndtYCcxY95oz_IZX2jFktxr8wrh6TPrYg=s512-no?authuser=0");


  var space_id = scriptProperties.getProperty('space_id');

  if(space_id == null){
    var spacePara = CardService.newTextParagraph().setText('Please change your spaceid: ')
    var spaceId = CardService.newTextInput()
      .setFieldName("Space_id")
      .setTitle("SpaceID of Spacepulse")
      .setHint("Enter your spaceID");

    var action = CardService.newAction().setFunctionName('saveCallBack');

    var submitButton = CardService.newTextButton()
      .setText("Save")
      .setOnClickAction(action)
      .setTextButtonStyle(CardService.TextButtonStyle.FILLED);
  }
  else{
      
      var spacePara = CardService.newTextParagraph().setText('The plugin helps you create a visitor pass for guests on Spacepulse platform. Please enter your unique Space ID on Spacepulse and ensure your user profile has this Google Email listed.<br><br><br>This is your spaceid:')
      var spaceId = CardService.newTextParagraph().setText(scriptProperties.getProperty('space_id'))

      var action = CardService.newAction().setFunctionName('changeCallBack');

      var submitButton = CardService.newTextButton()
        .setText("Change")
        .setOnClickAction(action)
        .setTextButtonStyle(CardService.TextButtonStyle.FILLED);
  }
  
  
  

  var section = CardService.newCardSection()
    .addWidget(spacePara)
    .addWidget(spaceId)
    .addWidget(submitButton)
    

  var footer = CardService.newFixedFooter()
      .setPrimaryButton(CardService.newTextButton()
          .setText('Powered by DailyGet.in')
          .setOpenLink(CardService.newOpenLink()
              .setUrl('https://dailyget.in')));


  var card = CardService.newCardBuilder()
      .setHeader(cardHeader)
      .addSection(section)
      .setFixedFooter(footer);
  return card.build();
}

/********************** Function after space id is entered ********************/
function saveCallBack(e){
  scriptProperties.setProperty('space_id',e.formInput.Space_id)
  /*return CardService.newCardBuilder()
  .setHeader(CardService.newCardHeader().setTitle('sample'))
  .addSection(CardService.newCardSection().addWidget(
    CardService.newDecoratedText().setText(JSON.stringify(e.formInput.Space_id)))
  .addWidget(CardService.newTextParagraph().setText(scriptProperties.getProperty('space_id'))))
  .build();*/
}

function changeCallBack(){
  var cardHeader = CardService.newCardHeader()
    .setTitle("Daily Get add-on")
    .setImageStyle(CardService.ImageStyle.CIRCLE)
    .setImageUrl("https://lh3.googleusercontent.com/pw/AM-JKLUAc5MHebp-vGrhQmFzumuTOhHbgMGKhoozLhuikFP6UBfMqvUu_3XgM5169YSlJOvw-ecmZheCLyIlmftpkYPIjcJTUnKWgBIvNO_uBdBkmA_NxCstQDVNtndtYCcxY95oz_IZX2jFktxr8wrh6TPrYg=s512-no?authuser=0");

  var rules = CardService.newTextParagraph()
    .setText("The plugin helps you create a visitor pass for guests on Spacepulse platform. Please enter your unique Space ID on Spacepulse and ensure your user profile has this Google Email listed")
  
  var applicationName = CardService.newTextInput()
      .setFieldName("Space_id")
      .setTitle("SpaceID of Spacepulse")
      .setHint("Enter your spaceID");
    
  var action = CardService.newAction().setFunctionName('saveCallBack');

  var redirect = CardService.newAction().setFunctionName('onHomepage');

  var submitButton = CardService.newTextButton()
      .setText("Save")
      .setOnClickAction(action)
      .setTextButtonStyle(CardService.TextButtonStyle.FILLED);
  
  var redirectButton = CardService.newTextButton()
      .setText("Homepage")
      .setOnClickAction(redirect);

  var section = CardService.newCardSection()
    .addWidget(rules)
    .addWidget(applicationName)
    .addWidget(submitButton)
    .addWidget(redirectButton)
    

  var footer = CardService.newFixedFooter()
      .setPrimaryButton(CardService.newTextButton()
          .setText('Powered by DailyGet.in')
          .setOpenLink(CardService.newOpenLink()
              .setUrl('https://dailyget.in')));


  var card = CardService.newCardBuilder()
      .setHeader(cardHeader)
      .addSection(section)
      .setFixedFooter(footer);
  return card.build();
}


/********************** Function triggered when there are guest in the event ********************/
function createCard(title, guest) {

  var cardHeader = CardService.newCardHeader()
    .setTitle("Daily Get add-on")
    .setImageStyle(CardService.ImageStyle.CIRCLE)
    .setImageUrl("https://lh3.googleusercontent.com/pw/AM-JKLUAc5MHebp-vGrhQmFzumuTOhHbgMGKhoozLhuikFP6UBfMqvUu_3XgM5169YSlJOvw-ecmZheCLyIlmftpkYPIjcJTUnKWgBIvNO_uBdBkmA_NxCstQDVNtndtYCcxY95oz_IZX2jFktxr8wrh6TPrYg=s512-no?authuser=0");



  /*var action = CardService.newAction()
    .setFunctionName('onGetEvent')
    .setParameters({text: title, text: guest.toString(), isHomepage: isHomepage.toString()});
  var textParagraph = CardService.newTextParagraph()
  .setText(title.toString());
  var guestParagraph = CardService.newTextParagraph()
  .setText(guest.toString());

  var button = CardService.newTextButton()
      .setText('Create Visitor Pass')
      .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com/?client=safari'))
      .setTextButtonStyle(CardService.TextButtonStyle.FILLED);
  var buttonSet = CardService.newButtonSet()
      .addButton(button);

  var section = CardService.newCardSection()
    .setHeader("Event")
    .addWidget(textParagraph)
    .addWidget(guestParagraph)
    .addWidget(buttonSet);*/

  /*var selectAll = CardService.newSelectionInput()
    .setType(CardService.SelectionInputType.CHECK_BOX)
    .setFieldName("select_all")
    .addItem("Select all", "selectAll", false).setOnChangeAction(CardService.newAction()
      .setFunctionName("handleSelectAll")
      for(var i = 0; i<guest.length)
      .setParameters({text: guest}));*/

  var checkboxGroup = CardService.newSelectionInput()
    .setType(CardService.SelectionInputType.CHECK_BOX)
    .setTitle("Suggested guests for creating a visitor pass")
    .setFieldName("checkbox_field")
    //.setOnChangeAction(CardService.newAction().setFunctionName('notificationCallback'))
    for(var i = 0; i < guest.length; i++){
      checkboxGroup.addItem(guest[i], guest[i], false)
    } 

  var button = CardService.newTextButton()
      .setText('Create Visitor Pass')
      .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com/?client=safari'))
      .setTextButtonStyle(CardService.TextButtonStyle.FILLED);
  var buttonSet = CardService.newButtonSet()
      .addButton(button);

  var section = CardService.newCardSection()
    .addWidget(checkboxGroup)
    .addWidget(buttonSet)

  var footer = CardService.newFixedFooter()
      .setPrimaryButton(CardService.newTextButton()
          .setText('Powered by DailyGet.in')
          .setOpenLink(CardService.newOpenLink()
              .setUrl('https://dailyget.in')));


  var card = CardService.newCardBuilder()
      .setHeader(cardHeader)
      .addSection(section)
      .setFixedFooter(footer);

  return card.build();
}


/********************** Function triggered when there are no guest *****************/
function noGuest(){
  var cardHeader = CardService.newCardHeader()
    .setTitle("Daily Get add-on")
    .setImageStyle(CardService.ImageStyle.CIRCLE)
    .setImageUrl("https://lh3.googleusercontent.com/pw/AM-JKLUAc5MHebp-vGrhQmFzumuTOhHbgMGKhoozLhuikFP6UBfMqvUu_3XgM5169YSlJOvw-ecmZheCLyIlmftpkYPIjcJTUnKWgBIvNO_uBdBkmA_NxCstQDVNtndtYCcxY95oz_IZX2jFktxr8wrh6TPrYg=s512-no?authuser=0");

  var noGuestInEvent = CardService.newTextParagraph()
    .setText("No guests in the event selected.<br>Please add a guest and check again or select a different event");

  var action = CardService.newAction().setFunctionName("onHomepage");
  var button = CardService.newTextButton()
    .setText('Homepage')
    .setOnClickOpenLinkAction(action)
    .setTextButtonStyle(CardService.TextButtonStyle.FILLED);

  var section = CardService.newCardSection()
    .addWidget(noGuestInEvent)
    .addWidget(button);

  var footer = CardService.newFixedFooter()
      .setPrimaryButton(CardService.newTextButton()
          .setText('Powered by DailyGet.in')
          .setOpenLink(CardService.newOpenLink()
              .setUrl('https://dailyget.in')));


  var card = CardService.newCardBuilder()
      .setHeader(cardHeader)
      .addSection(section)
      .setFixedFooter(footer);
  return card.build();
}

function createEvent(){
  
}














/*function onGetEvent(e) {
  console.log(e);
  // Get the text that was shown in the current cat image. This was passed as a
  // parameter on the Action set for the button.
  var text = e.parameters.text;

  var isHomepage = e.parameters.isHomepage === 'true';
  // Create a new card with the same text.
  var card = createCard(text,isHomepage);

  // Create an action response that instructs the add-on to replace
  // the current card with the new one.
  var navigation = CardService.newNavigation()
      .updateCard(card);
  var actionResponse = CardService.newActionResponseBuilder()
      .setNavigation(navigation);
  return actionResponse.build();
}*/


/*function getEvents(){
  
  var cal = CalendarApp.getCalendarById("57fn402bqkah61l8hcjutnn2e8@group.calendar.google.com");
  var events = cal.getEvents(new Date("07/1/2021 12:00 AM"), new Date("07/30/2021 11:59 PM"));
  
  var lastColumn = ss.getLastColumn();
  
  for(i=0; i<events.length; i++){
    var id = events[i].getId();
    var title = events[i].getTitle();
    var sd = events[i].getStartTime();
    var ed = events[i].getEndTime();
    var loc = events[i].getLocation();
    var des = events[i].getDescription();
      
    ss.getRange(i+2, 1).setValue(id);
    ss.getRange(i+2, 2).setValue(title);
    ss.getRange(i+2, 3).setValue(sd);
    ss.getRange(i+2, 4).setValue(ed);
    ss.getRange(i+2, 5).setValue(loc);
    ss.getRange(i+2, 6).setValue(des);
    
    var guestList=events[i].getGuestList();
    for(var d=0; guestList!=null && d<guestList.length; d++){
      var guestEmail = guestList[d].getEmail();
      ss.getRange(i+2, 7+d).setValue(guestEmail);
    }
    
  }
}*/
