/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
    const hour = parseInt(timeString);
    if ( hour < 12) return "Good Morning"
    if ( hour > 17) return "Good Evening"
    return "Good Afternoon"
  }

}

/* Write your implementation of displayMessage() */


function displayMessage() {
  document.getElementById("greeting").innerText = msg;
}
