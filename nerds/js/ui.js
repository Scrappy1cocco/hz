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
  } );