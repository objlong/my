window.onload = function  () {
	var btn = document.getElementById('btn');
	var ul1 = document.getElementsByClassName('ul1');
	btn.onclick = function  () {
		for (var i = 0; i < 5; i++) {
			var left = i * 100;
			//var top = Math.floor(i%((3/i)+1))*100;
			var top = i%(-(i-5))*100;
			ul1[0].innerHTML += '<li class="li1" style="left:'+left+'px;top:'+top+'px;"><p class="p1">'+i+'</p></li>'
		};
		// body...
	}
	// body...
}	