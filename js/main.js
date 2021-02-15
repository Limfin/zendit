// Side-bar menu burger
let menuPageBurger = document.querySelector('.icon-menu');
let menuPageBody = document.querySelector('.menu__body');
menuPageBurger.addEventListener('click', function (e) {
	menuPageBurger.classList.toggle('active');
	menuPageBody.classList.toggle('active');
});

