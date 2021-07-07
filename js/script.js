const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeEl = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeEl.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counters = document.querySelectorAll('.procents__title2'),
	lines = document.querySelectorAll('.procents__line-active');
counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});		