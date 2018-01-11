
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
    var city = input.toLowerCase().trim();
     // if input matches string change background
    if (city == "NYC" || city =="nyc" || city == "New York" || city == "New York City" || city == "new york city"){ // How do I do other options: ny, New york, etc?
      $("body").attr('class','nyc');
    } else if (city == "SF" || city == "sf" || city =="san fran" || city == "San Fran" || city == "San Francisco") {      
       $("body").attr('class','sf');
    } else if (city == "LA" || city =="los angeles" || city == "Los Angeles" || city == "LAX") {      
       $("body").attr('class','la');
    } else if (city == "AUS" || city =="austin" || city == "Austin" || city == "Austin Texas" || city == "ATX") {      
       $("body").attr('class','aus');
    } else if (city == "SYD" || city =="sydney" || city == "Sydney") {      
       $("body").attr('class','syd');
    } else {
      alert("You haven't been there....yet!")
      $("body").attr("class", "startpic")
    }

// clear input field
  $("#city-type").val("");
}

});



