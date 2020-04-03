const submitEmail = document.getElementById('submit-email');
const inputEmail = document.getElementById('email');
const warning = document.getElementById('warning');
const error = document.getElementById('error');
const emailPattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,4}$/;

function validateEmail(email) {
   return emailPattern.test(email);
}

submitEmail.addEventListener('click', function(event) {
    event.preventDefault();
    warning.style.display = 'none';
    error.style.display = 'none';
    isValid = validateEmail(inputEmail.value)
    if(!isValid) {
        warning.style.display = 'block';
        error.style.display = 'block';
    }
});

