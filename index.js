/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString){
  let theTime = timeString.split(':');
  
  let hour = parseInt(theTime[0], 10);
  let minutes = parseInt(theTime[1], 10);
  if (hour < 12){
    return "Good Morning";
  }
  else if(hour >= 12 && hour <= 17){
    return "Good Afternoon";
  }
  else if(hour>17){
    return "Good Evening";
  }

  //console.log(timeString);
  //debugger;
}

function displayMessage(word){
  let greetMe = document.getElementById("greeting");
  greetMe.innerText = word;
}