//your JS code here. If required.
// Define the function and name it functionName
function functionName() {
  // Use arguments.callee.name to get the name of the function
  var name = arguments.callee.name;
  // Display the name using an alert statement
  alert(name);
}

// Call the function
functionName();
