const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animScroll);
	
   function animScroll(params) {
      for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animPosition = offset(animItem).top;
			const animStart = 4;

			let animStartPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animStartPoint = window.innerHeight - window.innerHeigh / animStart;
			}

			if ((pageYOffset > animPosition - animStartPoint) && pageYOffset < (animPosition + animItemHeight)) {
				animItem.classList.add('active-anim');
			} else {
				if (!animItem.classList.contains("anim-no-hide")) {
					animItem.classList.remove('active-anim');
				}
				
			}
      }
	}
	
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}

	setTimeout(() => {
		animScroll();
	}, 0);
	
}