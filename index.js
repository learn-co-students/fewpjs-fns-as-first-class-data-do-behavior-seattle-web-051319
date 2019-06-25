/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(timeStr){
  time = parseInt(timeStr, 10)

if (time < 12) return "Good Morning"
if (time > 17) return "Good Evening"
return "Good Afternoon"
}

function displayMessage(message){
  document.getElementById('greeting').innerText = message;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
