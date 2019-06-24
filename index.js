/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(input) {
  const hour = input.split(":")[0];
  if (hour >= 0 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else if (hour >= 17) {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
// x The displayMessage function should take one argument, a String.

// When the function runs it should update the text inside the #greeting node with the content of the first argument.

// It does not return anything.

// NOTE: The value returned from the <input> will be of type String. You’ll need to take the String of the 24 hour time and covert it to a number. The split() function and the parseInt() functions should help.
function displayMessage(str) {
  const el = document.querySelector("#greeting");
  el.innerText = str;
}