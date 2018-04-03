$(document).ready(function() {

	function scrollFn() {
		var sTop=$(window).scrollTop();
		alterFn(sTop);
		$(window).scroll(function(){
			sTop=$(window).scrollTop();
			alterFn(sTop);
		});

		gotop();
	}
	scrollFn();

	function alterFn(sTop) {
		var topEl = $('.h-gotop');
		if(sTop > 200){
			if(!topEl.hasClass('h-gotop-active')){
				topEl.addClass('h-gotop-active');
			}
		}else{
			topEl.removeClass('h-gotop-active');
		}
	}

	function gotop() {
		$('.h-gotop').on('click', function() {
			$("html,body").animate({scrollTop: 0}, 300);
		});
	}

	function searchView() {
		$('.h-search').on('click', function() {
			$('body').css('overflow-y', 'hidden');
			$('.h-search-mask').addClass('hsm-active');
		});

		$('.hsm-form').on('click', function(e) {
			e.stopPropagation();
		});

		$('.h-search-mask').on('click', function() {
			$('body').css('overflow-y', 'visible');
			$(this).removeClass('hsm-active');
		});
	}
	searchView();

	function viewNav(el, w){
		if(w <= 960){
			if(el.hasClass('h-nav-content')){
				el.removeClass().addClass('min-nav-content');
				$('.nav-select').on('click', function(e) {
					e.stopPropagation();
					$(this).toggleClass('nav-select-active');
					$('.nav-select-content').slideToggle();
				})
			}
		}else{
			if(el.hasClass('min-nav-content')){
				el.removeClass().addClass('h-nav-content');
				$('.nav-select').off('click').removeClass('nav-select-active');
				$('.nav-select-content').removeAttr("style");
				$('.min-btn > span').removeClass('min-btn-active');
			}
		}
	}

	function viewport() {
	    var e = window, a = 'inner';
	    if (!('innerWidth' in window )) {
	        a = 'client';
	        e = document.documentElement || document.body;
	    }
	    return e[ a+'Width' ];
	}

	function minNav() {
		var el = $('#min-nav');
		var w = viewport();
		var timeOut = '';
		viewNav(el, w);
		$(window).resize(function() {

			clearTimeout(timeOut);
			timeOut = setTimeout(function() {
				w = viewport();
				viewNav(el, w);
			}, 400);
			
		})
	}
	minNav();

	function minNavShow() {
		$('.min-btn > span').on('click', function(e) {
			e.stopPropagation();
			$(this).toggleClass('min-btn-active');
			$('#min-nav').toggleClass('mnc-show');
			$(document).one('click', function() {
				$('.min-btn > span').removeClass('min-btn-active');
				$('#min-nav').removeClass('mnc-show');
			});
		});

		$('#min-nav').on('click', function(event) {
			event.stopPropagation();
		});
	}
	minNavShow();

});