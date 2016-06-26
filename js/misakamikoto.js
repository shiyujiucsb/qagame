// Mikoto's question is about the eccentricity of conic sections.

var a2, b2, c2; // a^2 x^2 + b^2 y^2 = c^2

var MisakaMikoto = {
	ecc : function(a2,b2,c2) {
		if (a2>0) {
			// ellipse
			if (a2 < b2)
				return Math.sqrt(1-a2/b2);
			else
				return Math.sqrt(1-b2/a2);
		}
		else {
			// hyperbola
			return Math.sqrt(1-b2/a2);
		}
	},
	
    start : function() {
		do{
			a2 = Math.floor(2000*Math.random())-1000;
		} while(a2 == 0);
		b2 = Math.floor(1000*Math.random())+1;
		c2 = Math.floor(1000*Math.random())+1;
		var text = "<b>From</b>: Misaka Mikoto<br />";
        text += "<b>Subject</b>: Eccentricity..<br /><br />";
		text += "Dear Assignee,<br />Eccentricity of conic sections is defined <a href=\"https://en.wikipedia.org/wiki/Eccentricity_(mathematics)\">here</a>. Note that it's NOT the <i>Linear</i> Eccentricity!<br >";
		text += "Now the conic section equation is:<br />";
		text += "<math>"+a2+"<msup>x<mo>2</mo></msup> +"+b2+"<msup>y<mo>2</mo></msup> = "+c2+"</math>.<br />";
		text += "Please give me the eccentricity of this section! Error less than 0.01 is ok!<br />Thanks,<br /> <i>Mikoto</i><br/>";
		text += "<img src=\"https://upload.wikimedia.org/wikipedia/zh/6/60/%E5%BE%A1%E5%9D%82%E7%BE%8E%E7%90%B4.png\" height=100></img>";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		if (Math.abs(parseFloat(rp) - this.ecc(a2,b2,c2))<0.01) {
			document.getElementById("question").innerHTML = "Looks like it's correct! Thank you!<br /><br /> <i>Mikoto</i><br /><img src=\"https://upload.wikimedia.org/wikipedia/it/0/0f/Mikoto_Misaka.png\" height=100></img>";
		}
		else {
			document.getElementById("question").innerHTML = "My professor told me you were wrong :(<br /><br /> <i>Mikoto</i><br /><img src=\"https://upload.wikimedia.org/wikipedia/it/0/0f/Mikoto_Misaka.png\" height=100></img>";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
