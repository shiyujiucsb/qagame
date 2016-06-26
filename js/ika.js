// Ika's question is to calculate the integral over a power function.

var a, b; // a*x^b
var l, r; // left and right of the interval

var Ika = {
	
	intgrPoly : function(a,b,l,r) {
		return a*Math.pow(r,b+1)/(b+1) - a*Math.pow(l,b+1)/(b+1);
	},
	
    start : function() {
		a = Math.floor(1000*Math.random());
		b = Math.floor(8*Math.random());
		l = Math.floor(10*Math.random())-5;
		r = l+Math.floor(10*Math.random());
		var text = "<b>From</b>: Ika<br />";
        text += "<b>Subject</b>: Integral problem<br /><br />";
		text += "Hi!<br />Could you find the integral value of the following function over the interval ("+l+", "+r+")? Thanks!<br > "
		text += "<math><mi>f</mi>(<mi>x</mi>) = "+a+"<msup><mi>x</mi><mn>"+b+"</mn></msup></math>.<br />"
		text += "<b>Error less than 0.01</b> would be fine.<br />";
		text += "This <a href=\"https://en.wikipedia.org/wiki/Integral\">Wikipedia article</a> gives more info about integration which will be used here.<br /><br />Yours,<br /> <i>Ika</i><br/>";
		text += "<img src=\"https://upload.wikimedia.org/wikipedia/vi/b/bb/Shinryaku%21_Ika_Musume_DVD_boxset_cover.jpg\" height=100></img>";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		if (Math.abs(parseFloat(rp)-this.intgrPoly(a,b,l,r)) < 0.01) {
			document.getElementById("question").innerHTML = "Yes. That is right. Thank you!<br /><br /> <i>Ika</i><br />";
		}
		else {
			document.getElementById("question").innerHTML = "Sorry but I don't think so... Thanks anyway... <br /><br /> <i>Ika</i><br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
