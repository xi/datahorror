document.addEventListener('submit', event => {
	event.preventDefault();
	var correct = event.target.checkValidity();
	event.target.classList.toggle('form-correct', correct);
	event.target.classList.toggle('form-incorrect', !correct);
});
