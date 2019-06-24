/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const hours = parseInt(time)
  if (hours < 12 ) {
    return 'Good Morning'
  }
  else if (hours <= 17) {
    return 'Good Afternoon'
  }
  else {
    return 'Good Evening'
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  const greeting = document.getElementById('greeting')
  greeting.innerText = string
}
