// Get the current time and display it on the page
function showTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById('time').textContent = `The current time is: ${time}`;
  
  }


  
  // Prompt the user for their name and display a greeting with the current time
  function greetUser() {
    const name = prompt('Please enter your name:');
    const now = new Date();
    const time = now.toLocaleTimeString();
    const greeting = `Hello, ${name}! The current time is ${time}.`;
    alert(greeting);
  }

  
  // Call the showTime and greetUser functions when the page is loaded
  window.onload = function() {
    showTime();
    greetUser();
    
  };

