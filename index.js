/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  // debugger;
  const format_time = time.split(':');
  let hour = format_time[0];
  let minutes = format_time[1];
  let intHour = parseInt(hour);
  // debugger;
  if (intHour < 12) {
      return "Good Morning"
  }
  if (intHour > 12 && intHour < 17) {
    return "Good Afternoon"
  }
  if (intHour > 17){
    return "Good Evening"
  }
}


/* Write your implementation of displayMessage() */

function displayMessage(message) {
    const greeting = document.getElementById('greeting');
    // debugger
    greeting.innerText = message;
}
