(function($){
  $(function(){

  

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('.btn_download').on('click', ()=>{
    	Materialize.toast('Estamos trabajando en esta caracteristica!', 3000, 'rounded')
    });
    $('#ser-cocinero').on('click', ()=>{
    	Materialize.toast('Escribenos a: icookteam@gmail.com!', 3000, 'rounded')
    });
    	// animacion del menu
  	$('nav ul li a').on('click', irA);
  	//$(window).scroll(scrollMenu);

  }); // end of document ready
})(jQuery); // end of jQuery name space

// funciones
function irA(){
	let seccion = $(this).attr("href");
	$('body,html').animate({scrollTop:$(seccion).offset().top-130
	}, 800);
	return false;
}
