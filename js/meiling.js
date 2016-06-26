// Meiling's question is very easy: calculate the lcm of two positive integers (not too large).

var A, B;

var Meiling = {
	
	gcd : function(a, b) {
		var resid;
		while (b != 0) {
			resid = a % b;
			a = b;
			b = resid;
		}
		return a;
	},
	
	lcm : function(a, b) {
		return a*b/this.gcd(a,b);
	},
	
    start : function() {
		A = Math.floor(1000*Math.random())+1;
		B = Math.floor(1000*Math.random())+1;
		D = Math.floor(1000*Math.random())+1;
		A *= D; B *= D;
		var text = "<b>From</b>: Hong, Meiling<br />";
        text += "<b>Subject</b>: least common multiplier<br /><br />";
		text += "Hello,<br />Could you help me compute the least common multiplier of ";
		text += A+" and "+B+"?<br />";
		text += "Thanks a lot! <br /><br />Cheers,<br /><i>Meiling</i><br/>";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		if (parseInt(rp) == this.lcm(A, B)) {
			document.getElementById("question").innerHTML = "Yes. That's correct. Thanks!<br />";
		}
		else {
			document.getElementById("question").innerHTML = "Are you sure? I don't think so. <br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
