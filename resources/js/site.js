// This is all you.
// on scroll

let scrollPosition = window.scrollY;
let logoContainer = document.getElementsByClassName('body')[0];
window.addEventListener('scroll', function() {

	scrollPosition = window.scrollY;

	if (scrollPosition >= 100) {
		logoContainer.classList.add('scrolled');
	} else {
		logoContainer.classList.remove('scrolled');
	}

});

//swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiper = new Swiper(".heroslideshow", {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	grabCursor: true,
	effect: "fade",
	duration:5000,
	pagination: {
		el: ".swiper-pagination",
	},
});

const swiper2 = new Swiper(".herogallery", {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	grabCursor: true,
	effect: "fade",
	duration:5000,
	pagination: {
		el: ".swiper-pagination",
	},
});


// burgerButton

document.addEventListener('DOMContentLoaded', function () {
	let mainwrapper  = document.querySelector('body');
	let target = document.querySelector('.burgerBtn'),
		isClosed = true;

	target.addEventListener('click', function () {
		burgerTime();
	});

	function burgerTime() {
		if (isClosed == true) {
			mainwrapper.classList.add('mobileMenuOpen');
			target.classList.remove('open-burger');
			target.classList.add('closed-burger');
			isClosed = false;
		} else {
			mainwrapper.classList.remove('mobileMenuOpen');
			target.classList.remove('closed-burger');
			target.classList.add('open-burger');
			isClosed = true;
		}
	}
});

/* DROPDOWN */

function closeAllDropdowns(obj) {
	const dropdowns = document.querySelectorAll('.dropdown');

	for (const dropdown of dropdowns) {
		if (dropdown == obj) { continue; }
		dropdown.classList.remove('open');
	};
}

function toggleDropdown(id) {
	const dropdown = document.getElementById(id);
	closeAllDropdowns(dropdown);
	dropdown.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
	closeAllDropdowns();
});

document.addEventListener('click', function(event) {
	const isDropdownButton = event.target.closest('.dropdown .dropdownToggle');
	const isDropdownContent = event.target.closest('.dropdown-content');

	if (!isDropdownButton && !isDropdownContent) {
		closeAllDropdowns();
	}
});

document.querySelectorAll('.dropdown [data-dropdown-id]').forEach(function(dropdownToggle) {
    dropdownToggle.addEventListener('click', function(event) {
        const dropdownId = this.dataset.dropdownId;
        toggleDropdown(dropdownId);
        event.stopPropagation();
    });
});
