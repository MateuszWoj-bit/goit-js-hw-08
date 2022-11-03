const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const savedFormValue = localStorage.getItem('feedback-form-state');
const parsedFormValue = JSON.parse(savedFormValue);
const throttled = _.throttle(savingForm, 500);

function savingForm () {
  const formValue = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
}

form.addEventListener('input', throttled);
form.addEventListener('submit', handleSubmit);

if (
  parsedFormValue !==
    {
      email: '',
      message: '',
    } &&
  parsedFormValue !== null
) {
  email.value = parsedFormValue.email;
  message.value = parsedFormValue.message;
}
