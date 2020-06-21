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
var presentDate = moment().format('LL');
$('#currentDay').text(presentDate);

/* locate class id, 
use jQuery to select it, 
create variable to define it, 
introduce function to create it on page*/

/* 'container' element-class can be used to create dynamic elements
inside with jQuery to generate the time blocks, event blocks, 
and save blocks:

workday = 9-5 

var hour = moment.js script for generating X-AM

function to produce eight hours of task events on the index page

ability to edit tasks, tasks automatically change highlighted color
depending on current time of day and task hour having passed

ability to save tasks and persist even after refresh*/