window.onload = function  () {
	var btn = document.getElementById('btn');
	var left = document.getElementById('left');
	var right =document.getElementById('right');
	var num = document.getElementById('num');
	var ali = document.getElementsByTagName('li');
	var aul = document.getElementsByTagName('ul')[0];
	var timer;
	var n = 0;
	btn.onclick = function  () {
		clearInterval(timer);
		aul.style.opacity = 1;
		var str;
		var str2;
		right.innerHTML = '';
		str = left.innerHTML;
		var l = left.innerHTML.length + right.innerHTML.length;
		timer = setInterval(function  () {
			str2 = str.charAt(0);
			str = str.substring(1);
			left.innerHTML = str;
			right.innerHTML += str2;
			num.innerHTML = right.innerHTML.length + '/' +l;
			if (str.length == 0) {
				clearInterval(timer);
				aul.style.opacity = 0;
			}
			for (var i = 0; i < ali.length; i++) {
				ali[i].className = '';
			}
			ali[n].className = 'active';
			n++;
			if (n == ali.length) {
				n = 0;
			}
		},50)
	}
}