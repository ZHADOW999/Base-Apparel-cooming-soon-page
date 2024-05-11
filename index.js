 const emailForm = document.getElementById('emailForm');
  const emailInput = document.getElementById('emailText');
  const emailError = document.getElementById('error');

  emailForm.addEventListener('submit', function(event) {

    const email = emailInput.value.trim();
    if (!isValidEmail(email)) {
      emailError.textContent = 'Please enter a valid email address.';
         event.preventDefault();
    } else {
      emailError.textContent = '';
      
    }
  });

  function isValidEmail(email) {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
