let btn = document.querySelector('.btn');
let layers = document.querySelectorAll('.layers__item');
let audio = document.querySelector('.audio');

document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	});
});

function play() {
	audio.play()
}
btn.addEventListener('click', () => {
	for (let item of layers) {
		item.style.opacity = 1;
	}
	btn.style.opacity = 0;
	play()
})




