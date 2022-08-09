import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('input', throttle(savedStorage, 500));

function savedStorage() {
  const { email, message } = feedbackForm.elements;
  const objJson = JSON.stringify({
    email: email.value,
    message: message.value,
  });
  localStorage.setItem('feedback-form-state', objJson);
  
}

const savedForm = localStorage.getItem('feedback-form-state');
if (savedForm) {
  const newObjInfo = JSON.parse(savedForm);
  const { email, message } = feedbackForm.elements;
  email.value = newObjInfo.email;
  message.value = newObjInfo.message;
}

feedbackForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  const { email, message } = feedbackForm.elements;
  if (email.value === '' || message.value === '') {
    alert('ввел данные быстро');
    return;
  }
  const getForm = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(getForm);
  
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
}