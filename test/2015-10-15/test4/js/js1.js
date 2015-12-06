window.onload = function  () {
	var rlist = document.getElementsByClassName('rlist');
	var bbox = document.getElementsByClassName('bbox');
	var tlist = document.getElementsByClassName('tlist')[0];
	var aA1 = tlist.getElementsByTagName('a');
	var aA2 = rlist[0].getElementsByTagName('a');
	var aA3 = rlist[1].getElementsByTagName('a');
	var imgs = document.getElementsByTagName('img')[0];
	var imgArr = [
		'images/1.jpg',
		'images/2.jpg',
		'images/3.jpg',
		'images/4.jpg',
		'images/5.jpg',
		'images/6.jpg'
	];
	function ss () {
		var i = 0 ;	
		timer = setInterval(function(){
			if (i<3) {
				rlist[0].style.display = 'block';
				rlist[1].style.display = 'none';
				clean (aA2,'backgroundColor');
				aA2[i].style.backgroundColor = '#5B5BC1';
				imgs.src = imgArr[i];
				aA1[0].style.backgroundColor = 'red';
				aA1[1].style.backgroundColor = '';

			}else{
				rlist[0].style.display = 'none';
				rlist[1].style.display = 'block';
				clean (aA3,'backgroundColor');
				aA3[i-3].style.backgroundColor = '#5B5BC1';
				imgs.src = imgArr[i];	
				aA1[0].style.backgroundColor = '';
				aA1[1].style.backgroundColor = 'red';	
			}
			i++;
			if (i>=6) {
				i = 0;
			}
		},1000)
	}
	ss()
	function clean (obj,attr) {
		for (var i = 0; i < obj.length; i++) {
			obj[i].style[attr] = '';
		};
	}
}