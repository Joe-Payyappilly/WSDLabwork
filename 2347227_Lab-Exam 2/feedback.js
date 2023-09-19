
function validateFullName() {
    const fullName = document.getElementById('fullName').value;
    const fullNameError = document.getElementById('fullNameError');
    const validName = /^[A-Za-z\s]{3,}$/.test(fullName);
    fullNameError.textContent = validName ? '' : 'Invalid name (min. 3 characters)';
    return validName;
}


function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    emailError.textContent = validEmail ? '' : 'Invalid email format';
    return validEmail;
}



document.getElementById('fullName').addEventListener('input', validateFullName);
document.getElementById('email').addEventListener('input', validateEmail);

