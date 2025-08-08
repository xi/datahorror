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

var time = document.querySelector('time');
if (time) {
	var lang = document.documentElement.lang;
	var now = new Date();
	time.textContent = now.toLocaleString(lang, {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		weekday: 'short',
		hour: '2-digit',
		minute: '2-digit',
	});
}
