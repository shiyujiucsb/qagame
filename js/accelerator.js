// Accelerator's question is to compute the p-norm of the given vector.

var a, b, c, p;

var Accelerator = {
	norm : function(a,b,c,p) {
		if (p != Infinity) {
			var sum = 0.0;
			sum += Math.pow(Math.abs(a),p);
			sum += Math.pow(Math.abs(b),p);
			sum += Math.pow(Math.abs(c),p);
			return Math.pow(sum,1/p);
		}
		else {
			var r = 0;
			if (Math.abs(a) > r) r = Math.abs(a);
			if (Math.abs(b) > r) r = Math.abs(b);
			if (Math.abs(c) > r) r = Math.abs(c);
			return r;
		}
	},
	
    start : function() {
		a = Math.floor(1000*Math.random())-500;
		b = Math.floor(1000*Math.random())-500;
		c = Math.floor(1000*Math.random())-500;
		p = Math.floor(7*Math.random())+1
		if (p == 7)
			p = Infinity
		var text = "<b>From</b>: Accelerator<br />";
        text += "<b>Subject</b>: p-norm<br /><br />";
		if (p != Infinity)
			text += "Hi!<br />Could you help me the "+p+"-norm of the following vector?<br > ";
		else
			text += "Hi!<br />Could you help me the &infin;-norm of the following vector?<br > ";
		text += "<math><msup><mn>("+a+", "+b+", "+c+")</mn><mn>T</mn></msup></math><br /><br /><b>Error less than 0.01</b> is fine. Thank you!<br />";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		if (Math.abs(parseFloat(rp) - this.norm(a,b,c,p))<0.01) {
			document.getElementById("question").innerHTML = "Correct! Thank you!<br />";
		}
		else {
			document.getElementById("question").innerHTML = "Sorry but I do NOT think so. Thanks all the same... <br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
