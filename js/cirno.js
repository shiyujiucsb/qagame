// Cirno's question is very easy: add two integers which are not very large!

var A, B;

var Cirno = {
	
    start : function() {
		A = Math.floor(1000*Math.random());
		B = Math.floor(1000*Math.random());
		var text = "<b>From</b>: Cirno<br />";
        text += "<b>Subject</b>: Request on a simple question<br /><br />";
		text += "Hi!<br />Could you help me solve the question as below? Thanks!<br > "
		text += A+" + "+B+" = ? <br /><br />Yours,<br /> <i>Cirno</i><br/>";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		if (parseInt(rp) == A+B) {
			document.getElementById("question").innerHTML = "Yes. That makes sense. Thank you!<br /><br /> <i>Cirno</i><br />";
		}
		else {
			document.getElementById("question").innerHTML = "Sorry but I still got wrong for this question. Thanks anyway... <br /><br /> <i>Cirno</i><br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
