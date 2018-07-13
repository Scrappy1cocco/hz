var main_slider = document.querySelector('.owl-carousel');
if (main_slider) {
  $('.owl-carousel').owlCarousel({
    loop:false,    
    items:1   
})
}
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      step: 100,
      min: 0,
      max: 22000,
      values: [ 0, 15000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ] );
        $( "#amount_2" ).val(ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount_2" ).val( $( "#slider-range" ).slider( "values", 1 ) );
    
    var vanPut = document.querySelector("#amount");
    vanPut.addEventListener('input', function(){
    	var value = this.value.substring(1);
	    $("#slider-range").slider("values", 0, parseInt(value));
    })
    var tuPut = document.querySelector("#amount_2");
    tuPut.addEventListener('input', function(){
    	var value = this.value.substring(1);
	    $("#slider-range").slider("values", 1, parseInt(value));
    })
});

function initMap() {
		  var uluru = {lat: 59.9387, lng: 30.3238};
		  var mid = {lat: 59.9391642, lng: 30.3216};
		  var map = new google.maps.Map(
		      document.getElementById('map'), {zoom: 17, center: mid});
		  var marker = new google.maps.Marker({
		  	  position: uluru,
		  	  map: map,
		  	  title: 'Nerds',
			  icon: {
				url: "nerds-img/content/map-marker.png"
			}
		 });
	}