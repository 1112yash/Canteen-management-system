const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Replace with your own login validation logic
	if (email.value === 'GEHU@gmail.com' && password.value === 'gehu@123') {
		alert('Login successful');
		window.location.href = "http://127.0.0.1:5500/Index.html";
	} else {
		alert('Invalid email or password');
	}
});
