console.log("Loaded custom JS")
$( "#window-2" ).click(function (){
	$( ".editor" ).addClass( "editor--2-windows-layout" );
  $( "#window-1" ).show();
  $( "#window-2" ).hide();
});

$( "#window-1" ).click(function (){
	$( ".editor" ).removeClass( "editor--2-windows-layout" );
  $( "#window-2" ).show();
  $( "#window-1" ).hide();
});
