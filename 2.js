$(document).ready(function() {
	  var myChar = "";
	  var comChar = "";
	  var count = 0;
	 
	 function comMove() {
	   if($("#gz5").text() == "*"){
	     $("#gz5").text(comChar);
	   }
	   else if($("#gz1").text() == "*"){
	     $("#gz1").text(comChar);
	   }
	   else if($("#gz3").text() == "*"){
	     $("#gz3").text(comChar);
	   }
	   else if($("#gz7").text() == "*"){
	     $("#gz7").text(comChar);
	   }
	   else if($("#gz9").text() == "*"){
	     $("#gz9").text(comChar);
	   }
	   else if($("#gz2").text() == "*"){
	     $("#gz2").text(comChar);
	   }
	   else if($("#gz4").text() == "*"){
	     $("#gz4").text(comChar);
	   }
	   else if($("#gz6").text() == "*"){
	     $("#gz6").text(comChar);
	   }
	   else if($("#gz6").text() == "*"){
	     $("#gz8").text(comChar);
	   }
	 }
	 
	 function judge() {
	   var game = false;
	   if($("#gz1").text() == $("#gz2").text() && $("#gz2").text() == $("#gz3").text() && $("#gz1").text() != "*") {
	     game = true;
	   }
	   else if($("#gz4").text() == $("#gz5").text() && $("#gz5").text() == $("#gz6").text() && $("#gz4").text() != "*") {
	     game = true;
	   }
	   else if($("#gz7").text() == $("#gz8").text() && $("#gz8").text() == $("#gz9").text() && $("#gz7").text() != "*") {
	     game = true;
	   }
	   else if($("#gz1").text() == $("#gz4").text() && $("#gz4").text() == $("#gz7").text() && $("#gz4").text() != "*") {
	     game = true;
	   }
	   else if($("#gz2").text() == $("#gz5").text() && $("#gz5").text() == $("#gz8").text() && $("#gz2").text() != "*") {
	     game = true;
	   }
	   else if($("#gz3").text() == $("#gz6").text() && $("#gz6").text() == $("#gz9").text() && $("#gz3").text() != "*") {
	     game = true;
	   }
	   else if($("#gz1").text() == $("#gz5").text() && $("#gz5").text() == $("#gz9").text() && $("#gz1").text() != "*") {
	     game = true;
	   }
	   else if($("#gz3").text() == $("#gz5").text() && $("#gz5").text() == $("#gz7").text() && $("#gz3").text() != "*") {
	     game = true;
	   }
	   
	   return game;
	 }
	 
	 $("#xx").click(function(){
       myChar = "X";
	   comChar = "O";
	   $("#block2").hide("slow");
	   $("#block3").append("<p>你的代表符号是：X</p>");
	 });
	 
	 
	 $("#oo").click(function(){
       myChar = "O";
	   comChar = "X";
	   $("#block2").hide("slow");
	   $("#block3").append("<p>你的代表符号是：O</p>");
	 });
	 
	 
	 $("span").click(function(){
	    if(judge()) {
	     return false;
		}
		
		if($(this).text() == "*") {
	      $(this).text(myChar);
	      if(judge()) {
	        count++;
	        $("#block3").append("<p>第" + count + "局： 你赢得了比赛</p>");
		    return false;
	      }
	      comMove();
	      if(judge()) {
	        count++;
	        $("#block3").append("<p>第" + count + "局： 你输了比赛</p>");
	      }
	    }else{
		
		}
	 });
	 
	 $("#re").click(function() {
	   $("span").text("*");
	 });
	 
	 $("#new").click(function() {
	   $("span").text("*");
	 });
	 
	});