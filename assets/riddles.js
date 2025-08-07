document.addEventListener('submit', event => {
	event.preventDefault();
	var radios = event.target.querySelectorAll('input[type="radio"]');
	var correct = (
		event.target.checkValidity()
		&& Array.from(radios).every(r => r.checked === r.required)
	);
	event.target.classList.toggle('form-correct', correct);
	event.target.classList.toggle('form-incorrect', !correct);
});
