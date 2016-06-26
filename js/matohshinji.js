// Shinji Matoh's question is about the focus length of a given parabola.

var p;

var MatohShinji = {
	
    start : function() {
		p = Math.floor(20000*Math.random())-10000;
		var text = "<b>From</b>: Shinji Matoh<br />";
        text += "<b>Subject</b>: focus length<br /><br />";
		text += "Hi!<br />I don't know what focus length is.. Could you help me find the focus length of the following parabola?<br > "
		text += "<math>y = "+p+"<msup>x<mo>2</mo></msup> </math><br />";
		text += "Btw, the text is available on <a href=\"https://en.wikipedia.org/wiki/Parabola\">Wikipedia</a>. <br />Thanks,<br /> <i>Shinji</i><br/>";
		text += "<img src=\"https://upload.wikimedia.org/wikipedia/ms/1/1f/Shinji_dan_Rider.JPG\" height=100></img>";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		if (Math.abs(parseFloat(rp) - Math.abs(p/4)) < 0.01) {
			document.getElementById("question").innerHTML = "That's right! I got correct for my homework. Thank you! Will turn to you for help next time.<br /><br /> <i>Shinji</i><br /><img src=\"https://upload.wikimedia.org/wikipedia/ms/3/30/Zoken.jpg\" height=100></img>";
		}
		else {
			document.getElementById("question").innerHTML = "Sorry it seems you didn't get it right. I got wrong back... <br /><br /> <i>Shinji</i><br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
