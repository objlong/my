window.onload = function  () {
	var btn1 = document.getElementById('btn1');
	var btn2 = document.getElementById('btn2');
	var ul = document.getElementsByTagName('ul')[0];
	btn1.onmousedown = function  () {
		btn1.timer = setInterval(function  () {
			var v = parseInt(css(ul,'marginTop'));
			v -= 4;
			if (v<=-990) {
				v = -990;
				clearInterval(btn1.timer);
			}
			ul.style.marginTop = v+'px';
		},16)
	}
	btn1.onmouseup = function  () {
		clearInterval(btn1.timer);
	}
	btn2.onmousedown = function  () {
		btn2.timer = setInterval(function  () {
			var v = parseInt(css(ul,'marginTop'));
			v += 4;
			if (v>=30) {
				v = 30;
				clearInterval(btn2.timer);
			}
			ul.style.marginTop = v+'px';
		},16)
	}
	btn2.onmouseup = function  () {
		clearInterval(btn2.timer);
	}
	function css (obj,attr) {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj)[attr];
		}
	}
}