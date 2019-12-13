'use strict';
const modalWindow = () =>{
	const modal = document.getElementById('modal');
	const modalWrap = document.querySelector('.modalWrap');
	//console.log(modalWrap);
	function showModal() {
		//modal.style.opacity = '1';
		modal.classList.add('active');
	};

	const interval = setInterval(showModal, 3000);

	modal.addEventListener('click', function() {
		if (event.target == modal) {
			    //modal.style.visibility = 'visible';
				//modal.style.opacity = '0';
				modal.classList.remove('active');
				clearInterval(interval);
		} else {
				return; 
		}
	});
};	
modalWindow();