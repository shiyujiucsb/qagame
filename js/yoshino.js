// Yoshino's question is the number of unique lattice paths from Project Euler.

var m, n;

var Yoshino = {
	
    start : function() {
		m = Math.floor(30*Math.random())+2;
		n = Math.floor(30*Math.random())+2;
		var text = "<b>From</b>: Yoshino<br />";
        text += "<b>Subject</b>: Lattice paths<br /><br />";
		text += "Hi!<br />This problem was from <a href=\"https://projecteuler.net/problem=15\">Project Euler</a>..<br >"
		text += "Here I quote the question as: a valid path goes from the top-left point of the lattice to the bottom-right one, and it can only go to right or down each time.<br />";
		text += "The size of the lattice is "+m+" by "+n+".<br />";
		text += "Please reply with the number of unique lattice paths.<br />Thanks,<br /> <i>Yoshino</i><br/>";
		document.getElementById("question").innerHTML = text;
    },
	
	uniquePaths : function(m, n) {
		if (m===0 || n===0) return 0;
		if (m===1 || n===1) return 1;
		var rec = new Array(m+1);
		for (i=0;i<=m;i++)
			rec[i] = new Array(n+1);
		
		for (i=1;i<=m;i++)
			rec[i][1] = 1;
		for (j=1;j<=n;j++)
			rec[1][j] = 1;
		
		for (i=2;i<=m;i++) {
			for (j=2;j<=n;j++) {
				rec[i][j] = rec[i-1][j] + rec[i][j-1];
			}
		}
		return rec[m][n];
	},
	
	send : function() {
		var rp = document.getElementById("reply").value;
		if (parseInt(rp) == this.uniquePaths(m+1,n+1)) {
			document.getElementById("question").innerHTML = "I was told you're right! Thank you!<br /><br /> <i>Yoshino</i><br />";
		}
		else {
			document.getElementById("question").innerHTML = "It doesn't look correct to me.. <br /><br /> <i>Yoshino</i><br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
