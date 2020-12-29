$(document).ready(() => {
    console.log(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));

    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // Global variables
    let currentHour = parseInt(moment().hour());
    console.log(currentHour);
    let workHours = []
    // Adding time blocks to HTML
    // let timeOfDay = ["9", "10", "11", "13", "14", "15", "16", "17", "18"]
    for (let hour = 9; hour < 18; hour++) {
        workHours.push(moment({hour}).format('h  a'));
        $('.container').append(`<div class='row time-block' <div id="hour">
        <div class='col-md-1 hour'>
          <p>${moment({hour}).format('h  a')}</p>
        </div>
            <textarea class="col-md-10 description"></textarea>
                <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
            </div>
       </div>`);
    }

    // Colorcoding the timeblocks
    $("#time-block").each(function () {
         let blockHour = parseInt($(this).attr("id"));

        if (blockHour < currentHour) {
             $(this).addClass("past");

         } 
         else if (blockHour === currentHour) {
             $(this).addClass("present");

         } 
        else {
             $(this).addClass("future");

       }

    });





})

