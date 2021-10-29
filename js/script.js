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

	for (let i = 0; i < 3; i++) {
		let block = document.createElement('div');
		block.classList.add('block');
		block.classList.add('block' + i);
		container.append(block);
	}

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
	e.onclick = (el) => {
		if (counter <= 3) {
			sum += parseInt(e.childNodes[4].getAttribute('value'));
			e.classList.add('active');
			e.childNodes[0].classList.add('active');
			setTimeout(function () { e.childNodes[1].classList.add('active'); }, 300);
			setTimeout(function () { e.childNodes[2].classList.add('active'); }, 600);
			setTimeout(function () { e.childNodes[3].classList.add('active'); }, 900);
			e.childNodes[4].classList.add('active');
			sumOutput.innerHTML = sum + '.000 &#8364;'
			counter++;
		}
	}
});