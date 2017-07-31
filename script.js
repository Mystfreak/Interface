$(document).ready(function(){ 
						   
 $(document).keypress('keypress',function(e){
 	// Sets the color when the key is down...
      if(e.which==13){
         $("#systembox").css('background-color','yellow');
     }
 });
 $(document).keyup(function() {
    // Removes the color when any key is lifted...
    $("#systembox").css("background-color", "");
});

 $(document).keypress('keypress',function(e){
 	// Sets the color when the key is down...
      if(e.which==77 || e.which==109){
         $("#innercircle").css('background-color','yellow');
     }
 });
 $(document).keyup(function() {
    // Removes the color when any key is lifted...
    $("#innercircle").css("background-color", "");
});
  $(document).keypress('keypress',function(e){
  	// Sets the color when the key is down...
      if(e.which==49){
         $("#firstbox").css('background-color','yellow');
     }
 });
 $(document).keyup(function() {
    // Removes the color when any key is lifted...
    $("#firstbox").css("background-color", "");
});
 $(document).keypress('keypress',function(e){
  	// Sets the color when the key is down...
      if(e.which==50){
         $("#secondbox").css('background-color','yellow');
     }
 });
 $(document).keyup(function() {
    // Removes the color when any key is lifted...
    $("#secondbox").css("background-color", "");
});
	$(document).keypress('keypress',function(e){
  	// Sets the color when the key is down...
      if(e.which==51){
         $("#thirdbox").css('background-color','yellow');
     }
 });
 $(document).keyup(function() {
    // Removes the color when any key is lifted...
    $("#thirdbox").css("background-color", "");
});
	
	$(document).keypress('keypress',function(e){
  	// Sets the color when the key is down...
      if(e.which==81 || e.which==113){
         $("#cctvbox").css('background-color','yellow');
     }
 });
 $(document).keyup(function() {
    // Removes the color when any key is lifted...
    $("#cctvbox").css("background-color", "");
});

 $(document).keypress('keypress',function(e){
  	// Sets the color when the key is down...
      if(e.which==32){
         $("#welcomebox").css('background-color','yellow');
     }
 });
 $(document).keyup(function() {
    // Removes the color when any key is lifted...
    $("#welcomebox").css("background-color", "");
});
});