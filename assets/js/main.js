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
        $("#niner").val(nineAm);
    }
    $("#niner").text(nineAm);

    // 10AM
    let tenAM = localStorage.getItem("10AM");
    if(!tenAM){
        $(".tenAM").val(tenAM);
    }

    $(".tenAM").text(tenAM);
}
// on click save-tasks for scheduler
$("#nineth").on("click", function(){
    localStorage.setItem("9AM", $("#niner").val());   
})

loadTasks();
/*var eventDisplay() {
    // 
    let 9AMHr = localStorage.getItem("");
    if (!taskNameInput) {
        $("").val();  // 
    }}*/