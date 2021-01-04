$(document).ready(() => {
    console.log(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));

    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // Global variables
    let currentHour = parseInt(moment().hour());
    console.log(currentHour);
    let workHours = [];
    let storage;
    let storedDay;
    // Adding time blocks to HTML
    // let timeOfDay = ["9", "10", "11", "13", "14", "15", "16", "17", "18"]
    init();

    function init(){

    if (localStorage.getItem("dayStorage") == null) {
    storage = ["","","","","","","","",""];
    localStorage.setItem("dayStorage", JSON.stringify(storage));
    }
    storedDay = JSON.parse(localStorage.getItem("dayStorage"));
    for (let hour = 9; hour < 18; hour++) {
       // if (storedDay[hour-9] === null) storedDay[hour-9] === "";
      
        workHours.push(moment({hour}).format('h  a'));
        $('.container').append(`
        <div class="row time-block">
            <div class="col-md-1 hour">
                <p>${moment({hour}).format('h  a')}</p>
            </div>
            <textarea class="col-md-10 description" value = "${hour}">${storedDay[hour-9]}</textarea>
            <button class="btn saveBtn col-md-1"  value = "${hour}"><i class="fas fa-save"></i></button>
            
       </div>`);
    }
}
    // Colorcoding the timeblocks by adding classes
    $("textarea").each(function () {
        
         let blockHour = parseInt($(this).attr("value"));
        
         if (blockHour < currentHour) {
             $(this).addClass("past");

         } 
         if (blockHour === currentHour) {
             $(this).addClass("present");

         } 
         if (blockHour > currentHour) {
            
             $(this).addClass("future");

       }

    });

    // store to localstorage
    $(".saveBtn").click(function () {
        storage = JSON.parse(localStorage.getItem("dayStorage"));
        console.log("click");
        // console.log($(this).parent())
        console.log($(this).siblings(".description").val());
        // ** TESTING ** //
        console.log($("textarea").siblings())

        // Capture our KEY : VALUE elements
        let value = $(this).siblings(".description").val();
        console.log(value + "value");
       // var hourBlock = $(this).siblings(".description").attr("value");
        let hourBlock = $(this).val();
        console.log(hourBlock + "hourblock");

        storage[hourBlock-9] = value;

        console.log(storage);

        // Store A KEY : VALUE pair
        localStorage.setItem("dayStorage", JSON.stringify(storage));
    })
    
    // Retrieve Our data from Local Storage
    // Will retrieve the value stored in Local Storage
   // storedDay = JSON.parse(localStorage.getItem("dayStorage"));
   // console.log(storedDay);
    // How do you capture/GRAB the ELEMENT(or container) for the respective ROW


})
;
