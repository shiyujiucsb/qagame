// Touma's question is very easy: multiply two integers which are not very large!

var A, B;

var Touma = {
	
    start : function() {
		A = Math.floor(1000*Math.random());
		B = Math.floor(1000*Math.random());
		var text = "<b>From</b>: Touma<br />";
        text += "<b>Subject</b>: help..<br /><br />";
		text += "Hi!<br />Index urges me to do this:<br > "
		text += "<math>"+A+" &#xD7; "+B+" = ? </math><br /><br />Thanks,<br /> <i>Touma</i><br/>";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		if (parseInt(rp) == A*B) {
			document.getElementById("question").innerHTML = "Index told me it's right! Thank you!<br /><br /> <i>Touma</i><br />";
		}
		else {
			document.getElementById("question").innerHTML = "Sorry it seems you didn't get it right. But still thank you. <br /><br /> <i>Touma</i><br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
