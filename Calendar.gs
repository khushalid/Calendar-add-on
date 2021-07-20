function onCalendarEventOpen(e) {

  console.log(e);
  var cal = CalendarApp.getCalendarById(e.calendar.calendarId);
  var event = cal.getEventById(e.calendar.id);

  if (!event) {
    // This is a new event still being created.
    return createEvent();
  }
  var title = event.getTitle();

  var email = new Array();
  var guestList = event.getGuestList();
  for(var i=0;i<guestList.length;i++){
    email[i] = guestList[i].getEmail();
  }
  if(guestList.length>1)
    return createCard(title,email);
  else 
    return noGuest();
}  
