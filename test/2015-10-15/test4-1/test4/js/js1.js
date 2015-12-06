(function () {
	var i = 1;
	var listA1 = first.getElementsByTagName('a');
	var listA2 = second.getElementsByTagName('a');
	var imgArr = [
		'images/1.jpg',
		'images/2.jpg',
		'images/3.jpg',
		'images/4.jpg',
		'images/5.jpg',
		'images/6.jpg'
	];

	var timer = setInterval(function () {
		i = i === 6 ? 0 : i;
		render(i);
		i ++;
	}, 1000);

	function render (i) {
		setImg(i);
		setList(i)
	}

	function setImg (pos) {
		imageDom.src = imgArr[pos];
	}

	function setList (pos) {
		if (pos > 2) {
			first.className = 'rlist';
			second.className = 'rlist active';
			for (var i = 0, len = listA2.length; i < len; i ++) {
				listA2[i].className = '';
			}
			listA2[pos - 3].className = 'active';
			m2.className = 'active';
			m1.className = '';
		} else {
			first.className = 'rlist active';
			second.className = 'rlist';
			for (var i = 0, len = listA1.length; i < len; i ++) {
				listA1[i].className = '';
			}
			listA1[pos].className = 'active';

			m1.className = 'active';
			m2.className = '';
		}
	}
})();