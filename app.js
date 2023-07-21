














const btn = document.querySelector('.btn');
const InputFirstName = document.getElementById('first_name');
const InputLastName = document.getElementById('last_name');
const InputEmail = document.getElementById('email');
const InputPassword = document.getElementById('password');
const errorImgs = document.querySelectorAll('.error');
const errorMsgs = document.querySelectorAll('.error-msg');

btn.addEventListener('click', validate);

function validate(e) {
  e.preventDefault();
  const inputs = [InputFirstName, InputLastName, InputEmail, InputPassword];

  inputs.forEach((input, index) => {
    if (input.value === '') {
      errorMsgs[index].style.display = 'block';
      errorImgs[index].style.display = 'block';
      input.style.borderColor = 'var(--Red)';
      input.style.borderWidth = '2px';
      input.setAttribute('placeholder', '');

      if (index === 2) {
        showError(InputEmail, 'Email Address cannot be empty');
      }
    } else {
      errorMsgs[index].style.display = 'none';
      errorImgs[index].style.display = 'none';
      input.style.borderColor = 'var(--Grayish-Blue)';
      hideError(input);
    }
  });

  if (InputEmail.value !== '') {
    if (!validateEmail(InputEmail.value)) {
        errorMsgs[2].style.display = 'block';
        InputEmail.setAttribute('placeholder', 'Email Address'); // Restore placeholder
        InputEmail.setAttribute('style', `color:var(--Red); font-size:var(--Font-size); font-family: var(--Font-Family); font-weight: var(--Font-Weight-medium);`);
        showError(InputEmail,'Looks like this is not an email')
    } else {
      hideError(InputEmail);
    }
  }
}

function validateEmail(email) {
  let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(mailformat);
}

function showError(inputElement, errorMessage) {
  errorMsgs[2].textContent = errorMessage;
  errorImgs[2].style.display = 'block';
  inputElement.style.borderColor = 'var(--Red)';
  inputElement.style.borderWidth = '2px';
}

function hideError(inputElement) {
  errorMsgs[2].style.display = 'none';
  errorImgs[2].style.display = 'none';
  inputElement.style.borderColor = 'var(--Grayish-Blue)';
  inputElement.setAttribute('placeholder', 'Email Address'); // Restore placeholder
  inputElement.setAttribute('style', `color:var(--Dark-Blue); font-size:var(--Font-size); font-family: var(--Font-Family); font-weight: var(--Font-Weight-medium);`);
}
