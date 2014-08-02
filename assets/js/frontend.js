$(document).ready(function() {
	$('<style>.featherlight-image { max-height: '+Math.floor($(window).height()*0.6)+'px; }</style>').appendTo('head');
	$('#fullpage').fullpage({
		autoScrolling: false,
		anchors: ['lvk', 'about', 'gallery','news','contact'],
		animateAnchor: true,
		easing: 'easeInOutCubic',
		menu: '#nav',
		scrollingSpeed: 450,
		paddingBottom: '100px',
		onLeave: function(){
			var current = $.featherlight.current()
			if(current){
				current.close();
			}
		}
	});
	$('input[type=radio][name=enquiry_type]').change(function() {
    	$('.extra-info').addClass('hidden');
    	$('#'+this.value+'-only').removeClass('hidden');
	});
	$('#contact_form').ajaxForm(function(){
		$('#contact_form').slideUp(800,function(){
			$('html,body').animate({scrollTop: $(this).offset().top - 100}, 800);
			$(this).html('<h2>Thank you for your enquiry, we will contact you shortly.</h2>').slideDown(800);
		})
	});
	var addCaption = function(event) {
    	console.log(this.$elm);
    	var caption = this.$elm.find('img').attr('alt');
		this.$instance.find('.caption').remove();
		$('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
	}
	$('a.gallery').featherlightGallery({
	    openSpeed: 300,
		afterOpen : addCaption
	});
});