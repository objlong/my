window.onload = function  () {
	var ul1 = document.getElementById('ul1');
	var ul2 = document.getElementById('ul2');
	var li1 = ul1.getElementsByTagName('li');
	var li2 = ul2.getElementsByTagName('li');
	var imgdiv = document.getElementById('imgdiv');
	var img = imgdiv.getElementsByTagName('img')[0];
	var n = 0;
	var m = 9;
	var timer = 0 ;
	var timer2 = 0;
	var images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'];
	function scroll() {
		clearInterval(timer);
		timer = setInterval(function  () {
			empty(li1);
			empty(li2);
			if (n <= 4) {
				li1[n].style.backgroundColor = "red";
				img.src = 'images/'+images[n];
				n++;
			}else{
				li2[m-5].style.backgroundColor = "red";
				img.src = 'images/'+images[m];
				m--;
			}
			if (m == 4) {
				n = 0;
				m = 9;
			}

		},1000)
	}
	scroll();
	for (var i = 0; i < li1.length; i++) {
		li1[i].index = i;
		li2[i].index = i;
		img.onmouseover = function  () {
			clearTimeout(timer2);
			clearInterval(timer);
		}
		img.onmouseout = function  () {
			scroll();			
		}
		li1[i].onmouseover = function  () {
			empty(li1);
			empty(li2);
			clearInterval(timer);
			clearTimeout(timer2);
			li1[this.index].style.backgroundColor = "red";
			img.src = 'images/'+images[this.index];

			this.onmouseout = function  () {
				clearTimeout(timer2);
				timer2 = setTimeout(function  () {
					empty(li1);
					empty(li2);
					scroll();
				},500);
			}
		}
		li2[i].onmouseover = function  () {
			empty(li1);
			empty(li2);
			clearInterval(timer);
			clearTimeout(timer2);
			li2[this.index].style.backgroundColor = "red";
			img.src = 'images/'+images[(this.index+5)];
			this.onmouseout = function  () {
				clearTimeout(timer2);
				timer2 = setTimeout(function  () {
					empty(li1);
					empty(li2);
					scroll();
				},500);
			}
		}

	};
	function empty (obj) {
		for (var i = 0; i < obj.length; i++) {
			obj[i].style.backgroundColor = '';
		}
	}
}