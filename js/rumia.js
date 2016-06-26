// Rumia's question is very easy: calculate the gcd of two positive integers (not too large).

var A, B;

var Rumia = {
	
	gcd : function(a, b) {
		var resid;
		while (b != 0) {
			resid = a % b;
			a = b;
			b = resid;
		}
		return a;
	},
	
    start : function() {
		A = Math.floor(1000*Math.random())+1;
		B = Math.floor(1000*Math.random())+1;
		D = Math.floor(1000*Math.random())+1;
		A *= D; B *= D;
		var text = "<b>From</b>: Rumia<br />";
        text += "<b>Subject</b>: gcd question<br /><br />";
		text += "Dear Assignee,<br />Can you help find the greatest common divisor of ";
		text += A+" and "+B+"?<br />";
		text += "I heard some help introduced by Reimu: <a href=\"https://en.wikipedia.org/wiki/Euclidean_algorithm\">Wikipedia!</a><br />";
		text += "Thank you. <br /><br />Best,<br /><i>Rumia</i><br/>";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		if (parseInt(rp) == this.gcd(A, B)) {
			document.getElementById("question").innerHTML = "Yes. That's right. Thank you!<br />Can I ask more in the future? :)<br /><br />Best,<br /><i>Rumia</i><br />";
		}
		else {
			document.getElementById("question").innerHTML = "Well. It does not seem right... Thanks anyway... <br /><br /> <i>Rumia</i><br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
