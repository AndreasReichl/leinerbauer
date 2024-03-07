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


// Masonry Gallery
import Masonry from 'masonry-layout';

document.addEventListener('DOMContentLoaded', function() {
    window.onload = function() {
        const galleries = document.querySelectorAll('.gallery');
        galleries.forEach(function(gallery) {
            const msnry = new Masonry(gallery, {
                itemSelector: '.gallery-item',
                columnWidth: '.gallery-item',
                percentPosition: true
            });
        });
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeButton = document.getElementsByClassName('close')[0];
    let currentIndex = 0;
    let startX = 0;
    let endX = 0;
    let isDragging = false;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateModalImage();
    }

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateModalImage();
    }

    function openModal() {
        modal.style.display = 'block';
        updateModalImage();
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function updateModalImage() {
        const currentGalleryItem = galleryItems[currentIndex];
        const img = currentGalleryItem.querySelector('img');

        // Fügen Sie den Fade-Out-Effekt hinzu
        modalImg.style.opacity = 0;

        // Ändern Sie das Bild und setzen Sie die Bildunterschrift
        setTimeout(function() {
            modalImg.src = img.src;
            modalCaption.textContent = img.alt;

            // Fügen Sie den Fade-In-Effekt hinzu, nachdem das Bild aktualisiert wurde
            modalImg.style.opacity = 1;
        }, 300); // 300ms entspricht der Dauer des Übergangs in CSS
    }

    // Funktion zur Handhabung von Swipe- und Ziehgesten
    function handleStart(event) {
        startX = event.clientX || event.touches[0].clientX;
        isDragging = true;
    }

    function handleMove(event) {
        if (isDragging) {
            event.preventDefault(); // Verhindert das Scrollen der Seite während des Ziehens
            endX = event.clientX || event.touches[0].clientX;
        }
    }

    function handleEnd() {
        if (isDragging) {
            const threshold = 50; // Schwellenwert für die Erkennung eines Swipes oder Ziehens
            const deltaX = startX - endX;

            if (deltaX > threshold) {
                // Swipe oder Ziehen nach links (vorheriges Bild)
                showNextImage();
            } else if (deltaX < -threshold) {
                // Swipe oder Ziehen nach rechts (nächstes Bild)
                showPreviousImage();
            }

            isDragging = false;
        }
    }

    galleryItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            currentIndex = index;
            openModal();
        });
    });

    document.getElementById('nextBtn').addEventListener('click', showNextImage);
    document.getElementById('prevBtn').addEventListener('click', showPreviousImage);
    closeButton.addEventListener('click', closeModal);

    // Event-Listener für Maus- und Touch-Gesten hinzufügen
    modalImg.addEventListener('mousedown', handleStart);
    modalImg.addEventListener('mousemove', handleMove);
    modalImg.addEventListener('mouseup', handleEnd);
    modalImg.addEventListener('touchstart', handleStart);
    modalImg.addEventListener('touchmove', handleMove);
    modalImg.addEventListener('touchend', handleEnd);
});




