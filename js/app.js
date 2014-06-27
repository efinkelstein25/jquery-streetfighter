$(document).ready(function(){


	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('ryu-cool').hide();
		$('.ryu-ready').show();

	})
	.mouseleave(function(){
    	$('.ryu-ready').hide();
    	$('ryu-cool').hide();
		$('.ryu-still').show();
  })

  .mousedown(function(){
  		playHadouken();
  		$('.ryu-ready').hide();
  		$('ryu-still').hide();
  		$('.ryu-throwing').show();
  		$('.text').hide();
  		$('.hadouken').finish().show()
  		.animate(
  			{'left': '300px'},
  			500,
  			function(){
  				$(this).hide();
  				$(this).css('left', '-212px');
  				$('.text').show();
  			}

  		);
  })
  .mouseup(function(){
  		$('.ryu-throwing').hide();
  		$('.ryu-still').hide();
  		$('.ryu-cool').hide();
  		$('.ryu-ready').show();
  });

  $(document).keydown(function(){
  		/*var e = $.Event('keydown');*/
  		
  		if(event.which === 88){
  			$('.ryu-ready').hide();
  			$('.ryu-still').hide();
  			$('.ryu-cool').show();
  		}
  	})
    .keyup(function(){
  		if(event.which === 88){
			$('.ryu-cool').hide();
			$('ryu-ready').hide();
  			$('.ryu-still').show();
  			
  		}
  });

});

function playHadouken(){
	$('#hadouken-sound')[0].volume = .05;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}




  /*.keyup(function(){
  		if(e.which === 88){
			$('.ryu-cool').hide();
  			$('.ryu-still').show();
  		}
  });*/
