// Index's question is to compute the area of the triangle spanned by two vectors. The vector lengths are not too big.

var ax, ay;
var bx, by;

var Index = {
	
    start : function() {
		ax = Math.floor(2000*Math.random())-1000;
		ay = Math.floor(2000*Math.random())-1000;
		bx = Math.floor(2000*Math.random())-1000;
		by = Math.floor(2000*Math.random())-1000;
		var text = "<b>From</b>: Index<br />";
        text += "<b>Subject</b>: triangle area<br /><br />";
		text += "Dear Assignee,<br />Could you help me find the area of the triangle spanned by the following two vectors <b>a</b> and <b>b</b>? Thanks!<br > "
		text += "<b>a</b> = <math>("+ax+", "+ay+")</math> and <b>b</b> = <math>("+bx+", "+by+").</math><br />";
		text += "For example, the following triangle is spanned by two vectors <b>a</b> and <b>b</b>:<br />";
		text += "<img src=\"https://upload.wikimedia.org/wikipedia/commons/2/24/Vector_subtraction.svg\" height=200></img><br />"
		text += "Thanks a lot for your work!<br /><br />Yours,<br /> <i>Index</i><br/>";
		text += "<img src=\"https://upload.wikimedia.org/wikipedia/en/3/3a/Toaru_Majutsu_no_Index_light_novel_cover_vol._1.jpg\" height=100></img>";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		if (Math.abs(parseFloat(rp) - Math.abs(ax*by-ay*bx)/2)<0.01) {
			document.getElementById("question").innerHTML = "Yes. That is right! You rule!<br />Thanks.<br /><br /> <i>Index</i><br />";
		}
		else {
			document.getElementById("question").innerHTML = "Sorry but the answer seems incorrect. <br /><br /> <i>Index</i><br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
