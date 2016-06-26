// Tohsaka Rin's question is to compute the size of the power set of a finite set.

var n;

var TohsakaRin = {
	
    start : function() {
		n = Math.floor(32*Math.random());
		var text = "<b>From</b>: Rin Tohsaka<br />";
        text += "<b>Subject</b>: finite power set size<br /><br />";
		text += "Dear Assignee,<br />Can you help me calculate the size of the power set of a finite set with "+n+" elements?<br > "
		text += "<br />Many thanks,<br /> <i>Rin</i><br/>";
		text += "<img src=\"https://upload.wikimedia.org/wikipedia/en/d/d3/Rin_Archer.jpg\" height=100></img>";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		var ans = (1 << n);
		if (parseInt(rp) == ans) {
			document.getElementById("question").innerHTML = "Yes. That looks good! You are good at this!<br />Thanks.<br /><br /> <i>Rin</i><br />";
		}
		else {
			document.getElementById("question").innerHTML = "That's incorrect! You can't do this?! <br /><br /> <i>Rin</i><br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
