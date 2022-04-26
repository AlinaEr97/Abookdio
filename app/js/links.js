// Плавный переход по якорям из хедера

let $page = $('html, .header, .about_app, .comments, .plans, .help, .footer');
$('a[href*="#"]').click(function() {
   $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top-150
	}, 800);
   return false;
});