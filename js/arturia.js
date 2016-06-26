// Alturia's question is to find the Bezier point (see below for details).

var x1, x2; // left and right points
var p; // y = px^2

var Arturia = {
	
    start : function() {
		x1 = Math.floor(2000*Math.random())-1000;
		x2 = x1+Math.floor(2000*Math.random());
		p = Math.floor(1000*Math.random());
		var text = "<b>From</b>: Arturia Pendragon<br />";
        text += "<b>Subject</b>: parabola and Bezier<br /><br />";
		text += "To whom it may concern,<br /><br />I have a parabola: <math>y = "+p+"<msup>x<mo>2</mo></msup></math>.<br >"
		text += "Now I have two points on this parabola: ("+x1+", "+x1*x1*p+") and ("+x2+", "+x2*x2*p+"). ";
		text += "If I would like to exactly reconstruct the segmented parabola curve between these two points using quadratic Bezier curve, ";
		text += "how should I choose the third point to define the Bezier curve? Please see below for an example from Wikipedia:<br />";
		text += "<img src=\"https://upload.wikimedia.org/wikipedia/commons/4/4f/Relationship_between_parabola_and_quadratic_Bezier.svg\" height = 300></img><br />";
		text += "I also know that x position of the third point is just at the middle of the two given points. Now I need to know the y position of it!<br />";
		text += "<b>Please reply with the y position value of the third Bezier point which is off the parabola.</b><br />";
		text += "This <a href=\"https://en.wikipedia.org/wiki/Parabola\">Wikipedia article</a> talks about parabola and <a href=\"https://en.wikipedia.org/wiki/Bezier_curve\">this one</a> is about Bezier curves.<br /><br />Regards,<br /> <i>Arturia</i><br/>";
		text += "<img src=\"https://upload.wikimedia.org/wikipedia/en/7/75/Saber.jpg\" height=100></img>";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		if (parseInt(rp) == p*x1*x2) {
			document.getElementById("question").innerHTML = "You are right. Thank you! I look forward to further cooperation with you!<br /><br /> <i>Arturia</i><br /><img src=\"https://upload.wikimedia.org/wikipedia/ms/7/7e/Saber_FSN.JPG\" height=100></img>";
		}
		else {
			document.getElementById("question").innerHTML = "Sorry but your solution doesn't seem correct. <br /><br /> <i>Arturia</i><br /><img src=\"https://upload.wikimedia.org/wikipedia/ms/archive/7/7e/20080706191557%21Saber_FSN.JPG\" height=100></img>";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
