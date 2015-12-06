window.onload = function  () {
	var btn = document.getElementById('btn');
	var ul1 = document.getElementsByClassName('ul1');

	btn.onclick = function  () {

		for (var i = 0; i < 10; i++) {
			var left = i*110;
			var j = i%4;

			var col = ["red","yellow","blue","green"] ;

			ul1[0].innerHTML += '<li class="li1" style="left:'+left+'px;background:'+col[j]+';"><p class="p1">'+i+'</p></li>';

		};
	}
	// btn.onclick();
}