// Matoh Sakura seeks a root of a complicated equation...

var a, b, c, d, e;

var MatohSakura = {
	
    start : function() {
		a = Math.floor(1000*Math.random());
		b = Math.floor(1000*Math.random());
		c = Math.floor(1000*Math.random());
		d = Math.floor(1000*Math.random());
		e = Math.floor(1000*Math.random());
		var text = "<b>From</b>: Matoh Sakura<br />";
        text += "<b>Subject</b>: HELP: Root of Equation<br /><br />";
		text += "Dear Helper,<br />I'm in a big trouble: could you please help me find a numeric solution to the following equation?<br > "
		text += "<math><mi>f</mi>(<mi>x</mi>) = "+a+"exp(<mi>x</mi>)+"+b+"<msup><mi>x</mi><mn>7</mn></msup>+"+c+"<msup><mi>x</mi><mn>5</mn></msup>+"+d+"<msup><mi>x</mi><mn>3</mn></msup>+"+e+" = 0.</math><br />";
		text += "A good numeric solution x satisfies |f(x)|<0.01. <br />";
		text += "I DO NEED this result to finish a magic assignment. It will help me a LOT if such a solution could be given! <br />";
		text += "<br />Thanks,<br /> <i>Sakura</i> \\(^o^)/<br />";
		text += "<img src=\"https://upload.wikimedia.org/wikipedia/en/d/d4/Fate-stay_night.jpg\" height=100></img>";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		var r = parseFloat(rp);
		var res = a*Math.exp(r)+b*Math.pow(r,7)+c*Math.pow(r,5)+d*Math.pow(r,3)+e;
		if (Math.abs(res)<0.01) {
			document.getElementById("question").innerHTML = "I verify your answer and it passes! You did a GREAT job! Thank you very much!<br /><br /> <i>Sakura</i><br />";
		}
		else {
			document.getElementById("question").innerHTML = "Errr. The right hand side is "+res+". It's not as precise as expected... <br /><br /> <i>Sakura</i><br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
