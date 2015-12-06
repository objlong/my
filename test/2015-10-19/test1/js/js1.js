window.onload = function  () {
	var aul = document.getElementsByTagName('ul')[0];
	var ali = document.getElementsByTagName('li');
	var aspan = document.getElementsByTagName('span');
	var n = 0;
	changgeSpan(0);
	function changgeImg (n) {
		timer = setInterval(function(){
			var lefts = parseInt(css(aul,'marginLeft'));
			if (n == 5) {
				n = 0;
			}
			lefts -= 4;
			if (lefts <= -500*n) {
				lefts = -500*n;
				clearInterval(timer);
				changgeSpan(n);
			}
			aul.style.marginLeft = lefts+'px';

		},16)
	}	
	function changgeSpan (n) {
			if(n == 0){
				for (var i = 0; i < aspan.length; i++) {
					aspan[i].style.marginBottom = '0px';
				}
			}
		timer2 = setInterval(function(){
			var bottoms = parseInt(css(aspan[n],'marginBottom'));

			bottoms -= 4;
			aspan[n].style.marginBottom = bottoms+'px';
			if (bottoms <= -50) {
				bottoms = -50;
				aspan[n].style.marginBottom = bottoms+'px';
				clearInterval(timer2);
				n++;
				changgeImg(n);
			}
		},32)

	}

	function css (obj,attr) {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj)[attr];
		}
	}
}