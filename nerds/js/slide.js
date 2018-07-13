$('.owl-carousel').owlCarousel({
    loop:false,    
    items:1   
})

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