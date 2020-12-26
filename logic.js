$(document).ready(function(){
    console.log(moment().format('dddd, MMMM Do YYYY, h:mm:ss a')); // December 26th 2020, 11:11:40 am
    
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    let currentHour = moment().hours();
    console.log(currentHour);

    $(".time-block").each(function(){
        for (let i = 0; i < 10; i++) {
            
            let blockHour = parseInt($(this).attr("id").split("-")[1]);

            if ($(blockHour < currentHour).addClass(".past"));

            else if ($(blockHour === currentHour).addClass(".present"));

            else ($(blockHour > currentHour).addClass(".future"));
        
    }
    })
})