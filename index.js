/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


// The greet() function
// The greet function should take one argument, a String which specifies the 24-hour time in the format HH:MM.
//
// If the time is earlier than 12pm, return "Good Morning".
// If the time is between 12pm and 5pm, return "Good Afternoon".
// If the time is later than 5pm, return "Good Evening".
function greet(time){
  const hour = parseInt(time.split(":")[0]);

  if (hour < 12){
    console.log("Good Morning")
    return "Good Morning";
  }else if (hour >= 12 && hour < 17){
    console.log("Good Afternoon")
    return "Good Afternoon";
  }else{
    console.log("Good Evening")
    return "Good Evening";
  }

}





function displayMessage(msg){
  console.log("in display message")
  document.getElementById("greeting").innerText = msg;
}
// The displayMessage() function
// The displayMessage function should take one argument, a String.
//
// When the function runs it should update the text inside the #greeting node with the content of the first argument.
//
// It does not return anything.
//
// NOTE: The value returned from the <input> will be of type String. You’ll need to take the String of the 24 hour time and covert it to a number. The split() function and the parseInt() functions should help.
