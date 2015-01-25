$(document).ready(function()
{	
	
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	scalePic();
	$("#open").remove();
	$(window).on("resize", scalePic);



	function scalePic()
	{
		var height = $("#open").height();
		var picheight = $(".camerapic").height();

			var windowHeight = $(window).height();
			var windowWidth = $(window).width();
			
		if (!(height === 0))
		{
			

			$("#open").css({
				'height' : windowHeight,
				'width' : windowWidth
			});

			

			//$('body').addClass('noscroll');
			//$("#content").addClass('nodisplay');

		}

		$(".cd-fixed-bg").css({
				'height' : windowHeight,
				'width' : windowWidth
			});

			$(".profile").css({
				'height' : windowHeight,
				'width' : windowWidth
			});

			$(".tech").css({
				'height' : windowHeight,
				'width' : windowWidth
			});

			$(".travel").css({
				'height' : windowHeight,
				'width' : windowWidth
			});

			$("#picture").css({
				'height' : windowHeight*0.6
			});

			$("#camerapic").css({
				'height' : windowHeight*0.55

			});
			

			var textPadding = windowHeight*0.25;
			$(".text").css({"padding-top": textPadding});

		
		var docScrollTop = $(document).scrollTop();
		var docScrollLeft = $(document).scrollLeft();
/*
		var minTop = docScrollTop;
		var maxTop = windowHeight + docScrollTop;
		var minLeft = docScrollLeft;
		var maxLeft = windowWidth + docScrollLeft;

	
		var elementOneHeight = elementOne.height()
		var elementOneWidth = elementOne.width();
		var elementOneOffset = elementOne.offset();
		*/
		$(document).on("scroll", function(){

			var ensure = $("#open").height();
			if(ensure === 0)
			{
				$('body').css({'position': "relative"});

			}

			var docScrollTop = $(document).scrollTop();
			var namePosition = $("#name").offset();
			if(namePosition.top - docScrollTop <= 0)
			{
				$(".navbar-fixed-top").css({"background-color": "#212121"});
			}

			if(namePosition.top - docScrollTop > 0)
			{
				$(".navbar-fixed-top").css({"background-color": "transparent"});
			}
		
		});

		var world = document.getElementById( 'world' );
		var viewport = document.getElementById( 'viewport' );
		var worldXAngle = 0;
		var worldYAngle = 0;
		var d = 0;
		/*
	    Event listener to transform mouse position into angles 
	    from -180 to 180 degress, both vertically and horizontally
		*/
		viewport.addEventListener( 'mousemove', function( e ) {
		    worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
		    worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;
		    updateView();
		} );

		$("#viewport").mouseenter(function(){
			$(".tech").css({"background-color":"#bbf7fc"});
		});

		$("#viewport").mouseleave( function(){
			$(".tech").css({"background-color":"#dbdfdf"});
		});
		/*
	    Changes the transform property of world to be
	    translated in the Z axis by d pixels,
	    rotated in the X axis by worldXAngle degrees and
	    rotated in the Y axis by worldYAngle degrees.
		*/
		function updateView() {
	    	world.style.transform = 'translateZ( ' + d + 'px ) \
	        	rotateX( ' + worldXAngle/2 + 'deg) \
	        	rotateY( ' + worldYAngle/2 + 'deg)';
		}

	}

	/*$("#send").click(function(){

			$("#open").css({
				"height": 0,
			});

			setTimeout(function(){$("#open").css({
				"display": "none"
			});}, 500);

			$("#text").css({
				"display":"none"
			});

			$("#send").css({
				"display":"none"
			});

			$('body').removeClass('noscroll');
	});*/


})