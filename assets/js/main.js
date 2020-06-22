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
var updateClock = function() {
    var presentDate = moment().format('MMMM Do YYYY, h:mm:ss a'); // renders date
    $('#currentDay').text(presentDate); // pushes time to jumbotron
}
setInterval(updateClock,1000); // refreshes every second
    
// setting up time variables for use - https://momentjs.com/docs/#/get-set/
var ninAmHr = moment().set('hour', 9);
var tenAmHr = moment().set('hour', 10);
var eleAmHr = moment().set('hour', 11);
var twelPmHr = moment().set('hour', 12);
var onePmHr = moment().set('hour', 13);
var twoPmHr = moment().set('hour', 14);
var thrPmHr = moment().set('hour', 15);
var fouPmHr = moment().set('hour', 16);
var fivPmHr = moment().set('hour', 17);

// some way to determine if time has passed for coloring events per guidelines

function loadTasks(){
    // 9AM 
    let nineAm = localStorage.getItem("9AM");
    if(!nineAm){
        $(".ninAM").val(nineAm);
    }
    $(".ninAM").text(nineAm);

    // 10AM
    let tenAM = localStorage.getItem("10AM");
    if(!tenAM){
        $(".tenAM").val(tenAM);
    }

    $(".tenAM").text(tenAM);
}
// on click save-tasks for scheduler
$("#nineth").on("click", function(){
    localStorage.setItem("9AM", $("#niner").val());   // bug exists where using class calls back as 'undefined', using id causes task item not to persist
})

loadTasks();
/*var eventDisplay() {
    // 
    let 9AMHr = localStorage.getItem("");
    if (!taskNameInput) {
        $("").val();  // 
    }}*/