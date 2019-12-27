'use strict';

////////////////////////////////////////////////////show and hide mobile and desktop menu//////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////show and hide modal window///////////////////////////////////////////////////////////////////////////////////////////////////////
const modalWindow = () =>{
	const modal = document.getElementById('modal');
	const btn = document.getElementById('btn');
	//const modalWrap = document.querySelector('.modalWrap');
	//console.log(btn);
	function showModal() {
		//modal.style.opacity = '1';
		modal.classList.add('active');
	};

	const interval = setInterval(showModal, 3000);

	modal.addEventListener('click', function() {
		if (event.target === modal || event.target === btn) {
			    //modal.style.visibility = 'visible';
				//modal.style.opacity = '0';
				modal.classList.remove('active');
				clearInterval(interval);
		} else {
				return; 
		}
	});
};

/////////////////////////////////////////////////////////////////Show and hide notifications////////////////////////////////////////////////////////////////////////////////////////////////////////
const notification = () => {
	const modal1 = document.getElementById('modal1');
	console.log(modal1);
	const modal = document.getElementById('modal1');
	const notifyBtn = document.querySelector('.notification');
	const closeNotification = document.querySelector('.closeNotify');

	notifyBtn.addEventListener('click', function() {
		modal.classList.add('active');
	});
	closeNotification.addEventListener('click', function() {
		modal.classList.remove('active');
	});
};



showMenu();
modalWindow();
notification();


window.addEventListener('resize', showMenu);