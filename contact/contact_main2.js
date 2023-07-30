const form = document.querySelector('form');
const alert = document.querySelector('.alert');
const success = document.querySelector('.success');
const confirmationMessage = document.getElementById('confirmation-message');
emailjs.init('VyiJZs9CtwAil8hJg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  const templateParams = {
    name : name,
    email : email,
    message : message
  };
  if (name === '' || email === '' || message === '') {
    alert.style.display = 'block';
    alert.textContent = 'Please fill in all fields';
    setTimeout(() => {
      alert.style.display = 'none';
    }, 3000);
  } else {
    emailjs.send('service_jq066me', 'template_e2oz6c3', templateParams)
    .then(() => {
      confirmationMessage.textContent = 'Order is confirmed!';
    })
    form.reset();
  }
  
});
 

