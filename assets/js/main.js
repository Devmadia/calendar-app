/* GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist*/

// render currentDay with Moment.js at top of index.html
/* https://devhints.io/datetime */
var presentDate = moment().format('MMMM Do YYYY'); // renders date
var currentTime = moment().format('h:mm:ss a');  // renders current time
$('#currentDay').text(presentDate);

// setting up variables for use



// function to produce eight hours of task events on the index page

// for (var i = 0; i <= 0; i++) {} code goes here

// begin taskCreation

