let form = document.querySelector('.feedback-form');
let key = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

let newObj = JSON.parse(localStorage.getItem(key));

if (localStorage.getItem(key)) {
  form.elements.email.value = newObj.email;
  form.elements.message.value = newObj.message;
  formData.email = newObj.email;
  formData.message = newObj.message;
}

form.addEventListener('input', evt => {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem(key, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  let email = formData.email.trim();
  let message = formData.message.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  formData.email = '';
  formData.message = '';
  localStorage.removeItem(key);
  form.reset();
});
