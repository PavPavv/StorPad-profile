'use strict';

//show and hide mobile and desktop menu
const showMenu = () => {
	const mobMenu = document.querySelector('.aside2');
	const menu = document.querySelector('.aside1');
	const wrapper = document.querySelector('.wrapper');
	const closeMenu = document.querySelector('.closeMenu');
	const windowSize = document.documentElement.clientWidth;

	//console.log(mobMenu);
	closeMenu.addEventListener('click', function() {
		menu.style.marginLeft = '-100%';
		wrapper.style.paddingLeft = '30px';
		mobMenu.style.marginLeft = '0%';
		setTimeout(() => {
			window.location.reload(true);
		}, 1000);
	});
	mobMenu.addEventListener("mouseover", func, false);
	function func() {
		if (window.innerWidth < 800) {
			mobMenu.style.marginLeft = '-10%';
			menu.style.marginLeft = '0%';
			wrapper.style.paddingLeft = '173px';
		} /* else if (window.innerWidth > 801) {
			menu.style.marginLeft = '0%';
		} */
	}
	menu.addEventListener("mouseleave", func1, false);
	function func1() {
		if (window.innerWidth < 800) {
			mobMenu.style.marginLeft = '0%';
			menu.style.marginLeft = '-100%';
			wrapper.style.paddingLeft = '30px';
		}/*  else if (window.innerWidth > 801) {
			menu.style.marginLeft = '0%';
		} */
	}

	if (windowSize > 801 && windowSize < 1572) {
		menu.style.marginLeft = '0%';
		wrapper.style.paddingLeft = '173px';
	} else if (windowSize < 800) {
		mobMenu.style.marginLeft = '0%';
		menu.style.marginLeft = '-100%';
		wrapper.style.paddingLeft = '30px';
	} else if (windowSize > 1572) {
		wrapper.style.paddingLeft = '11vw';
	}
};

//show and hide modal window
const modalWindow = () =>{
	const modal = document.getElementById('modal');
	const btn = document.getElementById('btn');
	const data = document.querySelector('.data');
	const dataHeight = data.clientHeight;
	const windowHeight = document.documentElement.clientHeight;
	//const modalWrap = document.querySelector('.modalWrap');
	//console.log(btn);
	function showModal() {
		if (windowHeight > dataHeight) {
			data.classList.add('fullHeight');
			modal.classList.add('active');
		} else{
			modal.classList.add('active');
		}
		
	};

	const interval = setInterval(showModal, 3000);

	modal.addEventListener('click', function() {
		if (event.target === modal || event.target === btn) {
				data.classList.remove('fullHeight');
				modal.classList.remove('active');
				clearInterval(interval);
		} else {
				return; 
		}
	});
};

//Show and hide notifications
const notification = () => {
	const modal = document.getElementById('modal1');
	const notifyBtn = document.querySelector('.notification');
	const closeNotification = document.querySelector('.closeNotify');
	const windowHeight = document.documentElement.clientHeight;

	const data = document.querySelector('.data');
	const dataHeight = data.clientHeight;


	notifyBtn.addEventListener('click', function () {
		if (windowHeight > dataHeight) {
			data.classList.add('fullHeight');
			modal.classList.add('active');
		} else {
			modal.classList.add('active');
		}
	});
	closeNotification.addEventListener('click', function () {
		modal.classList.remove('active');
		data.classList.remove('fullHeight');
	});
};

const colors = () => {
	const color = document.querySelectorAll('.color');

	for (let i = 0; i < color.length; i++) {
		color[i].addEventListener('click', function findColor(event) {
			if (event.target === color[i]) {
				if (color[i].classList.contains('pickColor')) {
					color[i].previousElementSibling.classList.remove('pickColor');
					color[i].classList.remove('pickColor');
				} else {
					color[i].classList.add('pickColor');
				}
			}
		});

		
	}

};

const lineSet = () => {
	const line = document.querySelector('#middleLine');
	
	if (window.innerWidth < 1011) {
		line.style.height = '302px'
	} else if (window.innerWidth < 389) {
		line.style.height = '320px'
	} else {
		line.style.height = '238px'
	}

};

showMenu();
modalWindow();
notification();
colors();
lineSet();

window.addEventListener('resize', showMenu);
window.addEventListener('resize', lineSet);