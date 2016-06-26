// Tessa's question is related to proof of work.

var prefix, k;

var Tessa = {
	
	check_prefix : function(s, p) {
		if (s.length < p.length) {
			return false;
		}
		for (i=0; i<p.length; i++){
			if (s[i] != p[i]) {
				return false;
			}
		}
		return true;
	},
	
	hashCode : function(s) {
		var hash = 0;
		if (s.length == 0) return hash;
		for (i=0; i<s.length; i++) {
			c = s.charCodeAt(i);
			hash = ((hash<<5)-hash)+c; // multiply by 31
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	},
	
    start : function() {
		prefix = Math.floor(1e10*Math.random()).toString();
		k = Math.floor(10*Math.random());
		var text = "<b>From</b>: Tessa Testarossa<br />";
        text += "<b>Subject</b>: Java hashCode and PoW<br /><br />";
		text += "Hi, my question is related with proof of work!<br />Could you help me find a string with "+prefix+" as prefix and all the "+k+" most significant bits of its Java hashcode are zeros? Thanks!<br /> ";
		text += "Java uses <a href=\"https://en.wikipedia.org/wiki/Java_hashCode()\">String.hashCode()</a> to compute the hashcode, which is a 32-bit integer. The method is as follows:<br />";
		text += "hashCode(s) = s[0] * 31^(n-1) + s[1] * 31^(n-2) + ... + s[n-1], where s[i] denotes the ASCII value of the i-th character in the string s.<br />";
		document.getElementById("question").innerHTML = text;
    },
		
	send : function() {
		var rp = document.getElementById("reply").value;
		var hc = (this.hashCode(rp) >> (32-k))
		if (hc == 0 && this.check_prefix(rp, prefix)) {
			document.getElementById("question").innerHTML = "Yes. I can see its correctness! Thank you very much!<br /><br /> <i>Tessa</i><br />";
		}
		else {
			document.getElementById("question").innerHTML = "Sorry but your string cannot pass the verification... <br /><br /> <i>Tessa</i><br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
