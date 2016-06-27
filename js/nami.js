// Nami's question is about the number of islands given the map.

var map;

var Nami = {
	
    start : function() {
		var m = Math.floor(20*Math.random())+10;
		var n = Math.floor(20*Math.random())+50;
		map = new Array(m);
		for (i=0;i<m;i++) {
			map[i] = new Array(n);
			map[i][0] = map[i][n-1] = 0;
			for (j=1;j<n-1;j++) {
				if (i===0 || i===m-1)
					map[i][j] = 0;
				else
					map[i][j] = Math.floor(2*Math.random());
			}
		}
		var text = "<b>From</b>: Nami<br />";
        text += "<b>Subject</b>: number of islands<br /><br />";
		text += "Hi!<br />Luffy and I have some disagreement over this question..<br >"
		text += "Here is the map of an area: the blue <font color=\"blue\">0</font>'s denote sea, and the bold brown <b style=\"color:brown\">1</b>'s denote land. The question is how many islands there are in the map. <br />";
		text += "<p style=\"font-family:monospace; font-size:20px\">";
		for (i=0;i<m;i++) {
			for (j=0;j<n;j++) {
				if (map[i][j] === 0)
					text += "<font color=\"blue\">0</font>";
				else
					text += "<b style=\"color:brown\">1</b>";
			}
			text += "<br />";
		}
		text += "</p>";
		text += "An island is surrounded by sea and is formed by connecting adjacent lands horizontally or vertically.<br />";
		text += "Btw <a href=\"https://leetcode.com/problems/number-of-islands/\">Leetcode</a> gives a good introduction to the map also.<br />Thanks,<br /> <i>Nami</i><br/>";
		document.getElementById("question").innerHTML = text;
    },
	
	numIslands : function(grid) {
		if (grid.length === 0) {
			return 0;
		}
		if (grid[0].length === 0) {
			return 0;
		}
		numberOfIslands = 0;
		var h = grid.length;
		var w = grid[0].length;
		for (i=0;i<h;i++) {
			for (j=0;j<w;j++) {
				if (grid[i][j] != "0") {
					numberOfIslands += 1;
					var q = [];
					grid[i][j] = "0";
					q.push([i,j]);
					while (q.length>0) {
						var point = q.shift();
						var x = point[0];
						var y = point[1];
						if (x>0) {
							if (grid[x-1][y] != "0") {
								grid[x-1][y] = "0";
								q.push([x-1,y]);
							}
						}
						if (x<h-1) {
							if (grid[x+1][y] != "0") {
								grid[x+1][y] = "0";
								q.push([x+1,y]);
							}
						}
						if (y>0) {
							if (grid[x][y-1] != "0") {
								grid[x][y-1] = "0";
								q.push([x,y-1]);
							}
						}
						if (y<w-1) {
							if (grid[x][y+1] != "0") {
								grid[x][y+1] = "0";
								q.push([x,y+1]);
							}
						}
					}
				}
			}
		}
		return numberOfIslands;
	},
	
	send : function() {
		var rp = document.getElementById("reply").value;
		if (parseInt(rp) == this.numIslands(map)) {
			document.getElementById("question").innerHTML = "I agree with you! Now I can convince the captain. Thank you!<br /><br /> <i>Nami</i><br />";
		}
		else {
			document.getElementById("question").innerHTML = "I don't think so.. Is it that hard? <br /><br /> <i>Nami</i><br />";
		}
		var btn = document.getElementById("butn");
		btn.innerHTML = "Try another one!";
		btn.setAttribute("onmouseup", "refresh()"); 
	}
}
