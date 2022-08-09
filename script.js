'use strict'

const form = document.querySelector('.email-form');
const input = document.querySelector('.input');
const error = document.querySelector('.error');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const emailVal = input.value;

  if (!validateEmail(emailVal)) {
    error.classList.add('active-error-state');
    input.classList.add('active-error-border-state')
  } else {
    alert('Your request has been submitted!');
    input.value = ''
  }
});

form.addEventListener('keyup', () => {
  error.classList.remove('active-error-state');
})


const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};