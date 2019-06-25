function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

function greet(time) {
	const hour = parseInt(time.split(":")[0]);
	
	if (hour < 12) {
		return "Good Morning";
	} else if (hour >= 12 && hour < 17) {
		return "Good Afternoon";
	} else {
		return "Good Evening";
	}
}

function displayMessage(msg) {
	document.getElementById("greeting").innerText = msg;
}