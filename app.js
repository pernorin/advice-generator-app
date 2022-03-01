// https://www.w3schools.com/js/js_callback.asp
const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const btn = document.querySelector('.btn');

async function getData(display) {
	let res = await fetch('https://api.adviceslip.com/advice');
	let adv = await res.json();
	let advId = adv.slip.id;
	let advTxt = adv.slip.advice;
	display(advId, advTxt);
}

function displayTxt(advId, advTxt) {
	adviceId.innerHTML = `Advice #${advId}`;
	adviceText.innerHTML = `"${advTxt}"`;
}

btn.addEventListener('click', () => {
	getData(displayTxt);
	console.log('click');
});

getData(displayTxt);
