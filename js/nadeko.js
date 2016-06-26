// Sengoku Nadeko's question is also very easy: minus two integers which are not very large!

var A, B;

var Nadeko = {
	
    start : function() {
		A = Math.floor(1000*Math.random());
		B = Math.floor(1000*Math.random());
		var text = "<b>From</b>: Nadeko<br />";
        text += "<b>Subject</b>: A simple question<br /><br />";
		text += "Dear Assignee,<br />Could you please help solve this question?<br > "
		text += A+" - "+B+" = ? <br />"
		text += "Thank you in advance!<br /><br />Yours,<br /> <i>Nadeko</i><br/>";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		if (parseInt(rp) == A-B) {
			document.getElementById("question").innerHTML = "Cool! Thank you a lot!<br /><br /> <i>Nadeko</i><br />";
		}
		else {
			document.getElementById("question").innerHTML = "Hmmm it seems not that correct... <br /><br /> <i>Nadeko</i><br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
