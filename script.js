//refresh for page 
$(".refresh").click(function() {
	location.reload();
});

$(".results1").hide();
$(".results2").hide();
$(".results3").hide();

$(".submit").click(function() {
    
    var results = $(".q1").val();
    	if (results === "1") {
            $(".results").text("You are 'The Quitter'. You may start building huge projects without a plan, only to give up halfway through. The game may have also just become boring to you - There is no in between.");
		} else {			
        	var results1 = $(".q2").val();
    			if (results1 === "Yes") {
        			$(".results").text("You are 'The Speedrunner'. The opposite of a joy. You’ll beat the game before the others even find a place to build the house.");
       			} else {
                    $(".results1").show();
                    $(".results").append("<p>Would you say you are the type to cause fights or stay away from them?</p>");
                    $(".fighter1").click(function() {
                        $(".results1").append("<p>You are 'The Fighter'. You like to kill most, if not all mobs. That may or may not include the other people in the server. Let's just tone it down a bit! ':)</p>");
                    });
                    $(".fighter2").click(function() {
						$(".results2").show();
                        
                        $(".miner").click(function() {
                            $(".results2").append("<p>You are 'The Miner'. Digs down to triple digits, and probably finds caves after caves after the update. Just don’t dig straight down.</p>");
                        });
                        
                        $(".builder").click(function() {
                            $(".results2").append("<p>You are 'The Builder'. Everyone adores you. You’re the reason why others don’t have a base underground or a random bed somewhere.</p>");
                        });
                        
                        $(".explorer").click(function() {
                            $(".results2").append("<p>You are 'The Explorer'. You’ll reach four-digit coords and still want to explore farther. Watch out or you’ll die and lose all your stuff!</p>");
                        });
                        
                        $(".extra_options").click(function() {
                            $(".results3").show();
                            
                            $(".farmer").click(function() {
                            	$(".results3").append("<p>You are 'The Farmer'. Finds relatively close villages and scavenges the crops. Takes it to base where you might have a barn of animals, and extend your endless food resource! Or you just really love animals haha!</p>");
                            });
                            
                            $(".steve").click(function() {
                            	$(".results3").append("<p>You are 'Steve'. You’re on the neutral side! Nice to be around - when you are around - and doesn’t cause any problems.. right?</p>");
                            });
                        });
                        
                    });
                }
        }
});






//counter?
//var counter = 0;
//$("button").click(function() {
//    counter += 1;
//	$(".counter").text("The quiz has been taken " + counter + " times");
//});
