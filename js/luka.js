// Megurine Luka needs the dot product of two vectors.

var a1, a2, a3;
var b1, b2, b3;

var Luka = {
	
    start : function() {
		a1 = Math.floor(Math.random()*1000)-500;
		a2 = Math.floor(Math.random()*1000)-500;
		a3 = Math.floor(Math.random()*1000)-500;
		b1 = Math.floor(Math.random()*1000)-500;
		b2 = Math.floor(Math.random()*1000)-500;
		b3 = Math.floor(Math.random()*1000)-500;
		var text = "<b>From</b>: Megurine Luka<br />";
        text += "<b>Subject</b>: [help] A quick question on dot product.<br /><br />";
		text += "Dear Assignee,<br />Can you help me calculate the inner product (aka <a href=\"https://en.wikipedia.org/wiki/Dot_product\">dot product</a>) of the following vectors?<br > "
		text += "<math><msup><mn>("+a1+", "+a2+", "+a3+")</mn><mn>T</mn></msup></math><br />";
		text += "<math><msup><mn>("+b1+", "+b2+", "+b3+")</mn><mn>T</mn></msup></math><br />";
		text += "<i>PS: Please use Firefox to see the MathML in this email. Sorry for the incurred inconvenience!</i><br /><br />Thanks,<br /> <i>Luka</i> \\(^o^)/<br />";
		text += "<img src=\"https://upload.wikimedia.org/wikipedia/zh/7/7d/Luka_Megurine.png\" height=100></img>";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		var res = parseInt(rp);
		if (res == a1*b1+a2*b2+a3*b3) {
			document.getElementById("question").innerHTML = "Awesome! Thank you!<br /><br /> <i>Luka</i><br />";
		}
		else {
			document.getElementById("question").innerHTML = "Well, it doesn't seem right... --||| <br /><br /> <i>Luka</i><br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
