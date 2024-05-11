const emailForm = document.getElementById('emailForm');
  const emailInput = document.getElementById('emailText');
  const emailError = document.getElementById('error');

  emailForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = emailInput.value.trim();
    if(emailText.value.trim() ==""){
        errorIcon.style.display = "block";
         error.textContent="You forgot to add your email";
    }
    else if (!isValidEmail(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      
      errorIcon.style.display = "block";
    } 
    
    else {
      emailError.textContent = '';
      
    }
  });

  function isValidEmail(email) {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
