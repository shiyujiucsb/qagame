// Hatsune Miku needs a root of the given quadratic equation.

var a, b, c;

var Miku = {
	
    start : function() {
		a = 1
		do {
			c = Math.floor(2000*Math.random()-1000);
			delta = Math.floor(2000*Math.random()-1000);
			b = Math.floor(Math.sqrt(delta*delta + 4*a*c));
		} while (b*b - 4*a*c != delta*delta);
		var text = "<b>From</b>: Hatsune Miku<br />";
        text += "<b>Subject</b>: [help] A question on quadratic equation.<br /><br />";
		text += "Hi! I'm Miku :)<br />Could you help me find a solution for the following equation:<br > "
		text += "<math><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow>";
		if (b>=0) {
			text += "+";
		}
		text += b+"<mi>x</mi>";
		if (c>=0) {
			text += "+";
		}
		text += c+" = 0.</math><br />";
		text += "A good answer should be a precise decimal. <br />"
		text += "<i>PS: To see MathML in this email, please try Firefox or Camino. Sorry for any inconvenience!</i><br /><br />Thanks,<br /> <i>Miku</i> \\(^o^)/<br />";
		text += "<img src=\"https://upload.wikimedia.org/wikipedia/zh/f/fe/Hatsune_Miku_V3.png\" height=100></img>";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		var r = parseFloat(rp);
		var res = a*(r*r) + b*r + c;
		if (res == 0) {
			document.getElementById("question").innerHTML = "Right! I can verify it! Thank you!<br /><br /> <i>Miku</i><br />";
		}
		else {
			document.getElementById("question").innerHTML = "Errr. The right hand side is "+res+". It's not zero = = ||| <br /><br /> <i>Miku</i><br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
