const output = document.querySelector('.main__box');
const sumOutput = document.querySelector('.main__count');

const amountRand = () => {
	return Math.floor(Math.random() * (10000 - 1000) + 1000);
}

const cardCreate = () => {
	let container = document.createElement('div');
	container.classList.add('box__container');

	let img = document.createElement('img');
	img.classList.add('box__img');
	img.src = 'img/card-img.png';

	let text = document.createElement('p');
	text.classList.add('box__text');
	text.innerHTML = amountRand();
	text.setAttribute('value', text.innerHTML);

	let span = document.createElement('span');
	span.innerHTML = 'evros';

	output.append(container);
	container.append(img);
	container.append(text);
	text.append(span);
}

for (let i = 0; i < 9; i++) {
	cardCreate();
}

const container = document.querySelectorAll('.box__container');
let counter = 1;
let sum = 0;

container.forEach(e => {
	e.onmousemove = (el) => {
		const round = document.createElement('span');
		round.style.left = el.offsetX + 'px';
		round.style.top = el.offsetY + 'px';
		e.append(round);
		// if (counter <= 3) {
		// 	sum += parseInt(e.childNodes[1].getAttribute('value'));
		// 	e.classList.add('active');
		// 	e.childNodes[0].classList.add('active');
		// 	e.childNodes[1].classList.add('active');
		// 	sumOutput.innerHTML = sum + '.000 &#8364;'
		// 	counter++;
		// }
	}
});
