$(document).ready(function () {


	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "1199"
	});

	// Others Option For Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	// Search Menu JS
	$(".others-option .search-icon i").on("click", function(){
		$(".others-option .search-box").toggleClass("active");
		$(".others-option .search-icon i").toggleClass("active");
	});

	// Color Options
	$("#blue").click(function(){
		$(":root").css("--mainColor", "blue");
	});
	$("#red").click(function(){
		$(":root").css("--mainColor", "red");
	});
	$("#green").click(function(){
		$(":root").css("--mainColor", "green");
	});
	$("#black").click(function(){
		$(":root").css("--mainColor", "black");
	});

	$("input[name=custom_color]").change(function(){
		var value = $('input[name=custom_color]').val();
		$(":root").css("--mainColor", value);
	});
});