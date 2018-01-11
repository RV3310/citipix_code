
// wait to run until the doc is ready
$(document).ready(function() {

	// when user submits addCity function runs
$("form").submit(addCity);
// create addCity function
function addCity(event) {
  // prevent form submission
  event.preventDefault();  
  // Store input as a value in the variable city
    var input = $('#city-type').val(); 
    var city = input.toLowerCase().replace(/\s/g,"");
     // if input matches string change background
    if (city =="nyc" || city == "newyorkcity"){ 
      $("body").attr('class','nyc');
    } else if (city == "sf" || city =="sanfran" || city == "sanfrancisco") {      
       $("body").attr('class','sf');
    } else if (city =="losangeles" || city == "la" || city == "lax") {      
       $("body").attr('class','la');
    } else if (city == "aus" || city =="austin" || city == "austintexas" || city == "atx") {      
       $("body").attr('class','aus');
    } else if (city == "syd" || city =="sydney") {      
       $("body").attr('class','syd');
    } else {
      alert("You haven't been there....yet!")
      $("body").attr("class", "startpic")
    }

// clear input field
  $("#city-type").val("");
}

});



