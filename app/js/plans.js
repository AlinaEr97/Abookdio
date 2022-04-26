// Кнопки individ/family

$(function() {
	$("#individ").on("click", function() {
		$("#individ").addClass('active-user');
		$("#family").removeClass('active-user');
		$(".rates_individual").css('display', 'flex');
		$(".rates_family").css('display', 'none');
	});
});

$(function() {
	$("#family").on("click", function() {
		$("#family").addClass('active-user');
		$("#individ").removeClass('active-user');
		$(".rates_family").css('display', 'flex');
		$(".rates_individual").css('display', 'none');
	});
});


// Тарифные планы Standart/Light

$(function() {
	$("#standart").on("click", function() {
		$(this).addClass('variant_active');
		$("#standart-button").addClass('variant__button_active');
		$("#light").removeClass("variant_active");
		$("#light-button").removeClass("variant__button_active");
	});
});

$(function() {
	$("#light").on("click", function() {
		$(this).addClass('variant_active');
		$("#light-button").addClass('variant__button_active');
		$("#standart").removeClass("variant_active");
		$("#standart-button").removeClass("variant__button_active");
	});
});

// Тарифные планы For-family/Family-plus

$(function() {
	$("#for-family").on("click", function() {
		$(this).addClass('variant_active');
		$("#for-family-button").addClass('variant__button_active');
		$("#family-plus").removeClass("variant_active");
		$("#family-plus-button").removeClass("variant__button_active");
	});
});

$(function() {
	$("#family-plus").on("click", function() {
		$(this).addClass('variant_active');
		$("#family-plus-button").addClass('variant__button_active');
		$("#for-family").removeClass("variant_active");
		$("#for-family-button").removeClass("variant__button_active");
	});
});

